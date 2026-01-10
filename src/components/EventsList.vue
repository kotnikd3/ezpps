<template>
    <div class="columns is-mobile is-multiline">
        <div 
            v-for="event in events" 
            :key="event.id" 
            class="list-item column is-full-mobile is-half-tablet"
            @click.stop="$emit('detail-member', member)"
        >
            <div class="card" @click.stop="$emit('detail-event', event)">
                <div class="card-content">
                    <h6 class="title is-5" v-text="event?.title"></h6>
                    <h6 class="subtitle is-6 my-2 is-italic has-text-primary">
                        <div class="icon-text">
                            <span class="icon">
                                <font-awesome-icon icon="fa-regular fa-clock" />
                            </span>
                            <span>{{ event?.datetime }}</span>
                        </div>
                    </h6>

                    <div class="content">
                        <p v-html="truncate(event.content)"></p>
                    </div>
                    <button class="button is-small is-success">Preberi več</button>
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

    function truncate(text, length = 140) {
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
