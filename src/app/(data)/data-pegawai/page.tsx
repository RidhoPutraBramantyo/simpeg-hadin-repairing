"use client";

import { EmployeeDetail } from "./types";
import DataRow from "@/components/data-row";
import { useState } from "react";

export default function DataPegawai() {
  const [employeeDetails, setEmployeeDetails] = useState<EmployeeDetail | null>(
    null
  );

  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-4 p-4 bg-white/50">
        <div className="flex flex-col gap-2 min-h-12 w-full rounded-lg bg-black/50 p-4">
          <div className=" min-h-56 w-full rounded-lg bg-white/30 ">photo</div>
          <table>
            <tbody>
              <DataRow label="Nama Lengkap" value="value" />
              <DataRow label="Nip" value="value" />
              <DataRow label="Username" value="value" />
            </tbody>
          </table>
        </div>
        <div className="flex flex-col gap-2 min-h-12 w-full rounded-lg bg-black/50 p-4">
          <table>
            <tbody>
              <DataRow label="tempatLahir" value="value"></DataRow>
              <DataRow label="tanggalLahir" value="value"></DataRow>
              <DataRow label="nipLama" value="value"></DataRow>
              <DataRow label="nip" value="value"></DataRow>
              <DataRow label="noKarpeg" value="value"></DataRow>
              <DataRow label="noKtp" value="value"></DataRow>
              <DataRow label="agama" value="value"></DataRow>
              <DataRow label="jenisKelamin" value="value"></DataRow>
              <DataRow label="statusNikah" value="value"></DataRow>
              <DataRow label="alamat" value="value"></DataRow>
              <DataRow label="noHp" value="value"></DataRow>
              <DataRow label="email" value="value"></DataRow>
              <DataRow label="simAccount" value="value"></DataRow>
              <DataRow label="noTelpRumah" value="value"></DataRow>
              <DataRow label="keterangan" value="value"></DataRow>
              <DataRow label="createdAt" value="value"></DataRow>
              <DataRow label="updatedAt" value="value"></DataRow>
              <DataRow label="jenisPegawai" value="value"></DataRow>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
