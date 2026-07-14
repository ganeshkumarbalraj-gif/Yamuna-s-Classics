import {
  Heart,
  Package,
  Truck,
  Sparkles,
} from "lucide-react";

interface ProductHighlightsProps {
  customizable: boolean;
}

export default function ProductHighlights({
  customizable,
}: ProductHighlightsProps) {
  const items = [
    {
      icon: Heart,
      title: "Handmade with Love",
    },
    {
      icon: Package,
      title: "Premium Quality",
    },
    {
      icon: Truck,
      title: "Delivery Across India",
    },
    {
      icon: Sparkles,
      title: customizable
        ? "Customizable"
        : "Ready to Order",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-xl border border-pink-100 bg-pink-50 p-4"
        >
          <item.icon className="mb-3 text-pink-600" size={24} />

          <p className="text-sm font-medium">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}