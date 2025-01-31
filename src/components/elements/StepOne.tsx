import { StepOneProps } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

const StepOne: React.FC<StepOneProps> = ({ formData, onChange, onNext }) => {
  // ============== UseForm ==============
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
    resolver: yupResolver(validationSchema),
  });

  // ============== Fetch Data ==============
  useEffect(() => {
    setValue("name", formData.name);
    setValue("email", formData.email);
  }, [formData, setValue]);

  // ============== watch Data ==============
  useEffect(() => {
    const subscription = watch((values: Record<string, string>) => {
      if (values.name !== undefined) {
        onChange("name", values.name);
      }
      if (values.email !== undefined) {
        onChange("email", values.email);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  const onSubmit = () => {
    onNext();
  };

  // ============== Rendering ==============
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <input
        {...register("name")}
        className="w-full border p-2 rounded-md"
        placeholder="Enter your name"
      />
      {errors.name && (
        <p className="text-red-500 text-xs">{errors.name.message}</p>
      )}

      <input
        {...register("email")}
        className="w-full border p-2 rounded-md"
        placeholder="Enter your email"
      />
      {errors.email && (
        <p className="text-red-500 text-xs">{errors.email.message}</p>
      )}

      <button
        type="submit"
        className="w-full bg-blue-500 text-white rounded-md py-2 font-medium"
      >
        Next
      </button>
    </form>
  );
};

export default StepOne;
