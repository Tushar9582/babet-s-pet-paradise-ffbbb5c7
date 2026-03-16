import exotix500 from "@/assets/exotix-500mg.jpg";
import exotix1000 from "@/assets/exotix-1000mg.jpg";
import primeJoint from "@/assets/prime-joint.jpg";
import showcharge from "@/assets/showcharge-heart.jpg";
import keramaxy from "@/assets/keramaxy-shampoo.jpg";
import furluxImg from "@/assets/furlux-product.jpg";
import furmuffinImg from "@/assets/furmuffin-product.jpg";

export interface Product {
  id: string;
  name: string;
  generic?: string;
  form: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  category: string;
  sku: string;
  tags: string[];
  description: string;
  indications: string;
  composition: string;
  dosage: string;
  mechanism: string;
  precautions: string;
  packing: string;
}

export const products: Product[] = [
  {
    id: "exotix-250",
    name: "Exotix Fluralaner 250mg",
    generic: "Fluralaner",
    form: "Chewable Tablet",
    price: 609,
    image: exotix500,
    rating: 5,
    reviews: 42,
    badge: "New",
    category: "Flea & Tick",
    sku: "EXO-250",
    tags: ["Flea", "Tick", "Dog", "Chewable"],
    description: "Kills and controls fleas and ticks for up to 12 weeks in dogs.",
    indications: "Treatment/prevention of flea infestations, control of tick/mite infestations, assists in controlling flea allergy dermatitis (FAD).",
    composition: "Fluralaner 250mg",
    dosage: "25–56 mg/kg body weight. 4.5–10 kg → 250 mg. Administer with food once every 12 weeks.",
    mechanism: "Fluralaner blocks GABA and glutamate-gated chloride channels in parasites, causing paralysis and death. Absorption enhanced with food; long half-life (~15 days); excreted in feces.",
    precautions: "Not for puppies <8 weeks or <2 kg; caution in dogs with seizure history. Give with food; do not crush; mild vomiting/diarrhea may occur.",
    packing: "1×1 Alu-Alu",
  },
  {
    id: "exotix-500",
    name: "Exotix Fluralaner 500mg",
    generic: "Fluralaner",
    form: "Chewable Tablet",
    price: 816,
    image: exotix500,
    rating: 5,
    reviews: 38,
    badge: "Hot",
    category: "Flea & Tick",
    sku: "EXO-500",
    tags: ["Flea", "Tick", "Dog", "Chewable"],
    description: "Kills and controls fleas and ticks for up to 12 weeks in dogs.",
    indications: "Treatment/prevention of flea infestations, control of tick/mite infestations, assists in controlling flea allergy dermatitis (FAD).",
    composition: "Fluralaner 500mg",
    dosage: "25–56 mg/kg body weight. 10–20 kg → 500 mg. Administer with food once every 12 weeks.",
    mechanism: "Fluralaner blocks GABA and glutamate-gated chloride channels in parasites, causing paralysis and death. Absorption enhanced with food; long half-life (~15 days); excreted in feces.",
    precautions: "Not for puppies <8 weeks or <2 kg; caution in dogs with seizure history. Give with food; do not crush; mild vomiting/diarrhea may occur.",
    packing: "1×1 Alu-Alu",
  },
  {
    id: "exotix-1000",
    name: "Exotix Fluralaner 1000mg",
    generic: "Fluralaner",
    form: "Chewable Tablet",
    price: 1125,
    image: exotix1000,
    rating: 5,
    reviews: 31,
    category: "Flea & Tick",
    sku: "EXO-1000",
    tags: ["Flea", "Tick", "Dog", "Chewable"],
    description: "Kills and controls fleas and ticks for up to 12 weeks in dogs.",
    indications: "Treatment/prevention of flea infestations, control of tick/mite infestations, assists in controlling flea allergy dermatitis (FAD).",
    composition: "Fluralaner 1000mg",
    dosage: "25–56 mg/kg body weight. 20–40 kg → 1000 mg. Administer with food once every 12 weeks.",
    mechanism: "Fluralaner blocks GABA and glutamate-gated chloride channels in parasites, causing paralysis and death. Absorption enhanced with food; long half-life (~15 days); excreted in feces.",
    precautions: "Not for puppies <8 weeks or <2 kg; caution in dogs with seizure history. Give with food; do not crush; mild vomiting/diarrhea may occur.",
    packing: "1×1 Alu-Alu",
  },
  {
    id: "prime-joint",
    name: "Prime Joint Support",
    form: "60 Chewable Tablets",
    price: 1602,
    image: primeJoint,
    rating: 5,
    reviews: 56,
    badge: "Sale",
    category: "Joint Care",
    sku: "PRM-60",
    tags: ["Joint", "Dog", "Cat", "Supplement"],
    description: "Complete joint support formula for dogs and cats with glucosamine, chondroitin, and more.",
    indications: "Hip & elbow dysplasia, arthritis/osteoarthritis, age-related joint wear, post-operative recovery, stiffness, limping.",
    composition: "Chondroitin Sulphate 400mg, Glucosamine Sulphate 400mg, Hyaluronic Acid 30mg, Boswellia Serrata Extract (65%) 250mg, MSM 200mg, Vitamin C 100mg, Vitamin E 20mg, Selenium 80mcg, Collagen Type 2 20mg",
    dosage: "Up to 10 kg – ½ tablet daily. 11–25 kg – 1 tablet daily. 26–40 kg – 1½ tablets daily. Above 40 kg – 2 tablets daily.",
    mechanism: "Glucosamine (cartilage repair), Chondroitin (prevents breakdown), Hyaluronic Acid (lubrication), Boswellia (anti-inflammatory), MSM (collagen synthesis/pain relief), Vitamins C & E (antioxidants), Selenium (reduces oxidative stress), Collagen Type 2 (restores cartilage).",
    precautions: "Avoid in pregnant/lactating unless advised; caution in diabetes/clotting disorders.",
    packing: "1×60 Bottle",
  },
  {
    id: "showcharge-heart",
    name: "ShowCharge Heart Support",
    form: "60 Film-Coated Tablets",
    price: 600,
    image: showcharge,
    rating: 5,
    reviews: 44,
    category: "Heart Care",
    sku: "SHC-60",
    tags: ["Heart", "Dog", "Cat", "Supplement"],
    description: "Heart support formula for healthy heart & muscle function, stamina, and cellular health.",
    indications: "Healthy heart & muscle function, stamina, antioxidant defense, cellular health, longevity, energy for active/aging pets.",
    composition: "L-Carnitine 125mg, Taurine 125mg, N,N-Dimethylglycine (DMG) 25mg, Vitamin E 30mg, Coenzyme Q10 (Ubiquinone) 10mg, Folic Acid 0.9mg, Magnesium 0.5mg, Potassium 0.1mg, Selenium 0.007mg",
    dosage: "Dogs: Up to 10 kg – ½ tab, 11–25 kg – 1 tab, 26–40 kg – 1½ tabs, above 40 kg – 2 tabs daily. Cats: ½ tab daily.",
    mechanism: "L-Carnitine (fat fuel), Taurine (heart muscle stability), CoQ10 (energy production), Vitamin E + Selenium (antioxidants), DMG (immunity/oxygen use), Folic Acid (RBC production), Mg + K (electrolyte balance).",
    precautions: "Caution in kidney disease, bleeding disorders, seizure-prone dogs, electrolyte imbalance. Use under vet supervision.",
    packing: "1×60 Bottle",
  },
  {
    id: "furlux-skin",
    name: "Furlux Skin & Coat",
    form: "60 Chewable Tablets",
    price: 1335,
    image: furluxImg,
    rating: 5,
    reviews: 37,
    badge: "New",
    category: "Skin Care",
    sku: "FLX-60",
    tags: ["Skin", "Coat", "Dog", "Cat", "Supplement"],
    description: "Promotes healthy skin, strong shiny coat, optimal pigmentation, and firm claws.",
    indications: "Healthy skin, strong shiny coat, optimal pigmentation (coat, nose, paw pads), firm claws.",
    composition: "Biotin 2.5mg, Zinc 15mg, L-Lysine 250mg, Copper 2mg, Iodine 150mcg, Ascophyllum nodosum (Seaweed Extract) 100mg, Whey Protein 200mg, Folic Acid 0.5mg, Vitamin E 50mg, Selenium 50mcg, Lycopene 5mg, Niacinamide 20mg, Vitamin A 1000 IU",
    dosage: "<10 kg – ½ tab daily. 10–20 kg – 1 tab daily. >20 kg – 1½ to 2 tabs daily.",
    mechanism: "Biotin (keratin synthesis), Niacinamide (hydration), Vitamin A (epithelial growth), Zinc (wound healing), Seaweed extract (Omega-3, iodine for melanin), Whey protein (amino acids), Copper (melanin production), Iodine (thyroid).",
    precautions: "Caution in hyperthyroid, copper-sensitive dogs.",
    packing: "1×60 Bottle",
  },
  {
    id: "keramaxy-shampoo",
    name: "Keramaxy Vet Shampoo",
    form: "200ml Bottle",
    price: 375,
    image: keramaxy,
    rating: 5,
    reviews: 48,
    category: "Shampoo",
    sku: "KMX-200",
    tags: ["Shampoo", "Skin", "Dog", "Cat", "Antibacterial"],
    description: "Deep cleansing antibacterial pet cleanser for relief from itching, scaling, and redness.",
    indications: "Deep cleaning, exfoliation, relief from itching/scaling/redness, faster healing. For demodicosis, pyoderma, seborrhea, fungal infections.",
    composition: "Benzoyl Peroxide 2.5% w/v, Zinc Oxide 0.25% w/v, Micronised Sulphur 2.0% w/v, Salicylic Acid 0.1% w/v, Base q.s.",
    dosage: "Acute phase: 2–3 times per week. Maintenance: once every 7–10 days.",
    mechanism: "Benzoyl Peroxide (antibacterial/keratolytic), Sulphur (antifungal/antiparasitic), Salicylic Acid (exfoliant), Zinc Oxide (soothing/protective).",
    precautions: "External use only; avoid eyes/mucous membranes; patch test recommended.",
    packing: "1×200ml Bottle",
  },
];

export const categories = ["All", "Flea & Tick", "Joint Care", "Heart Care", "Skin Care", "Shampoo"];
