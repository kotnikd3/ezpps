<script setup>
    import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_MAP_ID } from '@/services/constants';
    import { GoogleMap, AdvancedMarker, InfoWindow, MarkerCluster } from 'vue3-google-map'
    import { computed } from "vue";
    import { useRouter } from "vue-router"

    const router = useRouter()

    const props = defineProps({
        members: {
            type: Array,
            required: true
        }
    })

    /**
     * Flatten all member locations into one array:
     * [
     *   { member, loc },
     *   { member, loc },
     *   ...
     * ]
     */
    const flatLocations = computed(() => {
        return props.members.flatMap((member) =>
            (member.locations ?? [])
            .filter((l) => l.latitude && l.longitude && l.show_on_map)
            .map((loc) => ({ member, loc }))
        );
    });

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
        <MarkerCluster>
            <AdvancedMarker
                v-for="(item, i) in flatLocations"
                :key="i"
                :options="{ position: { lat: item.loc.latitude, lng: item.loc.longitude } }"
                :pin-options="{ scale: 1, glyphColor: '#ffffff', borderColor: '#ffffff', background: '#15489f' }"
            >
                <InfoWindow>
                    <div id="content" style="max-width: 200px;">
                        <a class="has-text-primary is-size-6 has-text-weight-bold" @click="memberDetail(item.member)">
                            {{ item.member.name }}
                        </a>
                        <p>
                            {{ item.member.title }}
                        </p>
                        <p v-if="item.loc.approx" class="has-text-grey pt-2 has-text-weight-light is-italic">
                            *Zaradi varovanja zasebnosti je prikazana zgolj približna lokacija.
                        </p>
                    </div>
                </InfoWindow>
            </AdvancedMarker>
        </MarkerCluster>
    </GoogleMap>
</template>

<style scoped lang="scss">
    @use '@/assets/variables.scss' as *;

    // Use the Vue "deep" selector to penetrate child component DOM
    ::v-deep gmp-advanced-marker svg {
        fill: $color-blue-main !important;
    }
</style>
