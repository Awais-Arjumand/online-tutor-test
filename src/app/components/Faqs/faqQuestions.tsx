"use client";

import React, { useState } from "react";
import { UserTypeToggle } from "./UserTypeToggle";
import { FAQItem } from "./FAQItem";

type UserType = "TUTOR" | "STUDENT";

const faqData = [
  {
    question: "How to sign up?",
    answer: "You can sign up by clicking the 'Sign Up' button and following the instructions to create an account.",
  },
  {
    question: "When will I appear in the search results?",
    answer: "Your profile will appear in search results after completing your profile and submitting the necessary documents.",
  },
  {
    question: "What if I do not provide educational documents?",
    answer: "Providing educational documents increases your credibility. Without them, you may have limited visibility in search results.",
  },
  {
    question: "How to upload my documents and CNIC?",
    answer: "You can upload documents in the profile settings under the 'Verification' section.",
  },
  {
    question: "How can I get on top of search results?",
    answer: "Completing your profile, receiving good reviews, and becoming a premium member can improve your ranking.",
  },
  {
    question: "How can I be included in featured tutors?",
    answer: "Featured tutors are selected based on profile completeness, reviews, and premium membership status.",
  },
  {
    question: "How can I become a premium member?",
    answer: "You can become a premium member by subscribing to one of our premium plans in the 'Membership' section.",
  },
  {
    question: "What is search priority criteria?",
    answer: "Search priority is based on profile completeness, engagement, reviews, and membership status.",
  },
  {
    question: "What is the advantage of premium members?",
    answer: "Premium members get better search visibility, featured placements, and priority support.",
  },
  {
    question: "What is the maximum number of tuitions per month?",
    answer: "There is no strict limit, but the number of tuitions depends on demand, availability, and your profile ranking.",
  },
];

export default function FAQSection() {
  const [selectedType, setSelectedType] = useState<UserType>("TUTOR");

  return (
    <section className="flex flex-col gap-10 p-5 mx-auto my-0 max-w-[1200px] max-md:p-4 max-md:max-w-[991px] max-sm:p-2.5 max-sm:max-w-screen-sm">
      <UserTypeToggle
        selectedType={selectedType}
        onTypeChange={setSelectedType}
      />

      <div className="px-24 py-0 rounded-xl border border-solid border-neutral-200 max-md:px-10 max-md:py-0 max-sm:px-5 max-sm:py-0">
        {faqData.map(({ question, answer }, index) => (
          <FAQItem key={index} question={question} answer={answer} />
        ))}
      </div>
    </section>
  );
}
