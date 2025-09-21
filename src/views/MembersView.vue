<template>
    <section class="section">
        <h2 class="title is-2">Člani društva</h2>
    </section>

    <section class="section">
        <MembersList />
    </section>    
</template>

<script>
    import MembersList from "@/components/MembersList.vue"

    export default {
        components: {
            MembersList,
        },
    }

</script>