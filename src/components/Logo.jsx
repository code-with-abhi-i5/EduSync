import logoSrc from '../assets/logo.png'

export default function Logo({ className = '' }) {
  return (
    <a href="#" className={`flex items-center gap-2 ${className}`} aria-label="SmartSpire Home">
      <img
        src={logoSrc}
        alt="SmartSpire"
        className="h-12 sm:h-14 w-auto object-contain"
        loading="eager"
      />
    </a>
  )
}
