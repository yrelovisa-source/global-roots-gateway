import logo from "@/assets/logo.png";

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex shrink-0 items-center" aria-label="Yrelo.com">
      <img
        src={logo}
        alt="Yrelo.com"
        width={1380}
        height={351}
        className={`w-auto ${compact ? "h-10" : "h-12 sm:h-14"}`}
      />
    </span>
  );
}
