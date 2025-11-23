import { useState } from "react";
import { FaAppleAlt, FaHeartbeat, FaBrain, FaBed, FaLeaf } from "react-icons/fa";
import HealthTipCard from "../components/HealthTipCard";


export default function HealthTips() {
  const categories = [
    { label: "All", value: "all" },
    { label: "Nutrition", value: "nutrition" },
    { label: "Fitness", value: "fitness" },
    { label: "Mental Health", value: "mental" },
    { label: "Sleep", value: "sleep" },
    { label: "General", value: "general" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const tips = [
    {
      title: "Eat More Whole Foods",
      category: "nutrition",
      icon: <FaAppleAlt className="text-orange-500 text-3xl" />,
      description:
        "Incorporate fruits, vegetables, and whole grains into your meals for optimal health.",
    },
    {
      title: "Stay Hydrated",
      category: "general",
      icon: <FaLeaf className="text-green-600 text-3xl" />,
      description:
        "Drink at least 6–8 cups of water daily to maintain energy and focus.",
    },
    {
      title: "Daily 20-Minute Walk",
      category: "fitness",
      icon: <FaHeartbeat className="text-red-600 text-3xl" />,
      description:
        "A simple walk boosts cardiovascular health and reduces stress.",
    },
    {
      title: "Practice Mindfulness",
      category: "mental",
      icon: <FaBrain className="text-purple-600 text-3xl" />,
      description:
        "Spend 5 minutes daily focusing on your breathing to improve mental clarity.",
    },
    {
      title: "Stick to a Sleep Routine",
      category: "sleep",
      icon: <FaBed className="text-blue-600 text-3xl" />,
      description:
        "Go to bed and wake up at the same time daily for better sleep quality.",
    },
  ];

  const filteredTips =
    selectedCategory === "all"
      ? tips
      : tips.filter((tip) => tip.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Header */}
      <h1 className="text-xl font-bold text-blue-900 lg:mt-0 mt-16">Health Tips</h1>
      <p className="text-gray-600 mt-1">
        Simple daily habits to help you stay healthy, energized, and balanced.
      </p>

      {/* Category Filter */}
      <div className="flex gap-2 mt-6 overflow-x-auto scrollbar-hides">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-4 text-nowrap py-2 rounded-lg border text-sm transition ${
              selectedCategory === cat.value
                ? "bg-blue-700 text-white border-blue-700"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 gap-4 mt-6">
        {filteredTips.map((tip, index) => (
          <HealthTipCard
            key={index}
            title={tip.title}
            description={tip.description}
            icon={tip.icon}
          />
        ))}
      </div>
    </div>
  );
}
