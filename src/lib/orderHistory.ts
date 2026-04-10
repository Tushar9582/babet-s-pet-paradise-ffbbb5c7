export interface OrderHistoryItem {
  name: string;
  qty: number;
  price: number;
}

export interface OrderHistoryRecord {
  id: string;
  items: OrderHistoryItem[];
  subtotal: number;
  status: string;
  created_at: string;
}

const ORDER_HISTORY_STORAGE_PREFIX = "cadogs-order-history";

const isBrowser = typeof window !== "undefined";

const getStorageKey = (userId: string) => `${ORDER_HISTORY_STORAGE_PREFIX}:${userId}`;

const isOrderHistoryItem = (value: unknown): value is OrderHistoryItem => {
  if (!value || typeof value !== "object") return false;

  const item = value as Record<string, unknown>;
  return (
    typeof item.name === "string" &&
    typeof item.qty === "number" &&
    Number.isFinite(item.qty) &&
    typeof item.price === "number" &&
    Number.isFinite(item.price)
  );
};

const normalizeItems = (items: unknown): OrderHistoryItem[] => {
  if (!Array.isArray(items)) return [];
  return items.filter(isOrderHistoryItem);
};

const createOrderFingerprint = (order: Pick<OrderHistoryRecord, "created_at" | "subtotal" | "status" | "items">) =>
  JSON.stringify({
    created_at: order.created_at,
    subtotal: order.subtotal,
    status: order.status,
    items: order.items.map((item) => ({
      name: item.name,
      qty: item.qty,
      price: item.price,
    })),
  });

const createOrderId = () => {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `order-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
};

export const createPendingOrderRecord = (
  items: OrderHistoryItem[],
  subtotal: number,
): OrderHistoryRecord => ({
  id: createOrderId(),
  items,
  subtotal,
  status: "pending",
  created_at: new Date().toISOString(),
});

export const normalizeOrderHistory = (orders: unknown[]): OrderHistoryRecord[] => {
  return orders.flatMap((entry) => {
    if (!entry || typeof entry !== "object") return [];

    const order = entry as Record<string, unknown>;
    const items = normalizeItems(order.items);
    const subtotal = Number(order.subtotal);

    if (items.length === 0 || Number.isNaN(subtotal)) {
      return [];
    }

    return [
      {
        id: typeof order.id === "string" && order.id.length > 0 ? order.id : createOrderId(),
        items,
        subtotal,
        status: typeof order.status === "string" && order.status.length > 0 ? order.status : "pending",
        created_at:
          typeof order.created_at === "string" && order.created_at.length > 0
            ? order.created_at
            : new Date().toISOString(),
      },
    ];
  });
};

export const readLocalOrderHistory = (userId: string): OrderHistoryRecord[] => {
  if (!isBrowser) return [];

  try {
    const raw = window.localStorage.getItem(getStorageKey(userId));
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return normalizeOrderHistory(parsed).sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    );
  } catch {
    return [];
  }
};

export const saveOrderHistoryLocally = (userId: string, order: OrderHistoryRecord) => {
  if (!isBrowser) return;

  const existingOrders = readLocalOrderHistory(userId);
  const mergedOrders = mergeOrderHistory([order], existingOrders);
  window.localStorage.setItem(getStorageKey(userId), JSON.stringify(mergedOrders));
};

export const mergeOrderHistory = (
  primaryOrders: OrderHistoryRecord[],
  secondaryOrders: OrderHistoryRecord[],
): OrderHistoryRecord[] => {
  const uniqueOrders = new Map<string, OrderHistoryRecord>();

  [...primaryOrders, ...secondaryOrders].forEach((order) => {
    const fingerprint = createOrderFingerprint(order);
    if (!uniqueOrders.has(fingerprint)) {
      uniqueOrders.set(fingerprint, order);
    }
  });

  return [...uniqueOrders.values()].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  );
};
