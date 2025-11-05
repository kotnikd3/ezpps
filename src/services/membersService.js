import membersData from '@/assets/data/members_3.json'


let cache = null
let byIdIndex = null


async function fetchData() {
    if (cache) return cache

    // Clone so we don’t mutate the imported module
    cache = [...membersData]

    // Sort by surname (last word in the name)
    cache.sort((a, b) => {
        const lastNameA = a.name.trim().split(" ").at(-1).toLowerCase()
        const lastNameB = b.name.trim().split(" ").at(-1).toLowerCase()
        return lastNameA.localeCompare(lastNameB)
    })

    // Build a lookup map for O(1) average search
    byIdIndex = new Map(cache.map(t => [t.id, t]))

    return cache
}

export async function getAll() {
    return await fetchData()
}

export async function getById(id) {
    await fetchData()
    return byIdIndex.get(id) || null
}
