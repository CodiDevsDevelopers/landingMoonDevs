const DEFAULT_PANEL_URL = "http://localhost:3000"

/**
 * Panel del cliente (Codi-Panel). Apunta al servidor local del panel por defecto,
 * así el enlace sirve para trabajar en local; en producción se sobreescribe con
 * NEXT_PUBLIC_PANEL_URL (variable de entorno en Vercel o .env.local).
 */
export const PANEL_URL = (process.env.NEXT_PUBLIC_PANEL_URL ?? DEFAULT_PANEL_URL).replace(
  /\/$/,
  ""
)

export const PANEL_LOGIN_URL = `${PANEL_URL}/login`
