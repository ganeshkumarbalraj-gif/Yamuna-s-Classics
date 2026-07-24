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
    <section className="rounded-[36px] border border-gray-100 bg-white p-10 shadow-xl">

      {/* Heading */}

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-gray-900">
          Product Information
        </h2>

        <p className="mt-2 text-gray-600">
          Learn more about this handcrafted creation before placing your order.
        </p>

      </div>

      {/* Tabs */}

      <div className="flex flex-wrap gap-3 border-b border-gray-200 pb-6">

        {tabs.map((tab) => (

          <button
            key={tab.id}
            type="button"
            onClick={() =>
              setActiveTab(tab.id)
            }
            className={`rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-emerald-700 via-green-700 to-green-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:-translate-y-1 hover:bg-emerald-50 hover:text-emerald-700"
            }`}
          >
            {tab.label}
          </button>

        ))}

      </div>

      {/* Content */}

      <div className="mt-10 rounded-3xl bg-gray-50 p-8">

        {activeTab === "description" && (

          <p className="leading-8 text-gray-700">
            {product.description}
          </p>

        )}

        {activeTab === "materials" && (

          <ul className="space-y-3 text-gray-700">

            {product.materials.map((material) => (

              <li
                key={material}
                className="flex cart-start gap-3"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />

                <span>{material}</span>

              </li>

            ))}

          </ul>

        )}

        {activeTab === "colours" && (

          <div className="flex flex-wrap gap-3">

            {product.colours.map((colour) => (

              <span
                key={colour}
                className="rounded-full bg-emerald-100 px-5 py-2 font-medium text-emerald-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-600 hover:text-white"
              >
                {colour}
              </span>

            ))}

          </div>

        )}

        {activeTab === "care" && (

          <ul className="space-y-3 text-gray-700">

            {product.careInstructions.map(
              (instruction) => (

                <li
                  key={instruction}
                  className="flex cart-start gap-3"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />

                  <span>{instruction}</span>

                </li>

              )
            )}

          </ul>

        )}

      </div>

    </section>
  );
}