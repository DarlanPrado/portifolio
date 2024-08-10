import type { Tag } from "~/types/stores/Tags";

interface State {
    tags: Tag[];
}

export const useTagsStore = defineStore('tags', {
    state: (): State => {
        return {
            tags: [{
                id: 'tag1',
                icon: 'i-logos-typescript-icon',
                name: 'TypeScript',
                color: 'blue',
            }, {
                id: 'tag2',
                name: 'Vue',
                icon: 'i-logos-vue',
                color: 'lime',
            }, {
                id: 'tag3',
                name: 'Nuxt',
                icon: 'i-logos-nuxt-icon',
                color: 'green',
            }, {
                id: 'tag4',
                name: 'Golang',
                icon: 'i-logos-go',
                color: 'sky',
            }, {
                id: 'tag5',
                name: 'PHP',
                icon: 'i-logos-php',
                color: 'purple',
            }, {
                id: 'tag6',
                name: 'Node',
                icon: 'i-logos-nodejs-icon',
                color: 'lime',
            }, {
                id: 'tag7',
                name: 'Pinia',
                icon: 'i-logos-pinia',
                color: 'yellow',
            }, {
                id: 'tag8',
                name: 'Tailwindcss',
                icon: 'i-logos-tailwindcss-icon',
                color: 'sky',
            }],
        };
    },
    getters: {
        getTags: (state) => state.tags,
        getTagsByName: (state) => (tags: Tag["name"][]) => state.tags.filter(tag => tags.includes(tag.name))
    }
});