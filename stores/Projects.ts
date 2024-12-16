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
            },{
                id: "resume_pro",
                images: ["/projects/resume_pro/home.png"],
                tags: useTagsStore().getTagsByName(['Nuxt', 'Vue', 'TypeScript', 'Pinia', 'Tailwindcss']),
                description: "Ferramenta para criação de curriculos personalizados.",
                link: 'https://resume-pro-curriculum.vercel.app/',
                githubLink: 'https://github.com/DarlanPrado/resume_pro',
                title: "ResumePro",
            }, {
                id: "bash_app",
                images: ["/projects/bash_app/home.png"],
                tags: useTagsStore().getTagsByName(['Nuxt', 'Vue', 'TypeScript', 'Pinia', 'Tailwindcss', 'Golang', 'Docker', 'Postgre']),
                description: "Ferramenta para controlar o acesso de todos os clientes com os seus devidos serviços contratados, além de dar acesso ao relatório de uso, monitoramento operacional.",
                title: "App",
            }, {
                id: "bash_webbot",
                tags: useTagsStore().getTagsByName(['Nuxt', 'Vue', 'TypeScript', 'Pinia', 'Tailwindcss', 'Golang', 'Docker', 'WebSocket', 'Mongo']),
                description: "Ferramenta de chat para atendimento operacional, incluindo anexagem de arquivos, comando para mensagens automáticas, controle de filas, controle de pausas e disponibilidade, operando em tempo real.",
                title: "Webbot",
            }, {
                id: "bash_callphone",
                tags: useTagsStore().getTagsByName(['Nuxt', 'Vue', 'TypeScript', 'Pinia', 'Tailwindcss', 'Golang', 'Docker']),
                description: "Ferramenta de softphone(Software de chamadas telefonicas) para atendimento operacional, tendo controle de filas, controle de pausas e disponibilidade, tendo também um serviço de discador(Disparo automático de ligação) podendo ter integração a ferramentas exernas como CRMs",
                title: "Callphone",
            },{
                id: "sethtotal",
                images: ["/projects/sethtotal/home.png"],
                link: 'https://sethtotal.com.br/',
                tags: useTagsStore().getTagsByName(['Vue','Typescript', 'Pinia','Vuetify','PHP','Laravel','Docker','Postgre']),
                description: 'Ferramenta de gestão financeira para empresas com gerador de boleto, pix, higienização de clientes, analize de crédito negativação Serasa e automação de cobrança',
                title: "Seth",
            }]
        }
    },
    getters: {
        getProjects: (state) => state.projects
    }
})