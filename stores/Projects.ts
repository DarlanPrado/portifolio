import type { Project } from "~/types/stores/Projects";

interface State {
    projects: Project[];
}

export const useProjectsStore = defineStore('projects', {
    state: (): State => {
        return {
            projects: [{
                id: "portifolio",
                images: ["/projects/portifolio/home.png"],
                tags: useTagsStore().getTagsByName(['Nuxt', 'Vue', 'TypeScript']),
                githubLink: "https://github.com/DarlanPrado/portifolio",
                description: "Tratase do mesmo projéto em que você está, teste na pratica seu uso ;)",
                title: "Portfólio",
            }]
        }
    },
    getters: {
        getProjects: (state) => state.projects
    }
})