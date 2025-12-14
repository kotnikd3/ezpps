<template>
    <div class="columns is-mobile is-multiline">
        <div 
            v-for="event in events" 
            :key="event.id" 
            class="list-item column is-full-mobile is-one-third-tablet"
            @click.stop="$emit('detail-member', member)"
        >
            <div class="card" @click.stop="$emit('detail-event', event)">
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-6" v-text="event?.title"></p>
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
                            </h3>
                        </div>
                    </div>

                    <div class="content">
                        <p v-html="truncate(event.content)"></p>
                    </div>
                </div>
            </div>
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
    }

    .list-item .card {
        flex: 1;
        display: flex;
        flex-direction: column;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
    }

    .list-item:hover .card {
        transform: scale(1.03);
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
    }
</style>
