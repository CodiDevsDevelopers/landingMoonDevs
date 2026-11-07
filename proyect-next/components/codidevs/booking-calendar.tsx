"use client"

import { useEffect } from "react"
import Cal, { getCalApi } from "@calcom/embed-react"
import { ArrowUpRight, CalendarClock, MessageCircle } from "lucide-react"
import { CAL_DIAGNOSTICO_LINK } from "@/lib/cal-links"
import { WA_HOME_REUNION } from "@/lib/whatsapp-links"

const CAL_CONFIG = {
  theme: "dark",
  layout: "month_view",
} as const

export function BookingCalendar() {
  useEffect(() => {
    if (!CAL_DIAGNOSTICO_LINK) return

    let active = true
    getCalApi().then((cal) => {
      if (!active) return
      cal("ui", {
        theme: "dark",
        layout: "month_view",
        styles: { branding: { brandColor: "#1D9B52" } },
      })
    })

    return () => {
      active = false
    }
  }, [])

  if (!CAL_DIAGNOSTICO_LINK) {
    return (
      <div className="surface-elevated flex min-h-[420px] flex-col items-start justify-center gap-5 rounded-2xl border border-border bg-card/40 p-6 text-left md:p-8">
        <span className="flex size-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
          <CalendarClock className="size-5 text-primary" />
        </span>
        <div>
          <h3 className="text-lg font-medium tracking-tight">Coordina tu horario por WhatsApp</h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            Escríbenos y acordamos la hora del diagnóstico. Al confirmar te enviamos la invitación
            de Google Meet.
          </p>
        </div>
        <a
          href={WA_HOME_REUNION}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pill-primary"
        >
          Coordinar por WhatsApp
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <div className="surface-elevated overflow-hidden rounded-2xl border border-border bg-card/40">
        <div className="h-[720px] w-full overflow-auto sm:h-[640px]">
          <Cal
            calLink={CAL_DIAGNOSTICO_LINK}
            config={CAL_CONFIG}
            style={{ width: "100%", height: "100%", overflow: "auto" }}
          />
        </div>
      </div>
      <p className="text-center text-xs text-muted-foreground">
        ¿No carga el calendario?{" "}
        <a
          href={WA_HOME_REUNION}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary"
        >
          Agenda por WhatsApp
          <MessageCircle className="size-3.5" />
        </a>
      </p>
    </div>
  )
}
