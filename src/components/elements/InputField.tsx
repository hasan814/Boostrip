import { InputFieldProps } from "@/types";

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-600">
        {label}:
      </label>
      <input
        id={id}
        type={type}
        className="w-full mt-2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default InputField;
