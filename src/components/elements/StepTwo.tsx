import { StepTwoProps } from "@/types";

const StepTwo: React.FC<StepTwoProps> = ({
  formData,
  onChange,
  onBack,
  onSubmit,
}) => {
  return (
    <div className="space-y-6">
      <div>
        <label
          htmlFor="source"
          className="block text-sm font-medium text-gray-600"
        >
          Source:
        </label>
        <select
          id="source"
          className="w-full mt-2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={formData.source}
          onChange={(e) => onChange("source", e.target.value)}
        >
          <option value="">Select Source</option>
          <option value="Google">Google</option>
          <option value="Social Media">Social Media</option>
          <option value="Friends">Friends</option>
        </select>
      </div>
      <div className="flex space-x-4">
        <button
          className="w-1/2 bg-gray-300 text-gray-700 rounded-md py-2 font-medium hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className="w-1/2 bg-green-500 text-white rounded-md py-2 font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
