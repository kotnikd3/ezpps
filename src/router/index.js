import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import MembersView from '@/views/MembersView.vue'
import EZPPSView from '@/views/EZPPSView.vue'
import RelationshipsView from '@/views/RelationshipsView.vue'
import PartiesView from '@/views/PartiesView.vue'
import EnrollmentView from '@/views/EnrollmentView.vue'
import CertificationView from '@/views/CertificationView.vue'
import PsychoanalyticPsychotherapyView from '@/views/PsychoanalyticPsychotherapyView.vue'
import PsychoanalyticEducationView from '@/views/PsychoanalyticEducationView.vue'
import PsychodynamicPsychotherapyView from '@/views/PsychodynamicPsychotherapyView.vue'
import PsychodynamicEducationView from '@/views/PsychodynamicEducationView.vue'
import ConnectionsView from '@/views/ConnectionsView.vue'
import LibraryView from '@/views/LibraryView.vue'
import EventsView from '@/views/EventsView.vue'
import ContactView from '@/views/ContactView.vue'
import CookiesView from '@/views/CookiesView.vue'
import MemberDetailsView from '@/views/MemberDetailsView.vue'
import EventDetailsView from '@/views/EventDetailsView.vue'
import members from '@/assets/data/members.json'
import events from '@/assets/data/events.json'

const siteName = 'EZPPS'
const siteUrl = 'https://www.ezpps.si'

const router = createRouter({
  history: createWebHistory('/'),
//   linkActiveClass: 'is-active',
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            title: 'Psihoanalitična psihoterapija v Sloveniji',
            description: 'Evropsko združenje psihoanalitičnih pristopov – Slovenija (EZPPS) združuje slovenske psihoterapevte in psihoterapevtke psihoanalitičnih pristopov.'
        }
    },
    {
        path: '/o-ezpps',
        name: 'ezpps_view',
        component: EZPPSView,
        meta: { title: 'O združenju EZPPS', description: 'Spoznajte Evropsko združenje psihoanalitičnih pristopov – Slovenija, njegovo poslanstvo, delovanje in članstvo.' }
    },
    {
        path: '/o-zvezah',
        name: 'relationships_view',
        component: RelationshipsView,
        meta: { title: 'Povezave s SKZP, EAP in ECPPP', description: 'Več o povezavah EZPPS s Slovensko krovno zvezo za psihoterapijo, Evropsko zvezo za psihoterapijo in ECPPP.' }
    },
    {
        path: '/o-organih-drustva',
        name: 'parties_view',
        component: PartiesView,
        meta: { title: 'Organi društva EZPPS', description: 'Predstavitev organov in vodstva Evropskega združenja psihoanalitičnih pristopov – Slovenija.' }
    },
    {
        path: '/vclanitev',
        name: 'enrollment_view',
        component: EnrollmentView,
        meta: { title: 'Včlanitev v EZPPS', description: 'Informacije o članstvu, pogojih in postopku včlanitve v Evropsko združenje psihoanalitičnih pristopov – Slovenija.' }
    },
    {
        path: '/certifikacija',
        name: 'certification_view',
        component: CertificationView,
        meta: { title: 'Certifikacija psihoterapevtov', description: 'Informacije o certifikacijskem procesu Evropske konfederacije za psihoanalitično in psihodinamsko psihoterapijo (ECPPP).' }
    },
    {
        path: '/clani',
        name: 'members_view',
        component: MembersView,
        meta: { title: 'Člani in psihoterapevti', description: 'Poiščite člane EZPPS in psihoterapevte psihoanalitičnih ter psihodinamskih pristopov v Sloveniji.' }
    },
    {
        path: '/clani/:id',
        name: 'member_details',
        component: MemberDetailsView,
        props: true,
        meta: {
            title: (to) => {
                const member = members.find((item) => item.id === to.params.id)
                return member ? `${member.name} – psihoterapevt/-ka` : 'Profil člana'
            },
            description: (to) => {
                const member = members.find((item) => item.id === to.params.id)
                return member ? `${member.name}: ${member.title}. Član/-ica Evropskega združenja psihoanalitičnih pristopov – Slovenija.` : 'Profil člana Evropskega združenja psihoanalitičnih pristopov – Slovenija.'
            }
        }
    },
    {
        path: '/o-psihoanaliticni-psihoterapiji',
        name: 'psychoanalytic_psychotherapy_view',
        component: PsychoanalyticPsychotherapyView,
        meta: { title: 'Psihoanalitična psihoterapija', description: 'Spoznajte psihoanalitično psihoterapijo, njene temelje, terapevtski proces in strokovno delo v Sloveniji.' }
    },
    {
        path: '/psihoanaliticno-izobrazevanje',
        name: 'psychoanalytic_education_view',
        component: PsychoanalyticEducationView,
        meta: { title: 'Izobraževanje iz psihoanalitične psihoterapije', description: 'Informacije o izobraževanju in strokovnem usposabljanju iz psihoanalitične psihoterapije v Sloveniji.' }
    },
    {
        path: '/o-psihodinamski-psihoterapiji',
        name: 'psychodynamic_psychotherapy_view',
        component: PsychodynamicPsychotherapyView,
        meta: { title: 'Psihodinamska psihoterapija', description: 'Spoznajte psihodinamsko psihoterapijo, njene temelje in uporabo v psihoterapevtski praksi.' }
    },
    {
        path: '/psihodinamsko-izobrazevanje',
        name: 'psychodynamic_education_view',
        component: PsychodynamicEducationView,
        meta: { title: 'Izobraževanje iz psihodinamske psihoterapije', description: 'Informacije o študiju in strokovnem usposabljanju iz psihodinamske psihoterapije v Sloveniji.' }
    },
    {
        path: '/povezave',
        name: 'connections_view',
        component: ConnectionsView,
        meta: { title: 'Koristne povezave', description: 'Povezave do strokovnih združenj in organizacij s področja psihoterapije v Sloveniji in Evropi.' }
    },
    {
        path: '/publikacije',
        name: 'library_view',
        component: LibraryView,
        meta: { title: 'Publikacije o psihoterapiji', description: 'Publikacije, strokovna besedila in priporočeno gradivo s področja psihoanalitične in psihodinamske psihoterapije.' }
    },
    {
        path: '/dogodki',
        name: 'events_view',
        component: EventsView,
        meta: { title: 'Dogodki in izobraževanja', description: 'Predavanja, seminarji in strokovni dogodki EZPPS s področja psihoanalitične in psihodinamske psihoterapije.' }
    },
    {
        path: '/dogodki/:id',
        name: 'event_details',
        component: EventDetailsView,
        props: true,
        meta: {
            title: (to) => events.find((item) => item.id === to.params.id)?.title || 'Dogodek',
            description: (to) => {
                const event = events.find((item) => item.id === to.params.id)
                if (!event) return 'Dogodki in izobraževanja Evropskega združenja psihoanalitičnih pristopov – Slovenija.'
                const summary = event.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
                return `${event.title}: ${summary}`.slice(0, 160)
            }
        }
    },
    {
        path: '/kontakti',
        name: 'contact_view',
        component: ContactView,
        meta: { title: 'Kontakt', description: 'Kontaktni podatki Evropskega združenja psihoanalitičnih pristopov – Slovenija (EZPPS).' }
    },
    {
        path: '/piskotki',
        name: 'cookies_view',
        component: CookiesView,
        meta: { title: 'Politika zasebnosti in piškotki', description: 'Informacije o varstvu zasebnosti in uporabi piškotkov na spletni strani EZPPS.', robots: 'noindex, follow' }
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Scroll to top on every navigation
    if (savedPosition) {
        return savedPosition; // This handles browser back/forward
    } else {
        return { top: 0 }; // Scroll to top of the page
    }
  }
})

router.afterEach((to) => {
    const resolveMeta = (value) => typeof value === 'function' ? value(to) : value
    const pageTitle = resolveMeta(to.meta.title) || 'Evropsko združenje psihoanalitičnih pristopov – Slovenija'
    const description = resolveMeta(to.meta.description) || ''
    const canonicalUrl = `${siteUrl}${to.path}`

    document.title = `${pageTitle} | ${siteName}`

    const setMeta = (selector, attribute, key, content) => {
        let element = document.head.querySelector(selector)
        if (!element) {
            element = document.createElement('meta')
            element.setAttribute(attribute, key)
            document.head.appendChild(element)
        }
        element.setAttribute('content', content)
    }

    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[name="robots"]', 'name', 'robots', resolveMeta(to.meta.robots) || 'index, follow')
    setMeta('meta[property="og:title"]', 'property', 'og:title', document.title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', 'sl_SI')
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', siteName)
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary')
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', document.title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl
})

export default router
