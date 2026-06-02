import logoSrc from '../assets/logo.png'

export default function Logo({ className = '' }) {
  return (
    <a href="#" className={`flex items-center gap-2 ${className}`} aria-label="EduSync Home">
      <img
        src={logoSrc}
        alt="EduSync"
        className="h-10 sm:h-11 w-auto object-contain"
        loading="eager"
      />
    </a>
  )
}
