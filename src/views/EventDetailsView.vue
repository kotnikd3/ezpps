<template>
    <section class="hero is-medium">
        <div class="hero-body has-text-centered">
            <p class="has-text-primary has-text-weight-bold">{{ event?.title }}</p>
            <br><br><br></br>
            {{ event?.content }}
        </div>
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
