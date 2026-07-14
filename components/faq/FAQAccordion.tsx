"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQ } from "@/types";

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({
  faqs,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={faq.id}
            className="overflow-hidden rounded-2xl border bg-white shadow-sm"
          >
            <button
              type="button"
              onClick={() =>
                setOpenIndex(isOpen ? null : index)
              }
              className="flex w-full items-center justify-between p-6 text-left"
            >
              <span className="text-lg font-semibold">
                {faq.question}
              </span>

              {isOpen ? (
                <ChevronUp className="text-pink-600" />
              ) : (
                <ChevronDown className="text-pink-600" />
              )}
            </button>

            {isOpen && (
              <div className="border-t px-6 py-5 text-gray-600 leading-7">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}