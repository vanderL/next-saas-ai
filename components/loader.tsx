import Image from "next/image";

export function Loader() {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image 
          alt="Logo marca"
          fill
          src="/logo.png"
        />
      </div>

      <p className="text-sm text-muted-foreground">
        Estou pensando!!!
      </p>
    </div>
  )
}