"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
// import { HiMagnifyingGlass } from "react-icons/hi2";
// import axios from "axios";
// import GHeadder from "@/components/layout/Header";
// import FilterDropdown from "@/components/ui/FilterDropdown";
// import DeleteDialogDashboard from "@/components/dialog/DeleteDialogDashboard";
// import { IoMdAdd } from "react-icons/io";
// import { FaRegTrashAlt } from "react-icons/fa";
// import ProfileImage from "@/components/ui/profileImage";
// import { HashLoader } from "react-spinners";
// import { showToast, Toast } from "@/components/ui/Toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table } from "lucide-react";
import { TableHeader, TableRow } from "@/components/ui/table";

interface RefJabatanFungsional {
  nama: string;
}

interface RiwayatJabatanFungsional {
  id_data_pegawai: number;
  id_ref_jabatan_fungsional: number;
  ref_jabatan_fungsional: RefJabatanFungsional;
}

interface RefJabatanStruktural {
  nama: string;
}

interface RiwayatMutasiStruktural {
  id_data_pegawai: number;
  id_ref_jabatan_struktural: number;
  ref_jabatan_struktural: RefJabatanStruktural;
}

interface RefPangkatGolongan {
  kode: string;
  nama: string;
}

interface RiwayatGolongan {
  id_data_pegawai: number;
  id_ref_pangkat_golongan: number;
  ref_pangkat_golongan: RefPangkatGolongan;
}

interface Ref_nama {
  nama: string;
}

interface RiwayatPendidikan {
  id_data_pegawai: number;
  pendidikan: number;
  jenjang_keterangan: string;
  nama_sekolah: string;
  jurusan: string;
  negara: number;
  ref_pendidikan: Ref_nama;
}

interface RiwayatStatusPegawai {
  id_data_pegawai: number;
  id_ref_status_pegawai: number;
  ref_status_pegawai: Ref_nama;
}

interface RiwayatJabatanStruktural {
  id_data_pegawai: number;
  nama_jabatan: string;
}

interface RiwayatUnitKerja {
  id_data_pegawai: number;
  id_ref_unit_kerja: number;
  ref_unit_kerja: Ref_nama;
}

interface Pegawai {
  id: number;
  id_user: number;
  nama_gelar: string;
  nama: string;
  gelar_depan: string;
  jenis: number;
  nip_lama: string;
  nip: string;
  noe_karpeg: string;
  no_karpeg: string;
  no_ktp: string;
  agama: number;
  jenis_kelamin: number;
  status_nikah: number;
  alamat: string;
  no_hp: string;
  email: string;
  sim_account: string;
  no_telp_rumah: string;
  pengubah: string;
  app_pengubah: string;
  tanggal_ubah: string;
  foto: string;
  npwp: string;
  keterangan: string;
  is_dosen: number;
  id_sister: number;
  createdAt: string;
  updatedAt: string;
  ref_jenis_pegawai: { nama: string };
  ref_agama: { nama: string };
  ref_jenis_kelamin: { kode: string };
  ref_status_nikah: { nama: string };
  riwayat_jabatan_fungsional: RiwayatJabatanFungsional[];
  riwayat_mutasi_struktural: RiwayatMutasiStruktural[];
  riwayat_golongan: RiwayatGolongan[];
  riwayat_pendidikan: RiwayatPendidikan[];
  riwayat_status_pegawai: RiwayatStatusPegawai[];
  riwayat_jabatan_struktural: RiwayatJabatanStruktural[];
  riwayat_unit_kerja: RiwayatUnitKerja[];
}

export default function Dashboard() {
  const router = useRouter();
  const [data, setData] = useState<Pegawai[]>([]);
  const [employees, setEmployees] = useState<Pegawai[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingDelete, setLoadingDelete] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("");
  const [selectedEmployees, setSelectedEmployees] = useState<number[]>([]);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const apiUrl = "/api/all-pegawai";
  const arrTHead = [
    "Nama",
    "Jabatan Fungsional",
    "Jabatan Struktural",
    "Golongan",
    "Status Kepegawaian",
    "Unit Kerja",
  ];
  const handleFilterChange = (selectedFilter: string) =>
    setFilter(selectedFilter);
  const handleDelete = async () => {
    try {
      setLoadingDelete(true);
      // await Promise.all(
      //   selectedEmployees.map((item) =>
      //     axios.delete(`/api/delete-pegawai/${item}`)
      //   )
      // );
      // const response = await axios.get(apiUrl);
      // setData(response.data.data.data);
      // setEmployees(response.data.data.data);
      // setSelectedEmployees([]);
      // setIsDeleteDialogOpen(false);
      // setSelectAll(false);
    } catch (err) {
      // showToast(`Gagal menghapus pegawai: ${err}`, "error");
      console.error("Gagal menghapus pegawai:", err);
      setIsDeleteDialogOpen(false);
    } finally {
      setLoadingDelete(false);
    }
  };
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedEmployees([]);
    } else {
      setSelectedEmployees(employees.map((employee) => employee.id));
    }
    setSelectAll(!selectAll);
  };
  const handleSelectEmployee = (id: number) => {
    setSelectedEmployees((prev) =>
      prev.includes(id)
        ? prev.filter((employeeId) => employeeId !== id)
        : [...prev, id]
    );
  };
  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSearch(e.target.value);
  };
  const handleAddEmployee = () => {
    setLoading(true);
    router.push("/data-pegawai/create");
  };
  useEffect(() => {
    const fetchData = async (page: number) => {
      try {
        // const response = await axios.get(apiUrl);
        // console.log(response.data.data.data);
        // console.log(process.env.NEXT_PUBLIC_API_URL);
        // setData(response.data.data.data);
        // setEmployees(response.data.data.data);
      } catch (err) {
        setError("Gagal memuat data");
      } finally {
        setLoading(false);
      }
    };
    fetchData(page);
  }, []);
  const filteredEmployees = employees?.filter((employee) => {
    const matchesSearch = arrTHead.some((header) => {
      switch (header) {
        case "Nama":
          return (
            employee.nama.toLowerCase().includes(search.toLowerCase()) ||
            employee.nip.toLowerCase().includes(search.toLowerCase()) ||
            employee.no_ktp.toLowerCase().includes(search.toLowerCase()) ||
            employee.ref_agama.nama
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            employee.ref_jenis_kelamin.kode
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            employee.ref_status_nikah.nama
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            employee.alamat.toLowerCase().includes(search.toLowerCase()) ||
            employee.no_hp.toLowerCase().includes(search.toLowerCase()) ||
            employee.email.toLowerCase().includes(search.toLowerCase()) ||
            employee.keterangan.toLowerCase().includes(search.toLowerCase())
          );
        case "jabatan":
          return employee.riwayat_mutasi_struktural.some((riwayat) =>
            riwayat.ref_jabatan_struktural.nama
              .toLowerCase()
              .includes(search.toLowerCase())
          );
        case "golongan":
          return employee.riwayat_golongan.some((riwayat) =>
            riwayat.ref_pangkat_golongan.nama
              .toLowerCase()
              .includes(search.toLowerCase())
          );
        case "status_pegawai":
          return employee.riwayat_status_pegawai.some((riwayat) =>
            riwayat.ref_status_pegawai.nama
              .toLowerCase()
              .includes(search.toLowerCase())
          );
        case "prodi":
          return employee.riwayat_pendidikan.some((pendidikan) =>
            pendidikan.jurusan.toLowerCase().includes(search.toLowerCase())
          );
        case "fakultas":
          return employee.riwayat_pendidikan.some((riwayat) =>
            riwayat.jurusan.toLowerCase().includes(search.toLowerCase())
          );
        case "unit_kerja":
          return employee.riwayat_unit_kerja.some((riwayat) =>
            riwayat.ref_unit_kerja.nama
              .toLowerCase()
              .includes(search.toLowerCase())
          );
        default:
          return false;
      }
    });
    if (!filter) return matchesSearch;
    switch (filter) {
      case "nama":
        return employee.nama.toLowerCase().includes(search.toLowerCase());
      case "nip":
        return employee.nip.toLowerCase().includes(search.toLowerCase());
      case "no_ktp":
        return employee.no_ktp.toLowerCase().includes(search.toLowerCase());
      case "agama":
        return employee.ref_agama.nama
          .toLowerCase()
          .includes(search.toLowerCase());
      case "jenis_kelamin":
        return employee.ref_jenis_kelamin.kode
          .toLowerCase()
          .includes(search.toLowerCase());
      case "status_nikah":
        return employee.ref_status_nikah.nama
          .toLowerCase()
          .includes(search.toLowerCase());
      case "alamat":
        return employee.alamat.toLowerCase().includes(search.toLowerCase());
      case "no_hp":
        return employee.no_hp.toLowerCase().includes(search.toLowerCase());
      case "email":
        return employee.email.toLowerCase().includes(search.toLowerCase());
      case "keterangan":
        return employee.keterangan.toLowerCase().includes(search.toLowerCase());
      case "jabatan":
        return employee.riwayat_jabatan_fungsional.some((riwayat) =>
          riwayat.ref_jabatan_fungsional.nama
            .toLowerCase()
            .includes(search.toLowerCase())
        );
      case "golongan":
        return employee.riwayat_golongan.some((riwayat) =>
          riwayat.ref_pangkat_golongan.nama
            .toLowerCase()
            .includes(search.toLowerCase())
        );
      case "status_pegawai":
        return employee.riwayat_status_pegawai.some((riwayat) =>
          riwayat.ref_status_pegawai.nama
            .toLowerCase()
            .includes(search.toLowerCase())
        );
      default:
        return matchesSearch;
    }
  });
  return (
    <div className="w-full flex flex-col items-end gap-4 ">
      {/* {isDeleteDialogOpen && (
        <DeleteDialogDashboard
          isOpen={isDeleteDialogOpen}
          onClose={() => setIsDeleteDialogOpen(false)}
          onConfirm={handleDelete}
          loading={loadingDelete}
          title="Konfirmasi Penghapusan"
          description={`Apakah Anda yakin ingin menghapus ${selectedEmployees.length} pegawai terpilih?`}
        />
      )} */}
      {/* <GHeadder /> */}
      <div className="w-full flex flex-row md:flex-row justify-between items-center gap-4 p-2">
        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          <div className="w-fit flex flex-col gap-2 md:gap-4">
            <h2 className="w-fit text-base md:text-lg lg:text-md xl:text-lg font-semibold">
              Daftar Pegawai
            </h2>
            {/* <FilterDropdown onFilterChange={handleFilterChange} /> */}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-fit">
          <div className="flex item-center gap-2 w-fit h-fit border border-gray-300 rounded-xl px-3 py-1">
            <Input
              type="text"
              placeholder={`Pencarian`}
              value={search}
              onChange={handleSearchChange}
              className="w-[120px] md:w-[250px] border-0 focus:outline-none  "
            />
            <div className="w-full flex justify-center items-center">
              {/* <HiMagnifyingGlass size={20} /> */}
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col justify-end items-end gap-2 md:gap-4">
            <Button
              className="flex flex-row justify-center items-center w-fit lg:w-full h-fit text-md bg-blue-500 text-white rounded-xl gap-2 p-2 "
              onClick={handleAddEmployee}
            >
              {/* {loading ? (
                <HashLoader size={20} color="white" />
              ) : (
                <>
                  <IoMdAdd size={24} />
                  <span className="hidden md:block">Pegawai Baru</span>
                </>
              )} */}
              Pegawai Baru
            </Button>

            <div className="flex justify-center items-center gap-2 md:gap-4">
              <div className="flex items-center gap-1">
                <span className="text-sm hidden md:block">
                  Pegawai Terpilih
                </span>
                <span>({selectedEmployees.length})</span>
              </div>
              <Button
                variant="destructive"
                onClick={() => {
                  if (selectedEmployees.length > 0) {
                    setIsDeleteDialogOpen(true);
                  }
                }}
                disabled={selectedEmployees.length === 0}
                title={
                  selectedEmployees.length === 0
                    ? "Pilih pegawai terlebih dahulu"
                    : "Hapus pegawai terpilih"
                }
              >
                {/* <FaRegTrashAlt /> */}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full overflow-x-auto rounded-xl border-2 divide-gray-200">
        <Table className="w-full h-fit">
          <TableHeader className="sticky top-0 z-0">
            <TableRow className="divide-x-1 divide-gray-200 bg-white text-xs">
              <th className="px-6 py-3 text-left font-semibold text-gray-500 uppercase whitespace-nowrap border-x border-gray-200">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded focus:ring-blue-500"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>

              {arrTHead.map((header) => (
                <th
                  key={header}
                  className="px-6 py-6 text-left font-semibold text-gray-500 uppercase tracking-wider mx-2 border-gray-200"
                >
                  {header}
                </th>
              ))}
            </TableRow>
          </TableHeader>

          <tbody className="bg-white h-fit overflow-y-auto">
            {filteredEmployees.map((pegawai) => (
              <TableRow key={pegawai.id} className="divide-x divide-gray-200">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    id={`${pegawai.id}`}
                    className="w-4 h-4 border-gray-300 rounded focus:ring-blue-500"
                    checked={selectedEmployees.includes(pegawai.id)}
                    onChange={() => handleSelectEmployee(pegawai.id)}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-md text-gray-500">
                  {/* {pegawai.foto ? (
                    <ProfileImage
                      src={`${process.env.NEXT_PUBLIC_API_URL}/upload/image/${pegawai.foto}`}
                      name={pegawai.nama_gelar}
                      title={pegawai.nip}
                    />
                  ) : (
                    <ProfileImage
                      src="/account-svgrepo-com.svg"
                      name={pegawai.nama_gelar}
                      title={pegawai.nip}
                    />
                  )} */}
                </td>
                {[
                  {
                    data: pegawai.riwayat_jabatan_fungsional,
                    key: "ref_jabatan_fungsional",
                    display: "nama",
                  },
                  {
                    data: pegawai.riwayat_jabatan_struktural,
                    key: "nama_jabatan",
                    display: "",
                  },
                  {
                    data: pegawai.riwayat_golongan,
                    key: "ref_pangkat_golongan",
                    display: "nama",
                  },
                  {
                    data: pegawai.riwayat_status_pegawai,
                    key: "ref_status_pegawai",
                    display: "nama",
                  },
                  {
                    data: pegawai.riwayat_unit_kerja,
                    key: "ref_unit_kerja",
                    display: "nama",
                  },
                ].map((item, index) => (
                  <td
                    key={index}
                    className="px-6 py-4 whitespace-nowrap text-md text-gray-500 text-center"
                  >
                    {item.data
                      .map((el: any) =>
                        item.display ? el[item.key]?.nama : el[item.key]
                      )
                      .join(", ")}
                  </td>
                ))}
              </TableRow>
            ))}
          </tbody>
        </Table>
      </div>
      {/* <Toast /> */}
    </div>
  );
}
