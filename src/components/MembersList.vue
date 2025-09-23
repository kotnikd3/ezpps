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
                        <img v-if="member.image_name" :src="`/static/members/${member.image_name}`" :alt="member.name" />
                        <img v-else src="/static/member-placeholder.svg" :alt="member.name" />
                    </figure>
                </div>
                <div class="card-content">
                    <!-- Name and Title -->
                    <h5 class="title is-5" v-text="member.name"></h5>
                    <h6 class="subtitle is-6" v-text="member.title"></h6>

                    <!-- Location -->
                    <div v-if="member.location.city" class="icon-text">
                        <span class="icon">
                            <font-awesome-icon icon="fa-solid fa-location-dot" />
                        </span>
                        <span v-text="member.location.city"></span>
                    </div>

                    <!-- Email -->
                    <a v-if="member.email" :href="`mailto:${member.email}`" class="icon-text">
                        <span class="icon">
                            <font-awesome-icon icon="fa-regular fa-envelope" />
                        </span>
                        <span v-text="member.email"></span>
                    </a>

                    <!-- Phone -->
                    <a v-if="member.phone" :href="`tel:${member.phone}`" class="icon-text">
                        <span class="icon">
                            <font-awesome-icon icon="fa-solid fa-phone" />
                        </span>
                        <span v-text="member.phone"></span>
                    </a>

                    <!-- Website -->
                    <a v-if="member.website" :href="member.website" class="icon-text" target="_blank" rel="noopener noreferrer">
                        <span class="icon">
                            <font-awesome-icon icon="fa-solid fa-globe" />
                        </span>
                        <span v-text="member.website"></span>
                    </a>
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
</script>

<style scoped>
    .list-item {
        display: flex;
    }

    .list-item .card {
        flex: 1; /* makes card fill the column height */
        display: flex;
        flex-direction: column;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
    }

    .list-item:hover .card {
        transform: scale(1.03);
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
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