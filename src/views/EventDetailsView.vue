<template>
    <section class="section">
        <div class="container">
            <h2 class="title is-2 is-spaced" v-text="event?.title"></h2>
            <h3 class="subtitle has-text-primary">
                <div class="icon-text">
                    <span class="icon">
                        <font-awesome-icon icon="fa-regular fa-clock" />
                    </span>
                    <span>{{ event?.datetime }}</span>
                </div>
                <div class="icon-text my-2">
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
        </div>
        <div class="container content mt-6">
            <p v-html="event?.content"></p>
        </div>
    </section>

    <section class="section">
        
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { getById } from "@/services/eventsService.js"

const props = defineProps({
    id: {
        type: String,
        required: true
    }
})

const event = ref(null)

onMounted(async () => {
    event.value = await getById(props.id)
})
</script>

<style scoped>
/* Optional: slightly improve readability */
.content {
  line-height: 1.8;
}
</style>
