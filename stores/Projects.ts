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
                tags: useTagsStore().getTagsByName(['Nuxt', 'Vue', 'TypeScript', 'Pinia', 'Tailwindcss']),
                githubLink: "https://github.com/DarlanPrado/portifolio",
                description: "Tratase do mesmo projéto em que você está, teste na pratica seu uso ;) .",
                title: "Portfólio",
            }, {
                id: "bash_app",
                images: ["/projects/bash_app/home.png"],
                tags: useTagsStore().getTagsByName(['Nuxt', 'Vue', 'TypeScript', 'Pinia', 'Tailwindcss', 'Golang', 'Docker', 'Postgre']),
                description: "Ferramenta para controlar o acesso de todos os clientes com os seus devidos serviços contratados, além de dar acesso ao relatório de uso, monitoramento operacional.",
                title: "Bash App",
            }, {
                id: "bash_webbot",
                tags: useTagsStore().getTagsByName(['Nuxt', 'Vue', 'TypeScript', 'Pinia', 'Tailwindcss', 'Golang', 'Docker', 'WebSocket', 'Mongo']),
                description: "Ferramenta de chat para atendimento operacional, incluindo anexagem de arquivos, comando para mensagens automáticas, controle de filas, controle de pausas e disponibilidade, operando em tempo real.",
                title: "Bash Webbot",
            }, {
                id: "bash_callphone",
                tags: useTagsStore().getTagsByName(['Nuxt', 'Vue', 'TypeScript', 'Pinia', 'Tailwindcss', 'Golang', 'Docker']),
                description: "Ferramenta de softphone(Software de chamadas telefonicas) para atendimento operacional, tendo controle de filas, controle de pausas e disponibilidade, tendo também um serviço de discador(Disparo automático de ligação) podendo ter integração a ferramentas exernas como CRMs",
                title: "Bash Callphone",
            }]
        }
    },
    getters: {
        getProjects: (state) => state.projects
    }
})