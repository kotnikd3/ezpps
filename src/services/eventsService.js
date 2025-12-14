import eventsData from '@/assets/data/events.json'


let cache = null
let byIdIndex = null


async function fetchData() {
    if (cache) return cache

    // Clone so we don’t mutate the imported module
    cache = [...eventsData]

    // Build a lookup map for O(1) average search
    byIdIndex = new Map(cache.map(t => [t.id, t]))

    return cache
}

export async function getAllEvents() {
    return await fetchData()
}

export async function getById(id) {
    await fetchData()
    return byIdIndex.get(id) || null
}
