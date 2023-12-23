import { StaticImageData } from "next/image";
import KredXLogo from "../assets/KredXLogo.svg";
import InstaIcon from "../assets/InstaIcon.svg";
import FacebookIcon from "../assets/FacebookIcon.svg";
import TwitterIcon from "../assets/TwitterIcon.svg";
import YoutubeIcon from "../assets/YoutubeIcon.svg";
import LinkedinIcon from "../assets/LinkedinIcon.svg";
import Link from "next/link";

const PageFooter: React.FC = () => {
  const FooterContent = [
    {
      icon: (InstaIcon as StaticImageData).src,
      url: "https://www.instagram.com/",
    },
    {
      icon: (FacebookIcon as StaticImageData).src,
      url: "https://www.facebook.com/",
    },
    {
      icon: (TwitterIcon as StaticImageData).src,
      url: "https://twitter.com/i/flow/login",
    },
    {
      icon: (YoutubeIcon as StaticImageData).src,
      url: "https://www.youtube.com/",
    },
    {
      icon: (LinkedinIcon as StaticImageData).src,
      url: "https://www.linkedin.com/",
    },
  ];

  const KredXUrl: string = (KredXLogo as StaticImageData).src;

  return (
    <div className="bg-slate-900 p-11 h-14 flex justify-between items-center">
      <div>
        <img src={KredXUrl} />
      </div>
      <div className="flex">
        {FooterContent.map((content) => (
          <>
            <Link href={content.url}>
              <img className="p-2" src={content.icon} />
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default PageFooter;
