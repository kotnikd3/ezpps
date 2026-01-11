<template>
    <section class="section mb-5">
        <div class="container has-text-centered">
            <h5 class="title is-5">
                Dobrodošli na strani <span class="has-text-primary">Evropskega združenja psihoanalitičnih pristopov - Slovenija (EZPPS)</span>.
            </h5>
            <h5 class="subtitle is-5">Smo društvo, ki združuje slovenske psihoterapevte in psihoterapevtke, katerih delo temelji na psihoanalitičnih principih razumevanja človekove duševnosti.</h5>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-one-third-tablet">
                    <h5 class="title is-5">Aktualni dogodki</h5>
                    <EventsList :events="events" :maxLenght=130 @detail-event="eventDetail"/>
                </div>
                <div class="column is-two-thirds-tablet">
                    <div class="hero is-primary is-small">
                        <div class="hero-body-custom">
                        <nav class="level">
                            <div class="level-item">
                                <h6 class="subtitle is-6">Poiščite psihoterapevta v svoji bližini.</h6>
                            </div>
                            <div class="level-item">
                                <RouterLink class="button is-white is-rounded is-small" :to="{ name: 'members_view' }">Seznam članov</RouterLink>
                            </div>
                        </nav>
                        </div>
                    </div>
                    <GoogleMap :members="members"/>
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <p class="is-size-6 has-text-centered mb-5">
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
                        <div class="column">Strokovno združenje, ki predstavlja slovensko podružnico mednarodnega psihoanalitičnega psihoterapevtskega združenja ECPP.</div>
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
                        <div class="column">Slovenske krovne zveze za psihoterapijo pod svojim okriljem združuje strokovna združenja različnih psihoterapevtskih pristopov v Sloveniji.</div>
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
                        <div class="column">Evropska zveza za psihoterapijo je krovna evropska psihoterapevtska organizacija, katere članici sta tako SKZP kot ECPP in pod okriljem katere posredno deluje tudi EZPPS.</div>
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

<style scoped lang="scss">
    .hero-body-custom {
        padding: 12px 24px;
    }
</style>
