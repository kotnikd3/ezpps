<template>
    <section class="hero mt-6">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-vcentered">
                    <div class="column has-text-right">
                        <h1 class="title is-1 has-text-primary">Evropsko združenje psihoanalitičnih pristopov – Slovenija (EZPPS)</h1>
                    </div>
                    <div class="column">
                        <div class="is-size-4">
                            Je društvo, ki združuje slovenske psihoterapevte in psihoterapevtke, katerih psihoterapevtsko delo v osnovi temelji na psihoanalitičnih principih umevanja človeške duševnosti.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="columns is-desktop is-vcentered">
                <div class="column">
                    <div class="columns is-vcentered is-mobile">
                        <div class="column">
                            <figure class="is-pulled-right" style="max-width: 150px;">
                                <a href="https://ecpp.ngo" target="_blank" rel="noopener noreferrer">
                                    <img src="@/assets/images/ecpp_logo.svg" alt="ECPP">
                                </a>
                            </figure>
                        </div>
                        <div class="column">Je strokovno združenje, ki predstavlja slovensko podružnico mednarodnega psihoanalitičnega psihoterapevtskega združenja ECPP.</div>
                    </div>
                </div>
                <div class="column">
                    <div class="columns is-vcentered is-mobile">
                        <div class="column">
                            <figure class="is-pulled-right" style="max-width: 125px;">
                                <a href="https://www.skzp.si/" target="_blank" rel="noopener noreferrer">
                                    <img src="@/assets/images/skzp_logo.png" alt="SKZP">
                                </a>
                            </figure>
                        </div>
                        <div class="column">Je članica Slovenske krovne zveze za psihoterapijo, ki pod svojim okriljem združuje strokovna združenja različnih psihoterapevtskih pristopov v Sloveniji.</div>
                    </div>
                </div>
                <div class="column">
                    <div class="columns is-vcentered is-mobile">
                        <div class="column">
                            <figure class="is-pulled-right" style="max-width: 200px;">
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

    <section class="section hero is-primary">
        <div class="container">
            <nav class="level">
                <div class="level-item">
                    <h2 class="title is-2">Poiščite psihoterapevta v svoji bližini.</h2>
                </div>
                <div class="level-item">
                    <RouterLink class="button is-white is-rounded is-large" :to="{ name: 'members_view' }">Seznam članov</RouterLink>
                </div>
            </nav>
        </div>
    </section>

    <GoogleMap/>

    <section class="section">
        <div class="container">
            <h2 class="title is-2 has-text-success">Stran je v izdelavi</h2>
        </div>
    </section>

</template>

<script setup>
    import GoogleMap from "@/components/Map.vue"
</script>