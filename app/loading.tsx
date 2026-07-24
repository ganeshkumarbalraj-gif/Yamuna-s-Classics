import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <Image
        src="/loading-screen.png"
        alt="Loading..."
        width={300}
        height={300}
        priority
      />
    </div>
  );
}