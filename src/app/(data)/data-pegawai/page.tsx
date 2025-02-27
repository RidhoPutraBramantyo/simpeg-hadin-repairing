import { Input } from "@/components/ui/input";

export default function DataPegawai() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-4 p-4 bg-white/50">
        <div className=" min-h-12 w-full rounded-lg bg-black/50 p-4 grid gap-2">
          <div className=" min-h-56 w-full rounded-lg bg-black/50 ">photo</div>
          <Input className=" w-full rounded-lg" />
          <Input className=" w-full rounded-lg" />
        </div>
        <div className=" min-h-12 w-full rounded-lg bg-black/50 col-span-3"></div>
      </div>
    </div>
  );
}
