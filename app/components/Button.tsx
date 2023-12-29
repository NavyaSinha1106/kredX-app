import { ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({
  text,
  customClass = "",
  handleClick,
}) => {
  return (
    <button
      className={`w-full mt-8 text-white rounded-md bg-teal-400 h-12 font-semibold ${customClass}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
