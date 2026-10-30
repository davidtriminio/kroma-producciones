import type {PackageId, ServiceId} from "../data/types.ts"

export const QUOTE_EVENT = "kroma:quote"

export type QuoteRequest = {
    serviceId: ServiceId
    packageId?: PackageId
}

// Lets any section ask the contact form to preselect a service, then scrolls to it.
export function requestQuote(request: QuoteRequest) {
    window.dispatchEvent(new CustomEvent<QuoteRequest>(QUOTE_EVENT, {detail: request}))
    document.getElementById("contacto")?.scrollIntoView({behavior: "smooth", block: "start"})
}
