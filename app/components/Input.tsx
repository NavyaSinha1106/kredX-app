import { InputProps } from "../types";

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  setValue,
  customClass = "",
  error = "",
}) => {
  return (
    <div className={customClass}>
      <div className="py-2">
        <p className="text-sm text-gray-700">{label}</p>
      </div>
      <div>
        <input
          className="bg-zinc-50 border border-slate-200 h-12 w-full rounded-md p-3"
          type="text"
          placeholder={placeholder}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
      <div className="h-4">
        <p className="text-red-600 text-xs font-medium p-3 pl-0">{error}</p>
      </div>
    </div>
  );
};

export default Input;
