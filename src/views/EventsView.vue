<template>
    <section class="section">
        <div class="container">
            <h4 class="title is-4">Dogodki</h4>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <EventsList :events="events" :maxLenght=350 @detail-event="eventDetail"/>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-three-quarters">
                    <h5 class="title is-5">Priložnost za predstavitev – predavanja SKZP</h5>
                    <div class="block">
                        Krovna organizacija SKZP pripravlja mesečna predavanja. Namenjena so psihoterapevtom in edukantom psihoterapije ter širši strokovni javnosti (socialni delavci, specialni pedagogi, psihologi in drugi). Vsebine mesečnih predavanj so izbrane na podlagi izraženega strokovnega interesa. Predavanja so honorirana.
                    </div>
                </div>
                <div class="column has-text-centered">
                    <figure class="is-inline-block" style="width: 30%;">
                        <a href="https://www.skzp.si/" target="_blank" rel="noopener noreferrer">
                            <img src="@/assets/images/skzp_logo.png" alt="SKZP">
                        </a>
                    </figure>
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-three-quarters">
                    <h5 class="title is-5">Poziv za objavo podatkov na spletni strani ECPP</h5>
                    <div class="block">
                        Člane s certifikatom ECPP vljudno pozivamo k oddaji podatkov za spletno stran ECPP.
                    </div>
                </div>
                <div class="column has-text-centered">
                    <figure class="is-inline-block" style="width: 40%;">
                        <a href="https://ecpp.ngo" target="_blank" rel="noopener noreferrer">
                            <img src="@/assets/images/ecpp_logo.svg" alt="ECPP">
                        </a>
                    </figure>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { ref, onMounted } from "vue"
    import { useRouter } from "vue-router"

    import EventsList from "@/components/EventsList.vue"
    import { getAllEvents } from "@/services/eventsService.js"

    const events = ref([])
    const router = useRouter()

    onMounted(async () => {
        events.value = await getAllEvents()
    })

    function eventDetail(event) {
        router.push({ name: 'event_details', params: { id: event.id } });
    }
</script>