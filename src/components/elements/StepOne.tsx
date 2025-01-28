import { StepOneProps } from "@/types";

import InputField from "./InputField";

const StepOne: React.FC<StepOneProps> = ({ formData, onChange, onNext }) => {
  return (
    <div className="space-y-6">
      <InputField
        id="name"
        label="Name"
        type="text"
        value={formData.name}
        placeholder="Enter your name"
        onChange={(value) => onChange("name", value)}
      />
      <InputField
        id="email"
        label="Email"
        type="email"
        value={formData.email}
        placeholder="Enter your email"
        onChange={(value) => onChange("email", value)}
      />
      <button
        className="w-full bg-blue-500 text-white rounded-md py-2 font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
};

export default StepOne;
