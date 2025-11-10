<template>
    <div class="columns is-multiline">
        <div 
            v-for="member in members" 
            :key="member.name" 
            class="list-item column is-one-quarter-tablet is-one-fifth-widescreen"
            @click.stop="$emit('detail-member', member)"
        >
            <div class="card is-size-6">
                <div class="card-image">
                    <figure class="image">
                        <img v-if="member.image_name" :src="`/images/members/${member.image_name}`" :alt="member.name" class="member-photo"/>
                        <img v-else src="@/assets/images/member-placeholder.svg" :alt="member.name" class="member-photo"/>
                    </figure>
                </div>
                <div class="card-content">
                    <!-- Name and Title -->
                    <h5 class="title is-5 has-text-primary" v-text="member.name"></h5>
                    <h6 class="subtitle is-6" v-text="member.title"></h6>

                    <!-- Location -->
                    <div v-if="member.locations && member.locations.length > 0" class="icon-text">
                        <span class="icon">
                            <font-awesome-icon icon="fa-solid fa-location-dot" />
                        </span>
                        <span>{{ formatLocations(member?.locations) }}</span>
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
    .member-photo {
        max-width: 280px;
    }
    
    div.icon-text {
        margin-top: 5px;
        display: flex;
        align-items: flex-start;
        word-break: break-all;
        overflow-wrap: break-word;
    }

    div.icon-text span:last-child {
        flex: 1;
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
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
    }
</style>