"use client";

import { useState } from "react";

import { Product } from "@/types";

interface ProductTabsProps {
  product: Product;
}

type Tab =
  | "description"
  | "materials"
  | "colours"
  | "care";

export default function ProductTabs({
  product,
}: ProductTabsProps) {
  const [activeTab, setActiveTab] =
    useState<Tab>("description");

  const tabs: {
    id: Tab;
    label: string;
  }[] = [
    {
      id: "description",
      label: "Description",
    },
    {
      id: "materials",
      label: "Materials",
    },
    {
      id: "colours",
      label: "Colours",
    },
    {
      id: "care",
      label: "Care",
    },
  ];

  return (
    <section className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm">

      {/* Tabs */}

      <div className="flex flex-wrap gap-3 border-b pb-5">

        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() =>
              setActiveTab(tab.id)
            }
            className={`rounded-xl px-5 py-3 font-semibold transition ${
              activeTab === tab.id
                ? "bg-emerald-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}

      </div>

      {/* Content */}

      <div className="mt-8">

        {activeTab === "description" && (
          <p className="leading-8 text-gray-600">
            {product.description}
          </p>
        )}

        {activeTab === "materials" && (
          <ul className="list-disc space-y-2 pl-5 text-gray-600">
            {product.materials.map((material) => (
              <li key={material}>
                {material}
              </li>
            ))}
          </ul>
        )}

        {activeTab === "colours" && (
          <div className="flex flex-wrap gap-3">
            {product.colours.map((colour) => (
              <span
                key={colour}
                className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700"
              >
                {colour}
              </span>
            ))}
          </div>
        )}

        {activeTab === "care" && (
          <ul className="list-disc space-y-2 pl-5 text-gray-600">
            {product.careInstructions.map(
              (instruction) => (
                <li key={instruction}>
                  {instruction}
                </li>
              )
            )}
          </ul>
        )}

      </div>

    </section>
  );
}