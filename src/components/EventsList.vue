<template>
    <div>
        <div class="list-item" v-for="event in events" :key="event.id">
            <article class="media py-4" @click.stop="$emit('detail-event', event)">
                <figure class="media-left">
                    <p class="image is-64x64">
                        <img :src="`/images/events/${event.image_name}`" />
                    </p>
                </figure>
                <div class="media-content">
                    <h2 class="title is-6 has-text-grey-dark" v-text="event?.title"></h2>
                    <h3 class="subtitle is-6 mt-2 has-text-primary">
                        <div class="icon-text">
                            <span class="icon">
                                <font-awesome-icon icon="fa-regular fa-clock" />
                            </span>
                            <span>{{ event?.datetime }}</span>
                        </div>
                        <div class="icon-text">
                            <span class="icon">
                                <font-awesome-icon icon="fa-solid fa-location-dot" />
                            </span>
                            <span>{{ event?.place }}</span>
                        </div>
                        <div v-if="event?.facebook" class="icon-text">
                            <span class="icon">
                                <font-awesome-icon icon="fa-brands fa-facebook-f" />
                            </span>
                            <span>
                                <a :href="event?.facebook" target="_blank" rel="noopener noreferrer">Facebook</a>
                            </span>
                        </div>
                    </h3>
                    <div class="content">
                        <p v-html="truncate(event.content)"></p>
                    </div>
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

    function truncate(text, length = 200) {
        if (!text) return ''
        return text.length > length ? text.slice(0, length).trimEnd() + ' ...' : text
    }
</script>

<style scoped>
    .list-item {
        /* display: flex; */
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .list-item:hover {
        transform: scale(1.03);
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
    }
</style>
