<template>
    <div>
        <article 
            class="media list-item py-5"
            v-for="event in events" 
            :key="event.id"
            @click.stop="$emit('detail-event', event)"
        >
            <figure class="media-left">
                <p class="image is-64x64">
                    <img src="@/assets/images/undraw_conversation_15p8.svg" />
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                    <p class="has-text-primary has-text-weight-bold">{{ truncate(event?.title) }}</p>
                    <p v-html="truncate(event.content)"></p>
                </div>
                <div class="has-text-primary">
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
                </div>
            </div>
            <div class="media-right">
                <button class="delete"></button>
            </div>
        </article>
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
        display: flex;
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .list-item:hover {
        transform: scale(1.03);
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
    }
</style>
