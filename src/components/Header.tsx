import { useState } from 'react'

const NAV_LINKS = [
  { href: '#about', label: 'Sobre Mim' },
  { href: '#career', label: 'Trajetória' },
  { href: '#stack', label: 'Habilidades' },
  { href: '#projects', label: 'Projetos' },
  { href: '#certifications', label: 'Certificados' },
]

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="bg-navy-deep sticky top-0 z-100 rounded-b-[22px] px-8 py-4 sm:py-6">
      <div className="m-auto flex w-full max-w-5xl items-center justify-between">
        <ul className="hidden gap-6 text-sm text-[#B9C4D2] sm:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={`/${link.href}`}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2.5 sm:flex">
          <a
            href="https://github.com/DiegoAraaujo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-navy-deep hover:bg-ice flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white transition-colors"
          >
            <i className="bi bi-github" />
          </a>

          <a
            href="https://www.linkedin.com/in/josediegoaraujo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-navy-deep hover:bg-ice flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white transition-colors"
          >
            <i className="bi bi-linkedin" />
          </a>
        </div>
      </div>

      <div className="flex w-full justify-end sm:hidden">
        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="flex shrink-0 items-center justify-center rounded-full text-2xl text-white"
        >
          <i className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'}`} />
        </button>
      </div>

      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/40 md:hidden"
        />
      )}

      <aside
        className={`bg-navy-deep fixed top-0 right-0 z-110 flex h-full w-72 flex-col p-6 shadow-2xl transition-transform duration-300 sm:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mb-10 flex items-center justify-between">
          <span className="text-sm font-semibold text-white">Menu</span>

          <button
            type="button"
            aria-label="Fechar menu"
            onClick={closeMenu}
            className="flex shrink-0 cursor-pointer items-center justify-center rounded-full text-2xl text-white"
          >
            <i className="bi bi-x-lg" />
          </button>
        </div>

        <nav>
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block border-b border-white/10 py-4 text-sm text-[#B9C4D2] transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto flex gap-3 border-t border-white/10 pt-6">
          <a
            href="https://github.com/DiegoAraaujo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-navy-deep hover:bg-ice flex h-10 w-10 items-center justify-center rounded-full bg-white transition-colors"
          >
            <i className="bi bi-github text-lg" />
          </a>

          <a
            href="https://www.linkedin.com/in/josediegoaraujo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-navy-deep hover:bg-ice flex h-10 w-10 items-center justify-center rounded-full bg-white transition-colors"
          >
            <i className="bi bi-linkedin text-lg" />
          </a>
        </div>
      </aside>
    </header>
  )
}
