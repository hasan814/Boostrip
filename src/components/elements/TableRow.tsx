import { TableRowProps } from "@/types";

const TableRow: React.FC<TableRowProps> = ({ lead, salespeople, onAssign }) => {
  return (
    <tr className={`${Number(lead.id) % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
      <td className="border border-gray-300 px-2 sm:px-4 py-2">{lead.name}</td>
      <td className="border border-gray-300 px-2 sm:px-4 py-2">{lead.email}</td>
      <td className="border border-gray-300 px-2 sm:px-4 py-2">
        {lead.source}
      </td>
      <td className="border border-gray-300 px-2 sm:px-4 py-2">
        <select
          value={lead.salespersonId || ""}
          onChange={(e) => onAssign(lead.id, e.target.value)}
          className="w-full border border-gray-300 rounded-md px-2 py-1 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Unassigned</option>
          {salespeople.map((sp) => (
            <option key={sp.id} value={sp.id}>
              {sp.name}
            </option>
          ))}
        </select>
      </td>
    </tr>
  );
};

export default TableRow;
