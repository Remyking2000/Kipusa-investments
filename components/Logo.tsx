import Link from "next/link";

export default function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const src =
    variant === "light" ? "/kipusa-logo-light.png" : "/kipusa-logo.png";

  return (
    <Link
      href="/"
      className={`inline-flex items-center justify-center ${className}`}
      aria-label="Kipusa Investments Limited home"
    >
      <img
        src={src}
        alt="Kipusa Investments Limited"
        className="h-11 w-auto object-contain transition-all duration-300 md:h-14"
      />
    </Link>
  );
}
