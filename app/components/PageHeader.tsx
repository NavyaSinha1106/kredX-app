import { StaticImageData } from "next/image";
import HeaderBackground from "../assets/HeaderBackground.svg";
import Logo from "../assets/CmsLogo.svg";
import Frame from "../assets/ConvoFrame.svg";
import Button from "./Button";
import appText from "../data";
import React from "react";

const PageHeader: React.FC = () => {
  const imageUrl: string = (HeaderBackground as StaticImageData).src;
  const logoUrl: string = (Logo as StaticImageData).src;
  const FrameUrl: string = (Frame as StaticImageData).src;

  return (
    <div>
      <div className="bg-gradient-to-r from-sky-900 via-sky-800 to-cyan-700 h-4"></div>
      <div
        className="bg-no-repeat bg-cover bg-center px-28 lg:h-screen md:h-4/5"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <img className="pt-12" src={logoUrl} />
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-evenly mt-28">
            <p className="font-semibold text-white text-6xl">
              {appText.headerContent.heading.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index <
                    appText.headerContent.heading.split("\n").length - 1 && (
                    <br />
                  )}
                </React.Fragment>
              ))}
            </p>
            <p className="font-bold text-white text-3xl mt-8">
              {appText.headerContent.subHeading}
            </p>
            <div className="pl-0">
              <Button
                link="/LearnMorePage"
                text="Learn More"
                customClass="ml-0"
              />
            </div>
          </div>
          <div>
            <img className="h-96 mr-10" src={FrameUrl} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
