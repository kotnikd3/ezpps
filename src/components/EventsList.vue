<template>
    <div>
        <div 
            v-for="event in events" 
            :key="event.id" 
            class="list-itema mb-2"
            @click.stop="$emit('detail-member', member)"
        >
            <h6 class="title is-6" v-text="event?.title"></h6>
            <h6 class="subtitle is-6 my-1 is-italic has-text-primary">
                <div class="icon-text">
                    <span class="icon">
                        <font-awesome-icon icon="fa-regular fa-clock" />
                    </span>
                    <span>{{ event?.datetime }}</span>
                </div>
            </h6>

            <div class="content mb-2">
                <p v-html="truncate(event.content, maxLenght)"></p>
            </div>

            <RouterLink class="button is-small is-success" :to="{ name: 'event_details', params: { id: event.id } }">Preberi več</RouterLink>
            
            <hr class="my-2">
        </div>
    </div>
</template>

<script setup>
    defineProps({
        events: {
            type: Array,
            required: true
        },
        maxLenght: {
            type: Int16Array,
            required: false
        }
    })

    function truncate(text, maxLenghtLocal = 140) {
        if (!text) return ''
        return text.length > maxLenghtLocal ? text.slice(0, maxLenghtLocal).trimEnd() + ' ...' : text
    }
</script>

<style scoped>
    
</style>
