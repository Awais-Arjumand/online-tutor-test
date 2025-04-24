"use client";

import React, { useState } from "react";
import { PlusIcon } from "./PlusIcon";
import { motion } from "framer-motion"; // Import Framer Motion for better animations

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="border-b border-solid border-b-neutral-200 max-sm:py-5">
      <div
        className="flex justify-between items-center px-0 py-8 max-sm:px-0 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-2xl font-semibold text-stone-900 max-md:text-2xl max-sm:text-lg">
          {question}
        </h2>
        <button
          aria-expanded={isExpanded}
          aria-label={isExpanded ? "Collapse answer" : "Expand answer"}
          className="transition-transform transition-all duration-300 cursor-pointer"
          style={{ transform: isExpanded ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <PlusIcon />
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-stone-700 text-lg max-sm:text-base px-0 pb-4">
          {answer}
        </p>
      </motion.div>
    </article>
  );
}
