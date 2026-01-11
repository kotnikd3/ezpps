<template>
    <section class="section">
        <div class="container">
            <h4 class="title is-4">Člani društva</h4>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <MembersList :members="members" @detail-member="memberDetail"/>
        </div>
    </section>
</template>

<script setup>
    import { ref, onMounted } from "vue"
    import { useRouter } from "vue-router"

    import MembersList from "@/components/MembersList.vue"
    import { getAll } from "@/services/membersService.js"

    const members = ref([])
    const router = useRouter()

    onMounted(async () => {
        members.value = await getAll()
    })

    function memberDetail(member) {
        router.push({ name: 'member_details', params: { id: member.id } });
    }
</script>
