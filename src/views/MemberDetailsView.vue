<template>
  <!-- Hero Section -->
  <section class="hero is-medium">
    <div class="hero-body">
      <div class="has-text-centered">
        <!-- Profile Image -->
        <figure class="image is-inline-block mb-4">
            <img v-if="member?.image_name" :src="`/static/members/${member?.image_name}`" :alt="member?.name" class="is-rounded"/>
            <img v-else src="/static/members/member_placeholder.svg" :alt="member?.name" class="is-rounded"/>
        </figure>

        <!-- Name and Title -->
        <h2 class="title is-2">{{ member?.name }}</h2>
        <h4 class="subtitle is-4">{{ member?.title }}</h4>

        <!-- Location -->
        <div class="is-size-4">
            <div>
                <div v-if="member?.location?.city" class="icon-text">
                    <span class="icon">
                        <font-awesome-icon icon="fa-solid fa-location-dot" />
                    </span>
                    <span v-text="member?.location?.city"></span>
                </div>
            </div>

            <!-- Email -->
            <div>
                <a v-if="member?.email" :href="`mailto:${member?.email}`" class="icon-text">
                    <span class="icon">
                        <font-awesome-icon icon="fa-regular fa-envelope" />
                    </span>
                    <span v-text="member?.email"></span>
                </a>
            </div>

            <!-- Phone -->
            <div>
                <a v-if="member?.phone" :href="`tel:${member?.phone}`" class="icon-text">
                    <span class="icon">
                        <font-awesome-icon icon="fa-solid fa-phone" />
                    </span>
                    <span v-text="member?.phone"></span>
                </a>
            </div>

            <!-- Website -->
            <div>
                <a v-if="member?.website" :href="member?.website" class="icon-text" target="_blank" rel="noopener noreferrer">
                    <span class="icon">
                        <font-awesome-icon icon="fa-solid fa-globe" />
                    </span>
                    <span v-text="member?.website"></span>
                </a>
            </div>
        </div>
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

    const member = ref(null)

    onMounted(async () => {
        member.value = await getById(props.id)
    })
</script>


<style scoped>
    .image img {
        max-width: 100%;     /* scale to column width */
        max-height: 300px;   /* make it bigger than 128px */
        object-fit: cover;   /* crop nicely if needed */
    }

    .icon-text {
        display: inline-flex;
        align-items: center;
        margin-top: 15px;
        word-break: break-word;
    }
</style>
