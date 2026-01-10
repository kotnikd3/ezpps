<template>
    <section class="section">
        <div class="container">
            <div class="columns is-mobile is-vcentered is-centered is-multiline my-6">
                <!-- LEFT: Image -->
                <div class="column has-text-centered is-narrow">
                    <figure class="image">
                        <img
                        v-if="member?.image_name"
                        :src="`/images/members/${member.image_name}`"
                        :alt="member.name"
                        class="member-photo"
                        />
                        <img
                        v-else
                        src="@/assets/images/member-placeholder.svg"
                        :alt="member?.name"
                        class="member-photo"
                        />
                    </figure>
                </div>
                <!-- RIGHT: Info -->
                <div class="column is-half-tablet is-full-mobile">
                    <h2 class="title is-3 has-text-primary">{{ member?.name }}</h2>
                    <h4 class="subtitle is-4">{{ member?.title }}</h4>

                    <div class="contact-list">
                        <!-- Location -->
                        <div v-if="member?.locations?.length" class="icon-text">
                            <span class="icon">
                                <font-awesome-icon icon="fa-solid fa-location-dot" />
                            </span>
                            <span>{{ formatLocations(member.locations) }}</span>
                        </div>

                        <div v-if="member?.works_online" class="icon-text">
                            <span class="icon">
                                <font-awesome-icon icon="fa-solid fa-location-dot" />
                            </span>
                            <span>Online</span>
                        </div>

                        <!-- Email -->
                        <a
                        v-if="member?.email"
                        :href="`mailto:${member.email}`"
                        class="icon-text"
                        >
                            <span class="icon">
                                <font-awesome-icon icon="fa-regular fa-envelope" />
                            </span>
                            <span>{{ member.email }}</span>
                        </a>

                        <!-- Phone -->
                        <a
                        v-if="member?.phone"
                        :href="`tel:${member.phone}`"
                        class="icon-text"
                        >
                            <span class="icon">
                                <font-awesome-icon icon="fa-solid fa-phone" />
                            </span>
                            <span>{{ member.phone }}</span>
                        </a>

                        <!-- Website -->
                        <a
                        v-if="member?.website"
                        :href="member.website"
                        class="icon-text"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <span class="icon">
                                <font-awesome-icon icon="fa-solid fa-globe" />
                            </span>
                            <span>{{ member.website }}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref, onMounted } from "vue";
    import { getById } from "@/services/membersService.js";

    const props = defineProps({
        id: {
            type: String,
            required: true,
        },
    });

    const member = ref(null);

    onMounted(async () => {
        member.value = await getById(props.id);
    });

    function formatLocations(locations) {
        if (!Array.isArray(locations) || locations.length === 0) return "";
        return locations.map((loc) => loc.city).join(", ");
    }
</script>

<style scoped lang="scss">
    @use '@/assets/variables.scss' as *;

    .member-photo {
        max-width: 280px;
    }

    .contact-list {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    a.icon-text:hover {
        color: $color-primary;
    }
    
    /* Wrap text */
    a.icon-text {
        margin-top: 5px;
        display: flex;
        align-items: flex-start;
        word-break: break-all;
        overflow-wrap: break-word;
    }

    a.icon-text span:last-child {
        flex: 1;
    }
</style>
