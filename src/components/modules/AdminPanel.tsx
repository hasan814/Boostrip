"use client";

import { useEffect, useState } from "react";
import { Lead, Salesperson } from "@/types";

import DataTable from "../elements/DataTable";
import toast from "react-hot-toast";

const AdminPanel: React.FC = () => {
  // =========== State =============
  const [salespeople, setSalespeople] = useState<Salesperson[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);

  // =========== Fetch Data =============
  useEffect(() => {
    const fetchData = async () => {
      try {
        const leadRes = await fetch("/api/leads");
        const salesRes = await fetch("/api/salespeople");

        if (!leadRes.ok || !salesRes.ok) {
          throw new Error("Failed to fetch data.");
        }

        setLeads(await leadRes.json());
        setSalespeople(await salesRes.json());
        toast.success("Data fetched successfully!");
      } catch (error) {
        toast.error("Failed to fetch data. Please try again.");
      }
    };

    fetchData();
  }, []);

  // ============== Assigning Function ============
  const assignSalesperson = async (
    leadId: string,
    salespersonId: string | null
  ) => {
    try {
      const response = await fetch(`/api/leads`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: leadId, salespersonId }),
      });

      if (!response.ok) {
        throw new Error("Failed to assign salesperson.");
      }

      setLeads((prevLeads) =>
        prevLeads.map((lead) =>
          lead.id === leadId ? { ...lead, salespersonId } : lead
        )
      );

      toast.success(
        salespersonId
          ? "Salesperson assigned successfully!"
          : "Salesperson unassigned."
      );
    } catch (error) {
      console.error("Error assigning salesperson:", error);
      toast.error("Failed to assign salesperson.");
    }
  };

  // =============== Rendering ===============
  return (
    <div className=" bg-gray-100 flex flex-col items-center p-4 sm:p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-4 sm:p-8">
        <DataTable
          leads={leads}
          salespeople={salespeople}
          onAssign={assignSalesperson}
        />
      </div>
    </div>
  );
};

export default AdminPanel;
