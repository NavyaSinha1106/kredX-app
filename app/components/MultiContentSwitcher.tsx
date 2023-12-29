"use client";

import { StaticImageData } from "next/image";
import PointerArrow1 from "../assets/PointerArrowInactive.svg";
import PointerArrow2 from "../assets/PointerArrowActive.svg";
import ContentArrow from "../assets/ContentArrow.svg";
import { useState } from "react";
import appText from "../data";
import { TFinalContent } from "../types";

const MultiContentSwitcher: React.FC = () => {
  const ContentData: TFinalContent[] = [
    {
      title: appText.multiContent.multiContent1.title1,
      content: appText.multiContent.multiContent1.content1,
    },
    {
      title: appText.multiContent.multiContent2.title1,
      content: appText.multiContent.multiContent2.content1,
    },
    {
      title: appText.multiContent.multiContent3.title1,
      content: appText.multiContent.multiContent3.content1,
    },
  ];

  const getItemClassname = (isActive: boolean): string => {
    if (isActive) {
      return "flex justify-between items-center p-8 h-24 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] rounded-s-md bg-gradient-to-r from-sky-900 to-teal-600 ";
    }
    return "flex justify-between items-center shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] p-8 w-11/12 h-24 rounded-md hover:shadow-[0px_2px_8px_0px_rgba(99,99,99,0.3)]";
  };

  const IncativeArrow: string = (PointerArrow1 as StaticImageData).src;
  const ActiveArrow: string = (PointerArrow2 as StaticImageData).src;
  const OutlineCircleArrow: string = (ContentArrow as StaticImageData).src;

  const [contentId, setContentId] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center m-20">
      <p className="bg-gradient-to-r from-teal-600 to-sky-400 text-transparent bg-clip-text text-4xl font-semibold text-center m-6 ">
        The KredX CMS Advantage
      </p>
      <div className="flex justify-center mt-10 w-4/5">
        <div className="w-2/4 flex flex-col justify-between">
          {ContentData.map((item: TFinalContent, index: number) => (
            <div
              className={getItemClassname(contentId === index)}
              onClick={() => {
                setContentId(index);
              }}
              key={`${item}_${index}`}
            >
              <div className="flex items-center justify-between w-96">
                <p
                  className={`font-semibold mr-4 ${
                    contentId === index ? "text-white" : "text-neutral-600"
                  }`}
                >
                  {item.title}
                </p>
                <img
                  className="w-5 h-5"
                  src={contentId === index ? ActiveArrow : IncativeArrow}
                />
              </div>
            </div>
          ))}
        </div>
        <div
          className={`flex flex-col justify-between items-start bg-teal-600 h-80 w-2/4 p-5 text-white rounded-md ${
            contentId === 0 ? "rounded-tl-none" : ""
          } ${
            contentId === ContentData.length - 1 ? "rounded-bl-none" : ""
          } w-2/4`}
        >
          {ContentData[contentId].content.map((item: string, index: number) => (
            <div className="flex items-baseline" key={`${item}_${index}`}>
              <img className="w-3 h-3" src={OutlineCircleArrow} />
              <p className="pl-3">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiContentSwitcher;
