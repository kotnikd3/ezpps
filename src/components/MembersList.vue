<template>
    <div class="columns is-multiline">
        <div 
            v-for="t in members" 
            :key="t.name" 
            class="list-item column is-full-mobile is-half-tablet is-one-quarter-widescreen"
            @click.stop="$emit('detail-member', t)"
        >
            <div class="card">
                <div class="card-image">
                    <figure class="image is-1by1">
                        <img v-if="t.image_name" :src="`/static/members/${t.image_name}`" :alt="t.name" />
                        <img v-else src="/static/member-placeholder.svg" :alt="t.name" />
                    </figure>
                </div>
                <div class="card-content">
                    <!-- Name and Title -->
                    <h4 class="title is-4" v-text="t.name"></h4>
                    <h5 class="subtitle is-5" v-text="t.title"></h5>

                    <!-- Location -->
                    <div v-if="t.location.city" class="icon-text">
                        <span class="icon">
                            <font-awesome-icon icon="fa-solid fa-location-dot" />
                        </span>
                        <span v-text="t.location.city"></span>
                    </div>

                    <!-- Email -->
                    <a v-if="t.email" :href="`mailto:${t.email}`" class="icon-text">
                        <span class="icon">
                            <font-awesome-icon icon="fa-regular fa-envelope" />
                        </span>
                        <span v-text="t.email"></span>
                    </a>

                    <!-- Phone -->
                    <a v-if="t.phone" :href="`tel:${t.phone}`" class="icon-text">
                        <span class="icon">
                            <font-awesome-icon icon="fa-solid fa-phone" />
                        </span>
                        <span v-text="t.phone"></span>
                    </a>

                    <!-- Website -->
                    <a v-if="t.website" :href="t.website" class="icon-text" target="_blank" rel="noopener noreferrer">
                        <span class="icon">
                            <font-awesome-icon icon="fa-solid fa-globe" />
                        </span>
                        <span v-text="t.website"></span>
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
        line-height: 1.5;
    }

    a.icon-text .icon {
        flex-shrink: 0;
        /* margin-right: 0.5rem; */
        margin-top: 0.125rem; /* Aligns icon with first line of text */
    }

    a.icon-text span:last-child {
        flex: 1;
    }
</style>