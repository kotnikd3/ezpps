<script setup>
    import { GoogleMap, AdvancedMarker } from 'vue3-google-map'
    import { h } from "vue";

    const markerOptions = { position: { lat: 46.05545708518671, lng: 14.51710608061008 } }
    const pinOptions = { scale: 1, glyphColor: "#7a7a7a", borderColor: "#7a7a7a", background: "#15489f"}
    
    // Create a custom HTML element for the marker
    const markerContent = h(
        "div",
        {
            style: `
            background-color: #4CAF50;
            color: white;
            padding: 6px 10px;
            border-radius: 8px;
            font-weight: bold;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
            `,
        },
        "Slovenia 🇸🇮"
    );

</script>

<template>
    <!-- :center=Kisovec -->
    <GoogleMap
        api-key="AIzaSyBa-1KEJ1_4f01Xn91Lm3vhMhVKA4tqivU"
        map-id="4a20de915841a1928d90aa13"
        style="width: 100%; height: 700px"
        :center="{ lat: 46.1397336676993, lng: 14.962530069374042 }"
        :zoom="8.8"
        :street-view-control="false"
        :map-type-control="false"
    >
        <AdvancedMarker :options="markerOptions" :pin-options="pinOptions">
        </AdvancedMarker>
    </GoogleMap>
</template>