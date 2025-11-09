<template>
    <section class="hero is-medium">
        <div class="hero-body has-text-centered">
            <!-- Profile Image -->
            <figure class="image is-inline-block mb-4">
                <img v-if="member?.image_name" :src="`/images/members/${member?.image_name}`" :alt="member?.name"/>
                <img v-else src="@/assets/images/member-placeholder.svg" :alt="member?.name"/>
            </figure>
    
            <!-- Name and Title -->
            <h2 class="title is-2">{{ member?.name }}</h2>
            <h4 class="subtitle is-4">{{ member?.title }}</h4>

            <div class="contact-list is-size-4 mt-6">
                
                <!-- Location -->
                <div v-if="member?.locations && member.locations.length > 0" class="icon-text">
                    <span class="icon">
                        <font-awesome-icon icon="fa-solid fa-location-dot" />
                    </span>
                    <span>{{ formatLocations(member?.locations) }}</span>
                </div>

                <!-- Email -->
                <a v-if="member?.email" :href="`mailto:${member?.email}`" class="icon-text">
                    <span class="icon">
                        <font-awesome-icon icon="fa-regular fa-envelope" />
                    </span>
                    <span v-text="member?.email"></span>
                </a>

                <!-- Phone -->
                <a v-if="member?.phone" :href="`tel:${member?.phone}`" class="icon-text">
                    <span class="icon">
                        <font-awesome-icon icon="fa-solid fa-phone" />
                    </span>
                    <span v-text="member?.phone"></span>
                </a>

                <!-- Website -->
                <a v-if="member?.website" :href="member?.website" class="icon-text" target="_blank" rel="noopener noreferrer">
                    <span class="icon">
                        <font-awesome-icon icon="fa-solid fa-globe" />
                    </span>
                    <span v-text="member?.website"></span>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref, onMounted } from "vue"
    import { getById } from "@/services/membersService.js"

    const props = defineProps({
        id: {
            type: String,
            required: true
        }
    })

    function formatLocations(locations) {
        if (!Array.isArray(locations) || locations.length === 0) return "";
        
        return locations.map(loc => loc.city).join(", ");
    }


    const member = ref(null)

    onMounted(async () => {
        member.value = await getById(props.id)
    })
</script>


<style scoped>
    .image img {
        max-width: 250px;
        border-radius: 1.5rem;
    }

    .contact-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem; /* space between rows */
    }

    /* Wrap text */
    a.icon-text {
        margin-top: 5px;
        display: flex;
        align-items: flex-start;
        word-break: break-all;
        overflow-wrap: break-word;
        line-height: 1.0;
    }
    a.icon-text .icon {
        flex-shrink: 0;
        margin-top: 0.125rem; /* Aligns icon with first line of text */
    }

    a.icon-text span:last-child {
        flex: 1;
    }
</style>
