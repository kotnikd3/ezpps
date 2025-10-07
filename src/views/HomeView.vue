<template>
    <section class="hero is-primary mt-6">
        <div class="hero-body">
            <div class="columns is-vcentered">
                <div class="column has-text-right">
                    <h1 class="title is-1">Evropsko združenje psihoanalitičnih pristopov – Slovenija (EZPPS)</h1>
                </div>
                <div class="column has-text-left">
                    <div class="is-size-4">
                        Je društvo, ki združuje slovenske psihoterapevte in psihoterapevtke, katerih psihoterapevtsko delo v osnovi temelji na psihoanalitičnih principih umevanja človeške duševnosti.
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

    <section class="section">
        <div class="container">
            <article class="media">
                <figure class="media-left">
                    <p class="image is-64x64">
                    <img src="/static/members/aisha-kandare.jpg" />
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                    <p>
                        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
                        magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa
                        sem. Etiam finibus odio quis feugiat facilisis.
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
                    <button class="delete"></button>
                </div>
            </article>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <h2 class="title is-2">Zemljevid lokacij dela psihoterapevtov</h2>
        </div>
    </section>

    <GoogleMap/>

</template>

<script setup>
    import GoogleMap from "@/components/Map.vue"
</script>