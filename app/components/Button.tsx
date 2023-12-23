import Link from "next/link";
import { ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({ link, text, customClass = "" }) => {
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

export default Button;
