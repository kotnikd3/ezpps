<template>
    <section class="hero mt-6">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-vcentered">
                    <div class="column has-text-right">
                        <h1 class="title is-1 is-size-2-mobile has-text-primary" style="font-size: 3.6rem;">Evropsko združenje psihoanalitičnih pristopov – Slovenija (EZPPS)</h1>
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
            <div class="hero is-primary">
                <div class="hero-body">
                <nav class="level">
                    <div class="level-item">
                        <h2 class="title is-2">Poiščite psihoterapevta v svoji bližini.</h2>
                    </div>
                    <div class="level-item">
                        <RouterLink class="button is-white is-rounded is-large" :to="{ name: 'members_view' }">Seznam članov</RouterLink>
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
    
    <!-- 
    
    <hr/>

    <section class="section">
        <div class="container">
            <h2 class="title is-2">Za člane EZPPS</h2>
            <div class="columns">
                <div class="column is-one-quarter">
                    <figure class="image is-4by3">
                        <img
                            src="@/assets/images/home_for_members.jpg"
                            alt="Placeholder image"
                        />
                    </figure>
                </div>
                <div class="column is-one-quarter">
                    <h4 class="title is-4">Spremljajte naše dogodke.</h4>
                    <div class="block">
                        <RouterLink class="button is-primary is-outlined" :to="{ name: 'events_view' }">Prihajajoči dogodki</RouterLink>
                    </div>
                </div>
                <div class="column is-one-quarter">
                    <h4 class="title is-4">Prispevki</h4>
                    <div class="block">
                        Na spodnji povezavi so na voljo obvestila, novice in pretekla dogajanja naše zveze.
                    </div>
                    <div class="block">
                        <RouterLink class="button is-primary is-outlined" :to="{ name: 'library_view' }">Več</RouterLink>
                    </div>
                </div>
                <div class="column is-one-quarter">
                    <h4 class="title is-4">Povezave</h4>
                    <div class="block">
                        Dostopajte do povezav organizacij, inštitutov in fakultet.
                    </div>
                    <div class="block">
                        <RouterLink class="button is-primary is-outlined" :to="{ name: 'connections_view' }">Več</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <hr/>

    <section class="section">
        <div class="container">
            <h2 class="title is-2">Za terapevte</h2>
            <div class="columns">
                <div class="column is-one-quarter">
                    <h4 class="title is-4">Postanite član EZPPS</h4>
                    <div class="block">
                        Članstvo lahko pridobi vsak, ki se ukvarja s psihoterapevtsko dejavnostjo na podlagi strokovne usposobljenosti v okviru psihoanalitičnega psihoterapevtskega pristopa.
                    </div>
                    <div class="block">
                        <RouterLink class="button is-primary is-outlined" :to="{ name: 'enrollment_view' }">Več o včlanitvi</RouterLink>
                    </div>
                </div>
                <div class="column is-one-quarter">
                    <figure class="image is-4by3">
                        <img
                            src="@/assets/images/home_for_therapists.jpg"
                            alt="Placeholder image"
                        />
                    </figure>
                </div>
                <div class="column is-one-quarter">
                    <h4 class="title is-4">Več o EZPPS</h4>
                    <div class="block">
                        Delujemo na več ravneh in se povezujemo z ostalimi organizacijami. Skrbimo za izpolnjevanje etičnih in moralnih načel stroke, spodbujamo člane pri strokovnemu izpopolnjevanju in organiziramo javne dogodke.
                    </div>
                    <div class="block">
                        <RouterLink class="button is-primary is-outlined" :to="{ name: 'ezpps_view' }">Več</RouterLink>
                    </div>
                </div>
                <div class="column is-one-quarter">
                    <h4 class="title is-4">Pridobivanje certifikatov</h4>
                    <div class="block">
                        Omogočamo pridobivanje certifikatov Evropske konfederacije psihoanalitičnih pristopov (ECPP).
                    </div>
                    <div class="block">
                        <RouterLink class="button is-primary is-outlined" :to="{ name: 'certification_view' }">Več</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <hr/>

    <section class="section">
        <div class="container">
            <h2 class="title is-2">Za vse ostale</h2>
            <div class="columns">
                <div class="column is-one-quarter">
                    <h4 class="title is-4">Častno razsodišče</h4>
                    <div class="block">
                        Ste zaznali kršitev na področju psihoterapevtskega delovanja?
                    </div>
                    <div class="block">
                        Častno razsodišče etično podporo in odloča o etičnih kršitvah. Njegove pristojnosti so proučevanje vzrokov za kršitve in rešuje pritožbe, ki se nanašajo na psihoterapevtsko dejavnost.
                    </div>
                    <div class="block">
                        <RouterLink class="button is-primary is-outlined" :to="{ name: 'contact_view' }">Stopite v kontakt</RouterLink>
                    </div>
                </div>
                <div class="column is-one-quarter">
                    <h4 class="title is-4">Etični kodeks</h4>
                    <div class="block">
                        Opredeljuje vrednote, načela in standarde v psihoanalitičnem pristopu ter informira in zaščititi vse, ki poiščejo storitve tega področja.
                    </div>
                    <div class="block">
                        <a class="button is-primary is-outlined" href="./static/Eticni-kodeks-EZPPS.pdf" target="_blank" rel="noopener noreferrer">Več</a>
                    </div>
                </div>
                <div class="column is-one-quarter">
                    <figure class="image is-4by3">
                        <img
                            src="@/assets/images/home_for_others.jpg"
                            alt="Placeholder image"
                        />
                    </figure>
                </div>
                <div class="column is-one-quarter">
                    <h4 class="title is-4">Poiščite terapevta</h4>
                    <div class="block">
                        Na voljo vam je pregled naših članov in njihovih kontaktnih podatkov.
                    </div>
                    <div class="block">
                        <RouterLink class="button is-primary is-outlined" :to="{ name: 'members_view' }">Več</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <hr/>

    <section class="section">
        <div class="container">
            <h2 class="title is-2">Psihoanalitična psihoterapevtska pristopa pod okriljem EZPPS</h2>
            <div class="columns">
                <div class="column">
                    <div class="columns is-vcentered">
                        <div class="column">
                            <h4 class="title is-4">Psihoanalitična psihoterapija</h4>
                            <div class="block">
                                V praksi proces psihoanalitične psihoterapije lahko poteka v sedečem ali ležečem položaju, zasledujoč  prosto-asociativni tok misli, ter razumevanje porajajoče nezavedne in odnosne dinamike.
                            </div>
                            <div class="block">
                                <RouterLink class="button is-primary is-outlined" :to="{ name: 'psychoanalytic_psychotherapy_view' }">Več o terapiji</RouterLink>
                            </div>
                        </div>
                        <div class="column has-text-centered">
                            <figure class="image">
                                <img src="@/assets/images/psihoanaliza.jpg" alt="psihoanaliza">
                            </figure>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="columns is-vcentered">
                        <div class="column">
                            <h4 class="title is-4">Psihodinamska psihoterapija</h4>
                            <div class="block">
                                V praksi je psihodinamska psihoterapija integrativno naravnana, saj vključuje poleg tradicionalnega načina dela tudi različne telesne, ustvarjalne, gibalne, psihodramske in druge tehnike.
                            </div>
                            <div class="block">
                                <RouterLink class="button is-primary is-outlined" :to="{ name: 'psychodynamic_psychotherapy_view' }">Več o terapiji</RouterLink>
                            </div>
                        </div>
                        <div class="column has-text-centered">
                            <figure class="image">
                                <img src="@/assets/images/psihodinamska_psihoterapija.jpg" alt="psihoanaliza">
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> -->

</template>

<script setup>
    import GoogleMap from "@/components/Map.vue"
</script>

<style scoped>
    .image img {
        border-radius: 1.5rem;
    }
</style>