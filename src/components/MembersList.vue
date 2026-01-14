<template>
    <div class="columns is-mobile is-multiline is-variable is-1">
        <div 
            v-for="member in members" 
            :key="member.name" 
            class="list-item column is-half-mobile is-one-quarter-tablet is-2-widescreen"
            @click.stop="$emit('detail-member', member)"
        >
            <div class="card">
                <div class="card-image">
                    <figure class="image">
                        <img v-if="member.image_name" :src="`/images/members/${member.image_name}`" :alt="member.name" class="member-photo"/>
                        <img v-else src="@/assets/images/member-placeholder.svg" :alt="member.name" class="member-photo"/>
                    </figure>
                </div>
                <div class="card-content">
                    <!-- Name and Title -->
                    <h6 class="title is-6 has-text-primary" v-text="member.name"></h6>
                    <h6 class="subtitle is-7" v-text="member.title"></h6>

                    <div class="contact-list is-hidden-mobile">
                        <!-- Location -->
                        <div v-if="member.locations && member.locations.length > 0" class="icon-text">
                            <span class="icon">
                                <font-awesome-icon icon="fa-solid fa-location-dot" />
                            </span>
                            <span>{{ formatLocations(member?.locations) }}</span>
                        </div>

                        <div v-if="member?.works_online" class="icon-text">
                            <span class="icon">
                                <font-awesome-icon icon="fa-solid fa-location-dot" />
                            </span>
                            <span>Online</span>
                        </div>

                        <!-- Email -->
                        <div v-if="member.email" class="icon-text">
                            <span class="icon">
                                <font-awesome-icon icon="fa-regular fa-envelope" />
                            </span>
                            <span v-text="member.email"></span>
                        </div>

                        <!-- Phone -->
                        <div v-if="member.phone" class="icon-text">
                            <span class="icon">
                                <font-awesome-icon icon="fa-solid fa-phone" />
                            </span>
                            <span v-text="member.phone"></span>
                        </div>

                        <!-- Website -->
                        <div v-if="member.website" class="icon-text">
                            <span class="icon">
                                <font-awesome-icon icon="fa-solid fa-globe" />
                            </span>
                            <span v-text="member.website"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        members: {
            type: Array,
            required: true
        }
    })

    function formatLocations(locations) {
        if (!Array.isArray(locations) || locations.length === 0) return "";
        
        return locations.map(loc => loc.city).join(", ");
    }
</script>

<style scoped>
    .card-content {
        padding: 0.4rem;
    }


    .member-photo {
        max-width: 280px;
        max-height: 260px;
        object-fit: cover;
    }
    
    .icon-text {
        display: flex;
        align-items: flex-start;
        word-break: break-all;
        overflow-wrap: break-word;
        hyphens: auto;
        /* align-items: center; */
    }

    .icon-text span:last-child {
        flex: 1;
        overflow-wrap: anywhere;
        word-break: break-word;
    }

    .contact-list {
        display: flex;
        flex-direction: column;
        font-size: 12px;
    }
    

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
        box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.15);
    }
</style>