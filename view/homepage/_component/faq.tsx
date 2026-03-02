"use client";

import { useState } from "react";
import Image from "next/image";
import faq from "@/assets/image/FAQ.svg"; 

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is the minimum age for usingt MindMates",
    answer:
      "We offer a comprehensive range of services tailored to your needs, including consulting, implementation, and ongoing support to ensure your success.",
  },
  {
    question: "Is my data and information safe with MindMates",
    answer:
      "Getting started is simple. Reach out to our team via the contact form, and we'll schedule an introductory call to understand your requirements and propose the best path forward.",
  },
  {
    question: "What happens if a message that makes me uncomfortable or seems is taking my privacy?",
    answer:
      "Our pricing is flexible and project-based. We offer both fixed-price engagements and hourly retainers depending on scope. Contact us for a custom quote.",
  },
  {
    question: "Can i become a MindMates",
    answer:
      "Yes — we offer a 14-day free trial on all our plans so you can experience the full value before committing. No credit card required.",
  },
  {
    question: "Is calling safe here with MindMates?",
    answer:
      "You can cancel anytime from your account settings. There are no cancellation fees and your access continues until the end of the billing period.",
  },
    {
    question: "Is it free to use?",
    answer:
      "You can cancel anytime from your account settings. There are no cancellation fees and your access continues until the end of the billing period.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-linear-to-b from-[#D5E9F5]/51 to-[#D4F5F5]">
      <div className="max-w-7xl 2xl:max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-16 flex md:py-24 gap-6">
        
        {/* Left: FAQ Content */}
        <div className="w-auto flex-1">
          <h2 className="text-center text-5xl max-md:text-3xl font-bold text-[#0C6E88]">
            FAQ&apos;S
          </h2>

          <div className="pt-10 flex flex-col gap-3">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`border-2 transition-colors duration-300 text-lg rounded-2xl ${
                    isOpen ? "border-[#106E8C]" : "border-[#106E8C]"
                  }`}
                >
                  {/* Question Row */}
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center  justify-between px-5 py-4 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-base font-semibold pr-4 transition-colors duration-200 ${
                        isOpen ? "text-[#106E8C]" : "text-[#02607E] group-hover:text-[#106E8C]"
                      }`}
                    >
                      {item.question}
                    </span>

                    {/* +/- Icon */}
                    <span
                      className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#106E8C] border-[#106E8C] rotate-45"
                          : "border-[#106E8C] group-hover:bg-[#106E8C]/10"
                      }`}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className={`transition-colors duration-300 ${
                          isOpen ? "text-white" : "text-[#106E8C]"
                        }`}
                      >
                        <path
                          d="M6 1V11M1 6H11"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>

                  {/* Answer Panel */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-4 border-t border-[#106E8C]/20">
                      <p className="text-[#4A6F7A] text-sm leading-relaxed pt-3">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 max-md:hidden">
          <Image
            src={faq}
            alt=""
            width={500}
            height={300}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}