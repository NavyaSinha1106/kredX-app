import { StaticImageData } from "next/image";
import MainContentBackground from "../assets/MainContentBackground.svg";
import ContentIcon_1 from "../assets/ContentIcon_1.svg";
import ContentIcon_2 from "../assets/ContentIcon_2.svg";
import ContentIcon_3 from "../assets/ContentIcon_3.svg";
import ContentIcon_4 from "../assets/ContentIcon_4.svg";
import ContentIcon_5 from "../assets/ContentIcon_5.svg";
import ContentIcon_6 from "../assets/ContentIcon_6.svg";
import ContentIcon_7 from "../assets/ContentIcon_7.svg";
import ContentIcon_8 from "../assets/ContentIcon_8.svg";
import { TMainContentData } from "../types";
import appText from "../data";
import Anchor from "./Anchor";
import Card from "./Card";

const MAIN_CONTENT_DATA: TMainContentData[] = [
  {
    icon: (ContentIcon_1 as StaticImageData).src,
    title: appText.mainContent.invoiceDigitization.title1,
    summary: appText.mainContent.invoiceDigitization.summary1,
  },
  {
    icon: (ContentIcon_2 as StaticImageData).src,
    title: appText.mainContent.invoiceProcessing.title1,
    summary: appText.mainContent.invoiceProcessing.summary1,
  },
  {
    icon: (ContentIcon_3 as StaticImageData).src,
    title: appText.mainContent.centralizedAccess.title1,
    summary: appText.mainContent.centralizedAccess.summary1,
  },
  {
    icon: (ContentIcon_4 as StaticImageData).src,
    title: appText.mainContent.advancedWorkflow.title1,
    summary: appText.mainContent.advancedWorkflow.summary1,
  },
  {
    icon: (ContentIcon_5 as StaticImageData).src,
    title: appText.mainContent.invoiceMatching.title1,
    summary: appText.mainContent.invoiceMatching.summary1,
  },
  {
    icon: (ContentIcon_6 as StaticImageData).src,
    title: appText.mainContent.vendorManagement.title1,
    summary: appText.mainContent.vendorManagement.summary1,
  },
  {
    icon: (ContentIcon_7 as StaticImageData).src,
    title: appText.mainContent.supplyChain.title1,
    summary: appText.mainContent.supplyChain.summary1,
  },
  {
    icon: (ContentIcon_8 as StaticImageData).src,
    title: appText.mainContent.auditReady.title1,
    summary: appText.mainContent.auditReady.summary1,
  },
];

const MainContent: React.FC = () => {
  const BackgroundUrl: string = (MainContentBackground as StaticImageData).src;

  return (
    <div
      className="bg-no-repeat bg-cover bg-center h-full"
      style={{ backgroundImage: `url(${BackgroundUrl})` }}
    >
      <p className="bg-gradient-to-r from-teal-600 to-sky-400 text-transparent bg-clip-text font-semibold text-5xl text-center m-20">
        KredX AP Automation <br /> Capabilities
      </p>
      <div className="flex justify-between items-start flex-wrap mx-24">
        {MAIN_CONTENT_DATA.map((content: TMainContentData, index: number) => (
          <Card content={content} key={`${content}_${index}`} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Anchor link="/RequestDemoPage" text="Request Demo" />
      </div>
    </div>
  );
};

export default MainContent;
