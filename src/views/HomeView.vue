<template>
    <section class="hero mt-6">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-vcentered">
                    <div class="column has-text-right">
                        <h1 class="title is-2 is-size-3-mobile has-text-primary">Evropsko združenje psihoanalitičnih pristopov – Slovenija (EZPPS)</h1>
                    </div>
                    <div class="column">
                        <div class="is-size-5 is-size-6-mobile">
                            Društvo, ki združuje slovenske psihoterapevte in psihoterapevtke, katerih delo temelji na psihoanalitičnih principih razumevanja človekove duševnosti.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <h2 class="title is-4">Aktualni dogodki</h2>
            <EventsList :events="events" @detail-event="eventDetail"/>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="hero is-primary is-small">
                <div class="hero-body">
                <nav class="level">
                    <div class="level-item">
                        <h3 class="title is-4">Poiščite psihoterapevta v svoji bližini.</h3>
                    </div>
                    <div class="level-item">
                        <RouterLink class="button is-white is-rounded is-medium" :to="{ name: 'members_view' }">Seznam članov</RouterLink>
                    </div>
                </nav>
                </div>
            </div>
        </div>
        <div class="container">
            <GoogleMap :members="members"/>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <p class="is-size-5 has-text-centered mb-5">
                EZPPS je članica Slovenske krovne zveze za psihoterapijo (SKZP), Evropske zveze za psihoterapijo (EAP) ter Evropske konfederacije za psihoanalitično psihoterapijo (ECPP).
            </p>
            <div class="columns is-desktop is-vcentered">
                <div class="column">
                    <div class="columns is-vcentered is-mobile">
                        <div class="column">
                            <figure class="is-pulled-right" style="max-width: 120px;">
                                <a href="https://ecpp.ngo" target="_blank" rel="noopener noreferrer">
                                    <img src="@/assets/images/ecpp_logo.svg" alt="ECPP">
                                </a>
                            </figure>
                        </div>
                        <div class="column is-size-6">Strokovno združenje, ki predstavlja slovensko podružnico mednarodnega psihoanalitičnega psihoterapevtskega združenja ECPP.</div>
                    </div>
                </div>
                <div class="column">
                    <div class="columns is-vcentered is-mobile">
                        <div class="column">
                            <figure class="is-pulled-right" style="max-width: 100px;">
                                <a href="https://www.skzp.si/" target="_blank" rel="noopener noreferrer">
                                    <img src="@/assets/images/skzp_logo.png" alt="SKZP">
                                </a>
                            </figure>
                        </div>
                        <div class="column is-size-6">Slovenske krovne zveze za psihoterapijo pod svojim okriljem združuje strokovna združenja različnih psihoterapevtskih pristopov v Sloveniji.</div>
                    </div>
                </div>
                <div class="column">
                    <div class="columns is-vcentered is-mobile">
                        <div class="column">
                            <figure class="is-pulled-right" style="max-width: 150px;">
                                <a href="https://www.europsyche.org/" target="_blank" rel="noopener noreferrer">
                                    <img src="@/assets/images/eap_logo.png" alt="EAP">
                                </a>
                            </figure>
                        </div>
                        <div class="column is-size-6">Evropska zveza za psihoterapijo je krovna evropska psihoterapevtska organizacija, katere članici sta tako SKZP kot ECPP in pod okriljem katere posredno deluje tudi EZPPS.</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref, onMounted } from "vue"
    import { useRouter } from "vue-router"
    import GoogleMap from "@/components/GoogleMap.vue"
    import { getAll } from "@/services/membersService.js"
    import EventsList from "@/components/EventsList.vue"
    import { getAllEvents } from "@/services/eventsService.js"

    const members = ref([])
    const events = ref([])
    const router = useRouter()

    onMounted(async () => {
        members.value = await getAll()
        events.value = await getAllEvents()
    })

    function eventDetail(event) {
        router.push({ name: 'event_details', params: { id: event.id } });
    }

</script>
