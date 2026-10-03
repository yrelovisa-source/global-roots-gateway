export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2.5" aria-label="yrelo">
      <svg aria-hidden="true" viewBox="0 0 44 44" fill="none" className="h-10 w-10 shrink-0">
        <path d="M3 3h38v38H3z" fill="var(--coral)" />
        <path d="M10 31 31 10h-9M31 10v9" stroke="var(--coral-foreground)" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter" />
        <path d="M12 12h9M12 12v9M32 32h-9M32 32v-9" stroke="var(--coral-foreground)" strokeWidth="2" />
      </svg>
      <span className={`font-display font-bold leading-none text-foreground ${compact ? "text-2xl" : "text-[1.75rem]"}`}>yrelo<span className="text-coral">.</span></span>
    </span>
  );
}