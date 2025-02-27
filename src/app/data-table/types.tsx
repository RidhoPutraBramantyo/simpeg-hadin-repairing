export type Employee = {
  id: number;
  id_user: number;
  nama_gelar: string;
  nama: string;
  gelar_depan: string;
  gelar_belakang: string;
  tempat_lahir: string;
  tanggal_lahir: string;
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

  riwayat_jabatan_fungsional: {
    id_data_pegawai: number;
    id_ref_jabatan_fungsional: number;
    ref_jabatan_fungsional: { nama: string };
  }[];

  riwayat_mutasi_struktural: {
    id_data_pegawai: number;
    id_ref_jabatan_struktural: number;
    ref_jabatan_struktural: { nama: string };
  }[];

  riwayat_golongan: {
    id_data_pegawai: number;
    id_ref_pangkat_golongan: number;
    ref_pangkat_golongan: { kode: string; nama: string };
  }[];

  riwayat_pendidikan: {
    id_data_pegawai: number;
    pendidikan: number;
    jenjang_keterangan: string;
    nama_sekolah: string;
    jurusan: string;
    negara: number;
    ref_pendidikan: { nama: string };
  }[];

  riwayat_status_pegawai: {
    id_data_pegawai: number;
    id_ref_status_pegawai: number;
    ref_status_pegawai: { nama: string };
  }[];

  riwayat_jabatan_struktural: {
    id_data_pegawai: number;
    nama_jabatan: string;
  }[];

  riwayat_unit_kerja: {
    id_data_pegawai: number;
    id_ref_unit_kerja: number;
    ref_unit_kerja: { nama: string };
  }[];
};
