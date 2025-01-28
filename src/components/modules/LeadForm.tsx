"use client";

import { useState } from "react";

import FormContainer from "../elements/FormContainer";
import StepOne from "../elements/StepOne";
import StepTwo from "../elements/StepTwo";
import toast from "react-hot-toast";

const LeadForm: React.FC = () => {
  // ============= State ===========
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", source: "" });

  // ============= Input Function ===========
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // ============= Submit Function ===========
  const submitHandler = async () => {
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Lead submitted successfully!");
        setFormData({ name: "", email: "", source: "" });
        setStep(1);
      } else {
        throw new Error("Failed to submit lead.");
      }
    } catch (error) {
      toast.error("An error occurred while submitting the lead.");
      console.error(error);
    }
  };

  // ============= Rendering ===========
  return (
    <FormContainer>
      <h1 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-6 text-center">
        Lead Form
      </h1>
      {step === 1 ? (
        <StepOne
          formData={formData}
          onChange={handleInputChange}
          onNext={() => setStep(2)}
        />
      ) : (
        <StepTwo
          formData={formData}
          onChange={handleInputChange}
          onBack={() => setStep(1)}
          onSubmit={submitHandler}
        />
      )}
    </FormContainer>
  );
};

export default LeadForm;
