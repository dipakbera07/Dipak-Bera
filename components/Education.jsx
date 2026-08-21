import { educationData } from "@/assets/assets";
import { Ovo, Poppins } from "next/font/google";
import React from "react";

const ovo = Ovo({
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Education = ({ isDarkMode }) => {
  return (
    <section
      id="education"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      {/* Heading */}
      <p
        className={`${ovo.className} text-center text-lg mb-2 text-gray-600 dark:text-gray-300`}
      >
        My Academic Journey
      </p>

      <h2
        className={`${ovo.className} text-4xl md:text-5xl text-center`}
      >
        Education
      </h2>

      <p
        className={`text-center max-w-2xl mx-auto mt-5 mb-16 ${ovo.className} text-gray-600 dark:text-gray-300`}
      >
        My educational background and academic journey in computer
        science and technology.
      </p>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">

        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700" />

        {educationData.map((education, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row mb-12 ${
              index % 2 === 0
                ? "md:flex-row"
                : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline dot */}
            <div
              className="
                absolute
                left-4
                md:left-1/2
                -translate-x-1/2
                w-4
                h-4
                rounded-full
                bg-black
                dark:bg-white
                border-4
                border-white
                dark:border-black
                shadow-md
                z-10
              "
            />

            {/* Card */}
            <div className="w-full md:w-1/2 pl-12 md:pl-0">
              <div
                className={`
                  p-6
                  rounded-2xl
                  border
                  bg-white
                  dark:bg-gray-800
                  border-gray-200
                  dark:border-gray-700
                  shadow-sm
                  hover:shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  cursor-pointer
                  ${
                    index % 2 === 0
                      ? "md:mr-10"
                      : "md:ml-10"
                  }
                `}
              >
                {/* Date */}
                <span
                  className="
                    inline-block
                    text-xs
                    font-medium
                    text-gray-600
                    dark:text-gray-300
                    bg-gray-100
                    dark:bg-gray-800
                    px-3
                    py-1
                    rounded-full
                    mb-4
                  "
                >
                  {education.date}
                </span>

                {/* Degree */}
                <h3
                  className="
                    text-lg
                    md:text-xl
                    font-semibold
                    text-gray-900
                    dark:text-white
                  "
                >
                  {education.degree}
                </h3>

                {/* College */}
                <p
                  className="
                    text-sm
                    text-gray-600
                    dark:text-gray-400
                    mt-2
                  "
                >
                  {education.college}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-3 mt-5">

                  {/* CGPA */}
                  {education.cgpa && (
                    <div
                      className="
                        px-4
                        py-2
                        rounded-lg
                        bg-gray-50
                        dark:bg-gray-800
                        border
                        border-gray-100
                        dark:border-gray-700
                      "
                    >
                      <p className="text-xs text-gray-400">
                        CGPA
                      </p>

                      <p className="text-sm font-semibold text-gray-800 dark:text-white">
                        {education.cgpa}
                      </p>
                    </div>
                  )}

                  {/* Percentage */}
                  <div
                    className="
                      px-4
                      py-2
                      rounded-lg
                      bg-gray-50
                      dark:bg-gray-800
                      border
                      border-gray-100
                      dark:border-gray-700
                    "
                  >
                    <p className="text-xs text-gray-400">
                      Percentage
                    </p>

                    <p className="text-sm font-semibold text-gray-800 dark:text-white">
                      {education.percentage}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;