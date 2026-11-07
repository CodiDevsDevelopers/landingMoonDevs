import { ArrowUpRight, Instagram, Mail, MessageCircle } from "lucide-react"
import { Logo } from "./logo"
import {
  CODIDEVS_INSTAGRAM_URL,
  CODIDEVS_SUPPORT_EMAIL,
} from "@/lib/social-links"
import { CODIDEVS_WHATSAPP_DISPLAY, waUrl } from "@/lib/whatsapp-links"

const services = ["Software a medida", "Aplicaciones web", "Automatizaciones", "Integraciones API"]
const company = ["Manta, Ecuador", "Trabajo remoto", "Sprints semanales", "Soporte evolutivo"]

const contactLinks = [
  {
    label: "@codidevs en Instagram",
    ariaLabel: "CodiDevs en Instagram",
    href: CODIDEVS_INSTAGRAM_URL,
    icon: Instagram,
    external: true,
  },
  {
    label: `WhatsApp ${CODIDEVS_WHATSAPP_DISPLAY}`,
    ariaLabel: "Escribir a CodiDevs por WhatsApp",
    href: waUrl("Hola CodiDevs, quiero conversar sobre un proyecto de software."),
    icon: MessageCircle,
    external: true,
  },
  {
    label: CODIDEVS_SUPPORT_EMAIL,
    ariaLabel: `Enviar correo a ${CODIDEVS_SUPPORT_EMAIL}`,
    href: `mailto:${CODIDEVS_SUPPORT_EMAIL}`,
    icon: Mail,
    external: false,
  },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid gap-9 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <Logo className="size-5 text-accent" />
              <span className="text-sm font-semibold tracking-tight">CodiDevs</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Equipo de desarrollo de software en Manta, Ecuador. Construimos productos internos,
              plataformas web, automatizaciones e integraciones para empresas en crecimiento.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-accent animate-pulse-glow max-md:animate-none" />
              Sistemas medibles, mantenibles y listos para escalar.
            </div>

            <div className="mt-5 flex flex-col gap-3">
              {contactLinks.map(({ label, ariaLabel, href, icon: Icon, external }) => (
                <a
                  key={href}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  aria-label={ariaLabel}
                  className="group inline-flex w-fit items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="flex size-9 items-center justify-center rounded-full border border-border bg-card transition-colors group-hover:border-primary/30 group-hover:text-primary">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span>{label}</span>
                  <ArrowUpRight
                    className="size-3.5 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Servicios" items={services} />
          <FooterColumn title="Operacion" items={company} />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
            &copy; {year} CodiDevs. Desarrollo de software a medida en Ecuador.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <a href="/" className="transition-colors hover:text-foreground">Inicio</a>
            <a href="/apps" className="transition-colors hover:text-foreground">Apps Móviles</a>
            <a href="/n8n" className="transition-colors hover:text-foreground">Automatizaciones n8n</a>
            <a href="/#contacto" className="transition-colors hover:text-foreground">Contacto</a>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none -mb-4 select-none bg-gradient-to-b from-foreground/[0.055] to-transparent bg-clip-text text-center text-[min(18vw,9rem)] font-semibold leading-none tracking-tight text-transparent sm:-mb-8"
        >
          codidevs
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="text-sm text-foreground/82">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
