import type { Technology } from "~/types/stores/Tecnologies"

interface State {
    tecnologies: Technology[];
}

export const useTecnologiesStore = defineStore('tecnologies', {
    state: (): State => {
        return {
            tecnologies: [{
                name: 'Nuxt.js',
                description: '',
                tag: useTagsStore().getTagsByName(['Nuxt'])[0],
            },
            {
                name: 'Vue.js',
                description: '',
                tag: useTagsStore().getTagsByName(['Vue'])[0],
            }, {
                name: 'TypeScript',
                description: '',
                tag: useTagsStore().getTagsByName(['TypeScript'])[0],
            }, {
                name: 'Node.js',
                description: '',
                tag: useTagsStore().getTagsByName(['Node'])[0],
            }, {
                name: 'Golang',
                description: '',
                tag: useTagsStore().getTagsByName(['Golang'])[0],
            }, {
                name: 'Docker',
                description: '',
                tag: useTagsStore().getTagsByName(['Docker'])[0],
            }, {
                name: 'Linux',
                description: '',
                tag: {
                    icon: 'i-logos-linux-tux',
                    name: 'Linux',
                    color: 'orange',
                },
            }, {
                name: 'PostgreSQL',
                description: '',
                tag: useTagsStore().getTagsByName(['Postgre'])[0],
            }, {
                name: 'PHP',
                description: '',
                tag: useTagsStore().getTagsByName(['PHP'])[0],
            }]
        }
    },
    getters: {
        getTechologies: (state) => state.tecnologies
    }
})