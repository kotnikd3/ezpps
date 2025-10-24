<template>
    <div>
        <section class="section">
            <div class="container has-text-centered">
                <h3 class="title is-3 has-text-success">Stran je v izdelavi (oktober 2025)</h3>
            </div>
        </section>
        <div class="columns is-multiline">
            <article
                v-for="event in events" 
                :key="event.id" 
                class="media box"
                @click.stop="$emit('detail-event', event)"
            >
                <figure class="media-left">
                    <p class="image is-64x64">
                    <img src="https://bulma.io/assets/images/placeholders/128x128.png" />
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <h5 class="title is-5" v-text="event.title"></h5>

                        <p class="subtitle">
                            <span class="tag is-primary is-large is-light" v-text="event.datetime"></span>
                        </p>
                        <p v-text="event.content"></p>
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
</template>

<script setup>
    defineProps({
        events: {
            type: Array,
            required: true
        }
    })
</script>
