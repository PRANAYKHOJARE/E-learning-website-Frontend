import React, { useState } from "react";
import Title from "./Title";
import { faqItems } from "../constant/data";
import { RiAddLine } from "@remixicon/react";

import { motion } from "framer-motion";
import * as variants from "../motion/animation";

const FaqSec = () => {
  const [openId, setOpenId] = useState(faqItems[0]?.id ?? null);

  const handleClick = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section pb-[90px] lg:mb-40">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-10 p-5 lg:grid-cols-[0.7fr_1fr] items-start bg-white rounded-lg md:p-10"
      >
        {/* Title */}
        <motion.div variants={variants.fadeInUp}>
          <Title
            title="Frequently Asked Questions"
            text="Still you have any questions? Contact our Team via support@skillpath.com"
            link="See All FAQ’s"
          />
        </motion.div>

        {/* Question wrapper */}
        <div className="border border-white-95 grid p-6 rounded-lg">
          {faqItems.map((item) => (
            <motion.div
              variants={variants.fadeInUp}
              key={item.id}
              className="space-y-3.5"
            >
              {/* Title */}
              <div className="flex items-center justify-between gap-12 border-b border-b-white-95 pb-3 md:px-5">
                <h4 className="text-lg sm:text-xl">{item.title}</h4>
                <button
                  className="w-10 h-10 bg-orange-75 flex items-center justify-center aspect-square rounded-lg hover:bg-orange-75/80 transition-colors"
                  onClick={() => handleClick(item.id)}
                >
                  <RiAddLine
                    className={`transition-transform duration-300 ${
                      openId === item.id ? "rotate-45" : ""
                    }`}
                    size={30}
                  />
                </button>
              </div>

              {/* Text (animated expand) */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={
                  openId === item.id
                    ? { opacity: 1, height: "auto" }
                    : { opacity: 0, height: 0 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-3 text-gray-600">{item.text}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FaqSec;
