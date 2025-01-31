import LeadForm from "../modules/LeadForm";

const HomePage = () => {
  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-xl font-bold mb-4">Lead Collection Form</h1>
      <LeadForm />
    </div>
  );
};

export default HomePage;
