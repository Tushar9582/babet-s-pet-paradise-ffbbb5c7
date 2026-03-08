import { PawPrint } from "lucide-react";

const categories = [
  { name: "Wet Food", icon: "🥫" },
  { name: "Flavored Food", icon: "🍖" },
  { name: "Dry Food", icon: "🥘" },
  { name: "Seed Mixed", icon: "🌾" },
  { name: "Pellet Food", icon: "🔵" },
  { name: "Raw Food", icon: "🥩" },
];

const FoodSupplements = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-3">
            <PawPrint className="w-4 h-4" /> Food Types
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Explore Food & Supplements
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className="flex flex-col items-center p-5 rounded-2xl bg-card border border-border hover:shadow-lg hover:border-primary/30 transition-all group"
            >
              <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">{cat.icon}</span>
              <span className="font-heading text-sm font-semibold text-foreground text-center">{cat.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodSupplements;
