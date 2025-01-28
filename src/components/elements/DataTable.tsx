import { DataTableProps } from "@/types";

import TableRow from "./TableRow";

const DataTable: React.FC<DataTableProps> = ({
  leads,
  salespeople,
  onAssign,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-xs sm:text-sm leading-normal">
            <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left">
              Name
            </th>
            <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left">
              Email
            </th>
            <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left">
              Source
            </th>
            <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left">
              Assigned Salesperson
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-xs sm:text-sm">
          {leads.map((lead) => (
            <TableRow
              key={lead.id}
              lead={lead}
              salespeople={salespeople}
              onAssign={onAssign}
            />
          ))}
        </tbody>
      </table>
      {leads.length === 0 && (
        <div className="text-center text-gray-500 mt-4">
          No leads available to display.
        </div>
      )}
    </div>
  );
};

export default DataTable;
