<template>
    <div>
        <div class="list has-hoverable-list-items has-visible-pointer-controls">
            <a 
                v-for="event in events" 
                :key="event.title" 
                class="list-item"
                :href="event.redirect_to"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <div class="list-item-image">
                    <figure class="image" style="max-width: 200px;">
                        <img v-if="event?.image_name" :src="`/images/events/${event.image_name}`" :alt="event?.title">
                        <img v-else src="@/assets/images/home_for_members.jpg" :alt="event?.title"/>
                    </figure>
                </div>

                <div class="list-item-content">
                    <h1 class="title">{{ truncate(event?.title) }}</h1>

                    <div class="subtitle">
                        <div class="tags has-addons">
                            <span class="tag is-primary is-medium" v-text="event?.datetime"></span>
                        </div>
                    </div>
                    

                    <div class="list-item-description">{{ truncate(event.content) }}</div>
                </div>
            </a>
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
        display: flex;
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .list-item:hover {
        transform: scale(1.03);
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
    }
</style>
