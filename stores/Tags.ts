import type { Tag } from "~/types/stores/Tags";

interface State {
    tags: Tag[];
}

export const useTagsStore = defineStore('tags', {
    state: (): State => {
        return {
            tags: [{
                icon: 'i-logos-typescript-icon',
                name: 'TypeScript',
                color: 'blue',
            }, {
                name: 'Vue',
                icon: 'i-logos-vue',
                color: 'lime',
            }, {
                name: 'Nuxt',
                icon: 'i-logos-nuxt-icon',
                color: 'green',
            }, {
                name: 'Golang',
                icon: 'i-logos-go',
                color: 'sky',
            }, {
                name: 'PHP',
                icon: 'i-logos-php',
                color: 'purple',
            }, {
                name: 'Node',
                icon: 'i-logos-nodejs-icon',
                color: 'lime',
            }, {
                name: 'Pinia',
                icon: 'i-logos-pinia',
                color: 'yellow',
            }, {
                name: 'Tailwindcss',
                icon: 'i-logos-tailwindcss-icon',
                color: 'sky',
            }, {
                name: 'Docker',
                icon: 'i-logos-docker-icon',
                color: 'cyan',
            }, {
                name: 'Postgre',
                icon: 'i-logos-postgresql',
                color: 'orange',
            }],
        };
    },
    getters: {
        getTags: (state) => state.tags,
        getTagsByName: (state) => (tags: Tag["name"][]) => state.tags.filter(tag => tags.includes(tag.name))
    }
});