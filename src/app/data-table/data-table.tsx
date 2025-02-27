"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Label } from "@/components/ui/label";
import { Employee } from "./types";

export const columns: ColumnDef<Employee>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "nama",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Pegawai
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="capitalize flex gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <Label>{row.getValue("nama")}</Label>
          <div>{row.original.nip}</div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "alamat",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Alamat
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("alamat")}</div>
    ),
  },
  {
    accessorKey: "golongan",
    header: ({ column }) => (
      <div className="capitalize flex gap-2">Golongan/Pangkat</div>
    ),
    cell: ({ row }) => (
      <div className="lowercase">
        {row.original.riwayat_golongan?.[0]?.ref_pangkat_golongan.nama}
      </div>
    ),
  },
  {
    accessorKey: "jabatan_struktural",
    header: ({ column }) => (
      <div className="capitalize flex gap-2">Jabatan Struktural</div>
    ),
    cell: ({ row }) => (
      <div className="lowercase">
        {row.original.riwayat_jabatan_struktural?.[0]?.nama_jabatan}
      </div>
    ),
  },
  {
    accessorKey: "mutasi_struktural",
    header: ({ column }) => (
      <div className="capitalize flex gap-2">Mutasi Struktural</div>
    ),
    cell: ({ row }) => (
      <div className="lowercase">
        {
          row.original.riwayat_mutasi_struktural?.[0]?.ref_jabatan_struktural
            .nama
        }
      </div>
    ),
  },
  {
    accessorKey: "pendidikan",
    header: ({ column }) => (
      <div className="capitalize flex gap-2">Pendidikan</div>
    ),
    cell: ({ row }) => (
      <div className="lowercase">
        {row.original.riwayat_pendidikan?.[0]?.ref_pendidikan.nama}
      </div>
    ),
  },
  {
    accessorKey: "status_pegawai",
    header: ({ column }) => (
      <div className="capitalize flex gap-2">Status Pegawai</div>
    ),
    cell: ({ row }) => (
      <div className="lowercase">
        {row.original.riwayat_status_pegawai?.[0]?.ref_status_pegawai.nama}
      </div>
    ),
  },
  {
    accessorKey: "unit_kerja",
    header: ({ column }) => (
      <div className="capitalize flex gap-2">Unit Kerja</div>
    ),
    cell: ({ row }) => (
      <div className="lowercase">
        {row.original.riwayat_unit_kerja?.[0]?.ref_unit_kerja.nama}
      </div>
    ),
  },
  {
    accessorKey: "jabatan_fungsional",
    header: ({ column }) => (
      <div className="capitalize flex gap-2">Jabatan Fungsional</div>
    ),
    cell: ({ row }) => (
      <div className="lowercase">
        {
          row.original.riwayat_jabatan_fungsional?.[0]?.ref_jabatan_fungsional
            .nama
        }
      </div>
    ),
  },
];
