<template>
    <section class="section">
        <div class="container">
            <h2 class="title is-2">Dogodki</h2>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <EventsList :events="events" @detail-event="eventDetail"/>
        </div>
    </section>

    <hr>

    <section class="section">
        <div class="container">
            <div class="columns box is-vcentered is-mobile">
                <div class="column is-half-mobile is-one-quarter-tablet">
                    <figure style="width: 50%;">
                        <a href="https://www.skzp.si/" target="_blank" rel="noopener noreferrer">
                            <img src="@/assets/images/skzp_logo.png" alt="SKZP">
                        </a>
                    </figure>
                </div>
                <div class="column">
                    <h3 class="title is-3">SKZP</h3>
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <h3 class="title is-3">Priložnost za predstavitev – predavanja SKZP</h3>
            <div class="block">
                Krovna organizacija SKZP pripravlja mesečna predavanja. Namenjena so psihoterapevtom in edukantom psihoterapije ter širši strokovni javnosti (socialni delavci, specialni pedagogi, psihologi in drugi). Vsebine mesečnih predavanj so izbrane na podlagi izraženega strokovnega interesa. Predavanja so honorirana.
            </div>
            <div class="block">
                Kontaktna oseba je predsednica Strokovnega sveta SKZP Alenka Milič:
                <a href="mailto:alenkamilic@gmail.com" class="icon-text" style="text-decoration: none; margin-left: 20px;">
                    <span class="icon">
                        <font-awesome-icon icon="fa-regular fa-envelope" />
                    </span>
                    <span>alenkamilic@gmail.com</span>
                </a>
            </div>
        </div>
    </section>

    <hr>

    <section class="section">
        <div class="container">
            <div class="columns box is-vcentered is-mobile">
                <div class="column is-half-mobile is-one-quarter-tablet">
                    <figure style="width: 50%;">
                        <a href="https://ecpp.ngo" target="_blank" rel="noopener noreferrer">
                            <img src="@/assets/images/ecpp_logo.svg" alt="ECPP">
                        </a>
                    </figure>
                </div>
                <div class="column">
                    <h3 class="title is-3">ECPP</h3>
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <h3 class="title is-3">Poziv za objavo podatkov na spletni strani ECPP</h3>
            <div class="block">
                Člane s certifikatom ECPP vljudno pozivamo k oddaji podatkov za spletno stran ECPP. Podatke oddajte s pomočjo obrazca na e-naslov:
                <a href="mailto:secretary@ecpp.ngo" class="icon-text" style="text-decoration: none; margin-left: 20px;">
                    <span class="icon">
                        <font-awesome-icon icon="fa-regular fa-envelope" />
                    </span>
                    <span>secretary@ecpp.ngo</span>
                </a>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { ref, onMounted } from "vue"
    import { useRouter } from "vue-router"

    import EventsList from "@/components/EventsList.vue"
    import { getAll } from "@/services/eventsService.js"

    const events = ref([])
    const router = useRouter()

    onMounted(async () => {
        events.value = await getAll()
    })

    function eventDetail(event) {
        router.push({ name: 'event_details', params: { id: event.id } });
    }
</script>