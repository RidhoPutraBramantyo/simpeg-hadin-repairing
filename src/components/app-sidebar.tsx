///app-sidebar.tsx

"use client";

import * as React from "react";
import {
  AudioWaveform,
  ChartNoAxesColumn,
  Command,
  GalleryVerticalEnd,
  House,
  UserRound,
} from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-project";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Ridho",
    email: "elm4c99@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Simpeg",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],

  projects: [
    {
      name: "Dashboard",
      url: "/",
      icon: House,
    },
  ],

  navMain: [
    {
      title: "Data Pribadi",
      url: "#",
      icon: UserRound,
      isActive: true,
      items: [
        { title: "Data Pegawai", url: "/data-pegawai" },
        { title: "Data Dosen", url: "/data-dosen" },
        { title: "Data Pasangan", url: "/data-pasangan" },
        { title: "Data Anak", url: "/data-anak" },
        { title: "Data Orang Tua", url: "/data-orang-tua" },
        { title: "Data Mertua", url: "/data-mertua" },
        { title: "Data Saudara Kandung", url: "/data-saudara-kandung" },
      ],
    },
    {
      title: "Riwayat",
      url: "#",
      icon: ChartNoAxesColumn,
      items: [
        { title: "Riwayat Golongan", url: "/riwayat-golongan" },
        {
          title: "Riwayat Jabatan Struktural",
          url: "/riwayat-jabatan-struktural",
        },
        {
          title: "Riwayat Mutasi Struktural",
          url: "/riwayat-mutasi-struktural",
        },
        { title: "Riwayat Pendidikan", url: "/riwayat-pendidikan" },
        { title: "Riwayat Status Pegawai", url: "/riwayat-status-pegawai" },
        { title: "Riwayat Unit Kerja", url: "/riwayat-unit-kerja" },
        {
          title: "Riwayat Jabatan Fungsional",
          url: "/riwayat-jabatan-fungsional",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <NavMain items={data.navMain} />{" "}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
