import React from "react";
import Title from "./Title";
import { benefitItems } from "../constant/data";
import { RiArrowRightUpLine } from "@remixicon/react";

// ✅ Framer Motion imports
import { motion } from "framer-motion";
import * as variants from "../motion/animation";

const Benefits = () => {
  return (
    <section className="section">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="container"
      >
        {/* Title */}
        <motion.div variants={variants.fadeInUp}>
          <Title
            title="Benefits"
            text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
            link="View All"
          />
        </motion.div>

        {/* Card wrapper */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-12 lg:mt-16">
          {benefitItems.map((item, index) => (
            <motion.div
              key={item.id || index}
              variants={variants.fadeInUp}
              className="bg-white p-10 flex flex-col rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* icon */}
              <div className="bg-orange-75 w-[55%] h-24 flex items-center justify-center mx-auto rounded-xl mb-8">
                <img src={item.icon} alt={item.title} width={64} height={64} />
              </div>

              {/* content */}
              <div className="mb-4 text-center space-y-3.5">
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="text-gray-600">{item.text}</p>
              </div>

              {/* button */}
              <motion.button
                whileHover={{ rotate: 45, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mt-auto ml-auto border border-white-95 w-14 h-14 flex items-center justify-center rounded-md text-orange-50 transition-colors hover:bg-orange-50 hover:text-white"
              >
                <RiArrowRightUpLine size={26} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
