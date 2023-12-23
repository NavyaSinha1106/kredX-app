import { StaticImageData } from "next/image";
import ArrowRight from "../assets/ArrowRight.svg";
import appText from "../data";

const TextBanner: React.FC = () => {
  const arrowUrl: string = (ArrowRight as StaticImageData).src;

  return (
    <div className="flex justify-center items-center mt-12">
      <img className="h-24" src={arrowUrl} />
      <p className="text-center m-10 text-xl text-neutral-700 max-w-screen-md">
        {appText.textBanner.text}
      </p>
      <img className="h-24 rotate-180" src={arrowUrl} />
    </div>
  );
};

export default TextBanner;
