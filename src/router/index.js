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


const router = createRouter({
  history: createWebHistory('/'),
//   linkActiveClass: 'is-active',
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/o-ezpps',
        name: 'ezpps_view',
        component: EZPPSView
    },
    {
        path: '/o-zvezah',
        name: 'relationships_view',
        component: RelationshipsView
    },
    {
        path: '/o-organih-drustva',
        name: 'parties_view',
        component: PartiesView
    },
    {
        path: '/vclanitev',
        name: 'enrollment_view',
        component: EnrollmentView
    },
    {
        path: '/certifikacija',
        name: 'certification_view',
        component: CertificationView
    },
    {
        path: '/clani',
        name: 'members_view',
        component: MembersView
    },
    {
        path: '/o-psihoanaliticni-psihoterapiji',
        name: 'psychoanalytic_psychotherapy_view',
        component: PsychoanalyticPsychotherapyView
    },
    {
        path: '/psihoanaliticno-izobrazevanje',
        name: 'psychoanalytic_education_view',
        component: PsychoanalyticEducationView
    },
    {
        path: '/o-psihodinamski-psihoterapiji',
        name: 'psychodynamic_psychotherapy_view',
        component: PsychodynamicPsychotherapyView
    },
    {
        path: '/psihodinamsko-izobrazevanje',
        name: 'psychodynamic_education_view',
        component: PsychodynamicEducationView
    },
    {
        path: '/povezave',
        name: 'connections_view',
        component: ConnectionsView
    },
    {
        path: '/knjiznica',
        name: 'library_view',
        component: LibraryView
    },
    {
        path: '/dogodki',
        name: 'events_view',
        component: EventsView
    },
    {
        path: '/kontakt',
        name: 'contact_view',
        component: ContactView
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

export default router
