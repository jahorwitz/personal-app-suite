import type { Locale, SiteContent } from "../types";
import { en } from "./en";
import { es } from "./es";
import { pt } from "./pt";
import { fr } from "./fr";

/** Map of all locale content keyed by locale code. */
export const contentMap: Record<Locale, SiteContent> = { en, es, pt, fr };

/** Default locale when none is specified or the URL prefix is invalid. */
export const defaultLocale: Locale = "en";

/** All supported locale codes. */
export const supportedLocales: Locale[] = ["en", "es", "pt", "fr"];
