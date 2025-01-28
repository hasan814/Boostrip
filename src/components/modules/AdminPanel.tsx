"use client";

import { useEffect, useState } from "react";
import { Lead, Salesperson } from "@/types";

import DataTable from "../elements/DataTable";
import toast from "react-hot-toast";

const AdminPanel: React.FC = () => {
  // ============== State ==============
  const [leads, setLeads] = useState<Lead[]>([]);
  const [salespeople, setSalespeople] = useState<Salesperson[]>([]);

  // ============== Effect ==============
  useEffect(() => {
    const fetchData = async () => {
      try {
        const leadRes = await fetch("/api/leads");
        const salesRes = await fetch("/api/salespeople");

        if (!leadRes.ok || !salesRes.ok) {
          throw new Error("Failed to fetch data.");
        }

        const leadsData: Lead[] = await leadRes.json();
        const salespeopleData: Salesperson[] = await salesRes.json();

        setLeads(leadsData);
        setSalespeople(salespeopleData);
        toast.success("Data fetched successfully!");
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch data. Please try again.");
      }
    };

    fetchData();
  }, []);

  // ============== Fetch Data ==============
  const assignSalesperson = async (leadId: string, salespersonId: string) => {
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

      toast.success("Salesperson assigned successfully!");
    } catch (error) {
      console.error("Error assigning salesperson:", error);
      toast.error("Failed to assign salesperson.");
    }
  };
  // ============== Rendering ==============
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 sm:p-6">
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
