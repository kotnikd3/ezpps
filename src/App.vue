<template>
    <nav class="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <RouterLink class="navbar-item" :to="{ name: 'home' }" @click="isMenuActive = false;">
                    <img src="@/assets/images/ezpps_logo_v1.png" alt="EZPPS_logo">
                </RouterLink>
                <a 
                    role="button" 
                    :class="['navbar-burger', { 'is-active' : isMenuActive }]"
                    aria-label="menu" 
                    aria-expanded="false" 
                    data-target="navMenu"
                    @click="isMenuActive = !isMenuActive"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navMenu" :class="['navbar-menu', { 'is-active' : isMenuActive }]">
                <div class="navbar-end">
                    <RouterLink class="navbar-item" :to="{ name: 'home' }" @click="isMenuActive = false;">Domov</RouterLink>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">O društvu</a>
                        <div class="navbar-dropdown">
                            <RouterLink :to="{ name: 'ezpps_view' }" class="navbar-item" @click="isMenuActive = false;">O EZPPS</RouterLink>
                            <RouterLink :to="{ name: 'relationships_view' }" class="navbar-item" @click="isMenuActive = false;">O zvezah društev ECPP, SKZP in EAP</RouterLink>
                            <RouterLink :to="{ name: 'parties_view' }" class="navbar-item" @click="isMenuActive = false;">Organi društva</RouterLink>
                            <hr class="navbar-divider">
                            <RouterLink :to="{ name: 'enrollment_view' }" class="navbar-item" @click="isMenuActive = false;">Včlanitev</RouterLink>
                            <RouterLink :to="{ name: 'certification_view' }" class="navbar-item" @click="isMenuActive = false;">Certifikacija</RouterLink>
                        </div>
                    </div>
                    <RouterLink class="navbar-item" :to="{ name: 'members_view' }" @click="isMenuActive = false;">Člani</RouterLink>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">O psihoterapiji</a>
                        <div class="navbar-dropdown">
                            <RouterLink :to="{ name: 'psychoanalytic_psychotherapy_view' }" class="navbar-item" @click="isMenuActive = false;">O psihoanalitični psihoterapiji</RouterLink>
                            <RouterLink :to="{ name: 'psychoanalytic_education_view' }" class="navbar-item" @click="isMenuActive = false;">Psihoanalitično izobraževanje</RouterLink>
                            <RouterLink :to="{ name: 'psychodynamic_psychotherapy_view' }" class="navbar-item" @click="isMenuActive = false;">O psihodinamski psihoterapiji</RouterLink>
                            <RouterLink :to="{ name: 'psychodynamic_education_view' }" class="navbar-item" @click="isMenuActive = false;">Psihodinamsko izobraževanje</RouterLink>
                            <RouterLink :to="{ name: 'connections_view' }" class="navbar-item" @click="isMenuActive = false;">Povezave</RouterLink>
                        </div>
                    </div>
                    <RouterLink class="navbar-item" :to="{ name: 'library_view' }" @click="isMenuActive = false;">Publikacije</RouterLink>
                    <RouterLink class="navbar-item" :to="{ name: 'events_view' }" @click="isMenuActive = false;">Dogodki</RouterLink>
                    <RouterLink class="navbar-item" :to="{ name: 'contact_view' }" @click="isMenuActive = false;">Kontakt</RouterLink>
                </div>
            </div>
        </div>
    </nav>
    <div class="my-6">
        <RouterView />
    </div>
    <footer class="footer">
        <div class="container">
            <div class="columns is-mobile is-multiline">
                <div class="column is-half-mobile is-3-desktop">
                    <figure style="width: 50%;">
                        <a href="https://ezpps.org" target="_blank" rel="noopener noreferrer">
                            <img src="@/assets/images/ezpps_logo_v1.png" alt="EZPPS">
                        </a>
                    </figure>
                    <ul>
                        <li>
                            <a href="https://maps.app.goo.gl/xBjaAZjrPVtmRtYKA" target="_blank" rel="noopener noreferrer" class="icon-text">
                                <span class="icon">
                                    <font-awesome-icon icon="fa-solid fa-location-dot" />
                                </span>
                                <span>Cesta na Brdo 109<br>1000 Ljubljana</span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:0038631833621" class="icon-text">
                                <span class="icon">
                                    <font-awesome-icon icon="fa-solid fa-phone" />
                                </span>
                                <span>+386 (0)31 833 621</span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:info@ezpps.org" class="icon-text">
                                <span class="icon">
                                    <font-awesome-icon icon="fa-regular fa-envelope" />
                                </span>
                                <span>info@ezpps.org</span>
                            </a>
                        </li>
                        <li><br></li>
                        <li>
                            <span>TRR: SI56 6100 0000 6857 374<br>(odprt pri Delavski Hranilnici)</span>
                        </li>
                    </ul>
                </div>
                <div class="column is-half-mobile is-3-desktop">
                    <h5 class="title is-5"><strong>O društvu</strong></h5>
                    <ul>
                        <li>
                            <RouterLink :to="{ name: 'ezpps_view' }">O EZPPS</RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="{ name: 'relationships_view' }">O zvezah društev ECPP, SKZP in EAP</RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="{ name: 'parties_view' }">Organi društva</RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="{ name: 'enrollment_view' }">Včlanitev</RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="{ name: 'certification_view' }">Certifikacija</RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="{ name: 'members_view' }">Člani</RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="{ name: 'library_view' }">Publikacije</RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="{ name: 'events_view' }">Dogodki</RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="column is-half-mobile is-3-desktop">
                    <h5 class="title is-5"><strong>O psihoterapiji</strong></h5>
                    <ul>
                        <li>
                            <RouterLink :to="{ name: 'psychoanalytic_psychotherapy_view' }">O psihoanalitični psihoterapiji</RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="{ name: 'psychoanalytic_education_view' }">Psihoanalitično izobraževanje</RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="{ name: 'psychodynamic_psychotherapy_view' }">O psihodinamski psihoterapiji</RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="{ name: 'psychodynamic_education_view' }">Psihodinamsko izobraževanje</RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="{ name: 'connections_view' }">Povezave</RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="column is-full-mobile is-3-desktop">
                    <h5 class="title is-5"><strong>Pošljite nam sporočilo</strong></h5>
                    <form ref="form">
                        <div class="field">
                            <div class="control">
                                <input class="input" type="text" placeholder="Ime in priimek" required>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <input class="input" type="text" placeholder="Email" required>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <textarea class="textarea" type="text" placeholder="Sporočilo ..." required></textarea>
                            </div>
                        </div>
                        <div class="field has-text-centered">
                            <div class="control">
                                <button class="button is-outlined is-primary" disabled>Pošlji</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="has-text-centered">
				<p class="is-size-5 has-text-grey pt-2">EZPPS <font-awesome-icon icon="fa-regular fa-copyright" /> 2026</p>
				<p style="font-size: small;">
                    <RouterLink class="plain-link" :to="{ name: 'cookies_view' }">Piškotki in politika zasebnosti</RouterLink> | <a class="has-text-grey" href="https://www.kotnik.si" target="_blank" rel="noopener noreferrer">Ustvaril kotnik.si</a>
                </p>
			</div>
        </div>
    </footer>
</template>

<script>
export default {
  	name: 'App',
    data() {
        return {
            isMenuActive: false,
        }
    },
}
</script>

<style scoped lang="scss">
    @use '@/assets/variables.scss' as *;

    .navbar-end .navbar-item.router-link-exact-active {
        background-color: $color-blue-select;
    }
    // Fix when user click on navbar-item, so that dropdown menu closes
    .navbar-item.is-hoverable:hover .navbar-dropdown {
        display: block !important;
    }
    .navbar-item.is-hoverable:focus-within .navbar-dropdown {
        display: none;
    }
    
    .plain-link {
        // Take parent’s text color
        color: inherit;
    }

    .footer {
        font-size: 16px;
    }
</style>
