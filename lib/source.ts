import type { LucideIcon } from 'lucide-react'
import { loader } from 'fumadocs-core/source'
import { defineI18n } from 'fumadocs-core/i18n';
import * as lucideIcons from 'lucide-react'
import { createElement } from 'react'
import { docs } from '../.source'
import { routing } from "@/i18n/routing";

export const i18n = defineI18n({
  defaultLanguage: routing.defaultLocale,
  languages: routing.locales,
});

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  i18n
})

