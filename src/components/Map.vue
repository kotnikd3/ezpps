<script setup>
    import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_MAP_ID } from '@/services/constants';
    import { GoogleMap, AdvancedMarker, InfoWindow } from 'vue3-google-map'
    import { computed } from "vue";
    import { useRouter } from "vue-router"

    const router = useRouter()

    const props = defineProps({
        members: {
            type: Array,
            required: true
        }
    })

    // Filter members that have at least one valid location with lat/lng
    const membersWithLocations = computed(() =>
        props.members.filter(member =>
            member.locations?.some(
                loc => loc.latitude && loc.longitude && loc.show_on_map
            )
        )
    )

    function memberDetail(member) {
        router.push({ name: 'member_details', params: { id: member.id } });
    }

</script>

<template>
    <GoogleMap
        :api-key="`${GOOGLE_MAPS_API_KEY}`"
        :map-id="`${GOOGLE_MAPS_MAP_ID}`"
        style="width: 100%; height: 700px"
        :center="{ lat: 46.1397336676993, lng: 14.962530069374042 }"
        :zoom="8.8"
        :street-view-control="false"
        :map-type-control="false"
        :clickable-icons="false"
    >
        <div v-for="member in membersWithLocations" :key="member.id">
            <AdvancedMarker
                v-for="(loc, i) in member.locations"
                :key="`${member.id}-${i}`"
                :options="{ position: { lat: loc.latitude, lng: loc.longitude } }"
                :pin-options="{ scale: 1, glyphColor: '#7a7a7a', borderColor: '#7a7a7a', background: '#15489f'}"
            >
                <InfoWindow>
                    <div id="content" style="max-width: 200px;">
                        <a class="has-text-primary is-size-6 has-text-weight-bold" @click="memberDetail(member)">
                            {{ member.name }}
                        </a>
                        <p>
                            {{ member.title }}
                        </p>
                        <p v-if="loc.approx" class="has-text-grey pt-2 has-text-weight-light is-italic">
                            *Zaradi varovanja zasebnosti je prikazana zgolj približna lokacija.
                        </p>
                    </div>
                </InfoWindow>
            </AdvancedMarker>
        </div>
    </GoogleMap>
</template>
