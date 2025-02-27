export default function DataPegawai() {
  return (
    <div className="w-full">
      <div className="flex flex-1 flex-col gap-4 p-4 bg-white/50">
        {Array.from({ length: 24 }).map((_, index) => (
          <div
            key={index}
            className="aspect-video h-12 w-full rounded-lg bg-black/50 "
          />
        ))}
      </div>
    </div>
  );
}
