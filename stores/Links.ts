import type { Links } from "~/types/stores/Links"

interface State {
    links: Links
}

export const useLinksStore = defineStore('links', {
    state: (): State => {
        return {
            links: {
                'linkedin': 'https://www.linkedin.com/in/darlan-prado/',
                'github': 'https://github.com/DarlanPrado',
                'email': 'mailto:darlanprado.contact@gmail.com',
            }
        }
    },
    getters: {
        getLinks: (state) => state.links
    }
})