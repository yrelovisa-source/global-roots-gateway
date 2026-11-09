import logo from "@/assets/logo.png";

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex shrink-0 items-end gap-0.5" aria-label="Yrelo.com">
      <img
        src={logo}
        alt="Yrelo"
        width={938}
        height={321}
        className={`w-auto self-center ${compact ? "h-10" : "h-12 sm:h-14"}`}
      />
      <span className={`font-display font-bold leading-none text-sky ${compact ? "mb-1.5 text-2xl" : "mb-2 text-3xl sm:text-4xl"}`}>.com</span>
    </span>
  );
}
