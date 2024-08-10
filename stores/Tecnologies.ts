import type { Technology } from "~/types/stores/Tecnologies"

interface State {
    tecnologies: Technology[];
}

export const useTecnologiesStore = defineStore('tecnologies', {
    state: (): State => {
        return {
            tecnologies: [{
                name: 'Nuxt.js',
                description: 'vue',
                tag: useTagsStore().getTagsByName(['Nuxt'])[0],
            },
            {
                name: 'Vue.js',
                description: 'vue',
                tag: useTagsStore().getTagsByName(['Vue'])[0],
            }, {
                name: 'TypeScript',
                description: 'vue',
                tag: useTagsStore().getTagsByName(['TypeScript'])[0],
            }, {
                name: 'Golang',
                description: 'vue',
                tag: useTagsStore().getTagsByName(['Golang'])[0],
            }, {
                name: 'PHP',
                description: 'vue',
                tag: useTagsStore().getTagsByName(['PHP'])[0],
            }]
        }
    },
    getters: {
        getTechologies: (state) => state.tecnologies
    }
})