import { FormContainerProps } from "@/types";

const FormContainer: React.FC<FormContainerProps> = ({ children }) => {
  return (
    <div className=" bg-gray-100 p-4">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg bg-white shadow-lg rounded-lg p-6">
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
