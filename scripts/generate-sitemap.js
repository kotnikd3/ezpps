import { readFile, writeFile } from 'node:fs/promises'

const siteUrl = 'https://www.ezpps.si'
const publicRoutes = [
  '/',
  '/o-ezpps',
  '/o-zvezah',
  '/o-organih-drustva',
  '/vclanitev',
  '/certifikacija',
  '/clani',
  '/o-psihoanaliticni-psihoterapiji',
  '/psihoanaliticno-izobrazevanje',
  '/o-psihodinamski-psihoterapiji',
  '/psihodinamsko-izobrazevanje',
  '/povezave',
  '/publikacije',
  '/dogodki',
  '/kontakti',
]

const readData = async (path) => JSON.parse(await readFile(new URL(path, import.meta.url), 'utf8'))
const [members, events] = await Promise.all([
  readData('../src/assets/data/members.json'),
  readData('../src/assets/data/events.json'),
])

const detailRoutes = [
  ...members.map(({ id }) => `/clani/${encodeURIComponent(id)}`),
  ...events.map(({ id }) => `/dogodki/${encodeURIComponent(id)}`),
]
const urls = [...publicRoutes, ...detailRoutes]
  .map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`)
  .join('\n')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

await writeFile(new URL('../public/sitemap.xml', import.meta.url), sitemap)