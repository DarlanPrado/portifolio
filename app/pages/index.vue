<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})

const features = ref([
  {
    title: 'Frontend',
    description: t('frontend_description'),
    icon: 'i-simple-icons-react'
  },
  {
    title: 'Backend',
    description: t('backend_description'),
    icon: 'i-simple-icons-nodedotjs'
  },
  {
    title: t('devops_title'),
    description: t('devops_description'),
    icon: 'i-simple-icons-react'
  }
])
</script>

<template>
  <div>
    <UContainer>
      <UPageHero
        title="Darlan Prado"
        :description="t('title_page')"
      />
      <GithubData />
      <UPageSection
        :title="t('title_section')"
        :features
      >
        <div
          class="grid grid-cols-2 gap-4"
        >
          <TechCardNuxt />
          <TechCardVue />
          <TechCardNode />
          <TechCardLaravel />
          <TechCardTypeScript />
          <TechCardPhp />
          <TechCardAws />
          <TechCardDocker />
          <TechCardGrafana />
          <TechCardJenkins />
        </div>
      </UPageSection>
      <UPageSection>
        <UPageCTA
          :title="t('project_title')"
          :description="t('project_description')"
          orientation="horizontal"
          :links="[{
            label: 'Ver Projetos',
            to: '/projetos',
            trailingIcon: 'i-lucide-arrow-right',
            color: 'neutral'
          }]"
        >
          <div class="grid grid-cols-2">
            <img
              class="rounded-tl-2xl"
              src="/projects/brasilcap/home.png"
              alt="Brasilcap Project Home"
            >
            <img
              class="rounded-tr-2xl"
              src="/projects/rodobens/home.png"
              alt="Rodobens Project Home"
            >
            <img
              class="rounded-bl-2xl"
              src="/projects/bash_app/home.png"
              alt="Bash App Project Home"
            >
            <img
              class="rounded-br-2xl"
              src="/projects/seth_total/home.png"
              alt="Seth Total Project Home"
            >
          </div>
        </UPageCTA>
      </UPageSection>
      <UPageSection>
        <UPageCTA
          :title="t('interested_title')"
          :description="t('interested_description')"
          variant="subtle"
          :links="[{
            label: t('interested_contact'),
            to: 'mailto:darlanprado@gmail.com',
            trailingIcon: 'i-lucide-arrow-right',
            color: 'neutral'
          }]"
        />
      </UPageSection>
    </UContainer>
  </div>
</template>

<i18n lang="json">
{
  "us": {
    "title_page": "Fullstack Developer",
    "title_section": "Main Stacks",
    "frontend_description": "Experience in developing modern and responsive interfaces, focusing on performance, accessibility, and good user experience.",
    "backend_description": "Creation and integration of APIs, data management, and business logic with a focus on security, scalability, and best architectural practices.",
    "devops_title": "DevOps / Tools",
    "devops_description": "Automation of deployment, versioning, CI/CD, and optimization of the development environment to ensure efficiency and reliability in projects.",
    "project_title": "Projects",
    "project_description": "Real production projects, including financial systems, administrative dashboards, and internal tools, focusing on performance, security, and scalability.",
    "interested_title": "Interested in working together?",
    "interested_description": "Feel free to reach out for collaborations, projects, or just a friendly chat about technology and development.",
    "interested_contact": "Contact Me"
  },
  "br": {
    "title_page": "Desenvolvedor Fullstack",
    "title_section": "Principais Stacks",
    "frontend_description": "Experiência em desenvolvimento de interfaces modernas e responsivas, com foco em performance, acessibilidade e boa experiência do usuário.",
    "backend_description": "Criação e integração de APIs, gerenciamento de dados e lógica de negócio com foco em segurança, escalabilidade e boas práticas de arquitetura.",
    "devops_title": "DevOps / Ferramentas",
    "devops_description": "Automação de deploy, versionamento, CI/CD, e otimização de ambiente de desenvolvimento para garantir eficiência e confiabilidade nos projetos.",
    "project_title": "Projetos",
    "project_description": "Projetos reais em produção, incluindo sistemas financeiros, dashboards administrativos e ferramentas internas, com foco em performance, segurança e escalabilidade.",
    "interested_title": "Interessado em trabalhar juntos?",
    "interested_description": "Sinta-se à vontade para entrar em contato para colaborações, projetos ou apenas um bate-papo amigável sobre tecnologia e desenvolvimento.",
    "interested_contact": "Entre em contato"
  }
}
</i18n>
