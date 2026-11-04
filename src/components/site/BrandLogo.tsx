import logo from "@/assets/logo.png";

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex shrink-0 items-center" aria-label="Yrelo">
      <img
        src={logo}
        alt="Yrelo"
        width={938}
        height={321}
        className={`w-auto ${compact ? "h-8" : "h-10"}`}
      />
    </span>
  );
}
