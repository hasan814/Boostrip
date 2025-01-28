export interface Lead {
  id: string;
  name: string;
  email: string;
  source: string;
  salespersonId: string | null;
}

export interface Salesperson {
  id: string;
  name: string;
}

export interface StepOneProps {
  formData: { name: string; email: string };
  onChange: (field: string, value: string) => void;
  onNext: () => void;
}


export interface StepTwoProps {
  formData: { source: string };
  onChange: (field: string, value: string) => void;
  onBack: () => void;
  onSubmit: () => void;
}

export interface FormContainerProps {
  children: React.ReactNode;
}

export interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export interface TableRowProps {
  lead: Lead;
  salespeople: Salesperson[];
  onAssign: (leadId: string, salespersonId: string) => void;
}


export interface DataTableProps {
  leads: Lead[];
  salespeople: Salesperson[];
  onAssign: (leadId: string, salespersonId: string) => void;
}