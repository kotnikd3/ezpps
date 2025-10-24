<template>
    <section class="hero is-medium">
        <div class="hero-body has-text-centered">
            {{ event?.title }}
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
