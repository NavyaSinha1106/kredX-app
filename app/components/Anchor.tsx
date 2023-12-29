import Link from "next/link";
import { AnchorProps } from "../types";

const Anchor: React.FC<AnchorProps> = ({ link, text, customClass = "" }) => {
  return (
    <Link href={link}>
      <button
        className={`m-10 text-white rounded-md bg-teal-400 w-60 h-14 font-semibold ${customClass}`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Anchor;
