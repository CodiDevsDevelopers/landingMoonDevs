const DEFAULT_CALCOM_EVENT = "codidevs-ojncyo/15min"
const CALCOM_EVENT =
  process.env.NEXT_PUBLIC_CALCOM_DIAGNOSTICO_LINK?.trim() || DEFAULT_CALCOM_EVENT

export const CAL_DIAGNOSTICO_LINK = CALCOM_EVENT.replace(
  /^https?:\/\/(?:www\.)?cal\.com\//i,
  "",
).replace(/^\/+|\/+$/g, "")
