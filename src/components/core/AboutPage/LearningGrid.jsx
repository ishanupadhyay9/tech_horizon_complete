import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highliteText: "Anyone, Anywhere",
    description:
      "TechHorizon partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "TechHorizon partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "TechHorizon partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "TechHorizon partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "TechHorizon partners with more than 275+ leading universities and companies to bring",
  },
];

const LearningGrid = () => {
  return (
<div className="w-11/12">
<div className="grid mx-auto  bg-[#6332f6] grid-cols-1 xl:grid-cols-4 mb-12 w-11/12">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${
              card.order % 2 === 1
                ? "bg-[#ebebf0] h-[294px]  text-richblack-600"
                : card.order % 2 === 0
                ? "bg-[#2f02d1] h-[294px]"
                : "bg-transparent"
            } ${card.order === 3 && "xl:col-start-2"} rounded-md m-1 `}
          >
            {card.order < 0 ? (
              <div className="xl:w-[90%] flex flex-col gap-4 pb-10 xl:pb-0">
                <div className="text-4xl font-semibold ">
                  {card.heading} {" "}
                 {card.highliteText} 
                </div>
                <p className="text-richblack-5 font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h1 className={`text-lg `}>{card.heading}</h1>

                <p className={`text-medium ${i%2==0?" text-richblack-5":""}`}>
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
</div>
  );
};

export default LearningGrid;
