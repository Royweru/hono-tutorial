import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 text-white ">
      <a
       href="/api/smalldata">
            <button 
        className=" px-4 py-5 bg-neutral-600/75 rounded-lg font-semibold">
         Click to see some data preview
       </button>
      </a>
    
    </div>
  );
}
