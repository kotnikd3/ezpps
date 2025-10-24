<template>
    <section class="hero mt-6">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-vcentered">
                    <div class="column has-text-right">
                        <h1 class="title is-1 is-size-2-mobile has-text-primary" style="font-size: 3.2rem;">Evropsko združenje psihoanalitičnih pristopov – Slovenija (EZPPS)</h1>
                    </div>
                    <div class="column">
                        <div class="is-size-4 is-size-5-mobile">
                            Je društvo, ki združuje slovenske psihoterapevte in psihoterapevtke, katerih psihoterapevtsko delo v osnovi temelji na psihoanalitičnih principih umevanja človeške duševnosti.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="hero is-primary is-small">
                <div class="hero-body">
                <nav class="level">
                    <div class="level-item">
                        <h3 class="title is-3">Poiščite psihoterapevta v svoji bližini.</h3>
                    </div>
                    <div class="level-item">
                        <RouterLink class="button is-white is-rounded is-medium" :to="{ name: 'members_view' }">Seznam članov</RouterLink>
                    </div>
                </nav>
                </div>
            </div>
        </div>
        <div class="container">
            <GoogleMap/>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <h2 class="title is-2">Prihodnji dogodki</h2>
                    <article class="media box">
                        <figure class="media-left">
                            <p class="image is-64x64">
                            <img src="https://bulma.io/assets/images/placeholders/128x128.png" />
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <!-- <p class="title is-4">18. 2. 2021</p> -->
                                <p class="title is-5 is-spaced">
                                    Predavanje SKZP: Zasvojenost s seksualnostjo in internetno pornografijo – 2.del, Peter Topić
                                </p>
                                <p class="subtitle">
                                    <span class="tag is-primary is-large is-lighta">18. 2. 2021</span>
                                </p>
                                <p>
                                    Seminar je oblikovan kot samostojna celota in je primeren tudi za tiste, ki se prvega dela niste udeležili.
                                    <br/>
                                    Zasvojenost je verjetno eden najbolj proučevanih in pojasnjevanih fenomenov, povezanih z duševnim zdravjem.
                                </p>
                            </div>
                            <nav class="level is-mobile">
                            <div class="level-left">
                                <a class="level-item">
                                <span class="icon is-small"><i class="fas fa-reply"></i></span>
                                </a>
                                <a class="level-item">
                                <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                                </a>
                                <a class="level-item">
                                <span class="icon is-small"><i class="fas fa-heart"></i></span>
                                </a>
                            </div>
                            </nav>
                        </div>
                        <div class="media-right">
                            
                        </div>
                    </article>
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
                            <figure class="is-pulled-right" style="max-width: 120px;">
                                <a href="https://ecpp.ngo" target="_blank" rel="noopener noreferrer">
                                    <img src="@/assets/images/ecpp_logo.svg" alt="ECPP">
                                </a>
                            </figure>
                        </div>
                        <div class="column is-size-6">Je strokovno združenje, ki predstavlja slovensko podružnico mednarodnega psihoanalitičnega psihoterapevtskega združenja ECPP.</div>
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
                        <div class="column is-size-6">Je članica Slovenske krovne zveze za psihoterapijo, ki pod svojim okriljem združuje strokovna združenja različnih psihoterapevtskih pristopov v Sloveniji.</div>
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

    <section class="section">
        <div class="container has-text-centered">
            <h3 class="title is-3 has-text-success">Stran je v izdelavi (oktober 2025)</h3>
        </div>
    </section>
</template>

<script setup>
    import GoogleMap from "@/components/Map.vue"
</script>
