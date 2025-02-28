// src/components/DataRow.tsx
import React from "react";

interface DataRowProps {
  label: string;
  value: string | number | null | undefined;
}

export default function DataRow({ label, value }: DataRowProps) {
  return (
    <tr className="w-full text-black">
      <td className="font-semibold text-base whitespace-nowrap">{label}</td>
      <td className="text-base">:</td>
      <td className="text-lg whitespace-nowrap">{value || "-"}</td>
    </tr>
  );
}
