import { StepTwoProps } from "@/types";

const StepTwo: React.FC<StepTwoProps> = ({
  formData,
  onChange,
  onBack,
  onSubmit,
}) => {
  return (
    <div className="space-y-6">
      <label className="block text-sm font-medium text-gray-600">Source</label>
      <select
        className="w-full border p-2 rounded-md"
        value={formData.source}
        onChange={(e) => onChange("source", e.target.value)}
      >
        <option value="">Select Source</option>
        <option value="Google">Google</option>
        <option value="Social Media">Social Media</option>
        <option value="Friends">Friends</option>
      </select>

      <div className="flex space-x-4">
        <button
          className="w-1/2 bg-gray-300 text-gray-700 rounded-md py-2 font-medium"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className="w-1/2 bg-green-500 text-white rounded-md py-2 font-medium"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
