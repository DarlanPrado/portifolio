<!-- <template>
  <div>
    <UPageHero
      title="Nuxt Starter Template"
      description="A production-ready starter template powered by Nuxt UI. Build beautiful, accessible, and performant applications in minutes, not hours."
      :links="[{
        label: 'Get started',
        to: 'https://ui.nuxt.com/docs/getting-started/installation/nuxt',
        target: '_blank',
        trailingIcon: 'i-lucide-arrow-right',
        size: 'xl'
      }, {
        label: 'Use this template',
        to: 'https://github.com/nuxt-ui-templates/starter',
        target: '_blank',
        icon: 'i-simple-icons-github',
        size: 'xl',
        color: 'neutral',
        variant: 'subtle'
      }]"
    />

    <UPageSection
      id="features"
      title="Everything you need to build modern Nuxt apps"
      description="Start with a solid foundation. This template includes all the essentials for building production-ready applications with Nuxt UI's powerful component system."
      :features="[{
        icon: 'i-lucide-rocket',
        title: 'Production-ready from day one',
        description: 'Pre-configured with TypeScript, ESLint, Tailwind CSS, and all the best practices. Focus on building features, not setting up tooling.'
      }, {
        icon: 'i-lucide-palette',
        title: 'Beautiful by default',
        description: 'Leveraging Nuxt UI\'s design system with automatic dark mode, consistent spacing, and polished components that look great out of the box.'
      }, {
        icon: 'i-lucide-zap',
        title: 'Lightning fast',
        description: 'Optimized for performance with SSR/SSG support, automatic code splitting, and edge-ready deployment. Your users will love the speed.'
      }, {
        icon: 'i-lucide-blocks',
        title: '100+ components included',
        description: 'Access Nuxt UI\'s comprehensive component library. From forms to navigation, everything is accessible, responsive, and customizable.'
      }, {
        icon: 'i-lucide-code-2',
        title: 'Developer experience first',
        description: 'Auto-imports, hot module replacement, and TypeScript support. Write less boilerplate and ship more features.'
      }, {
        icon: 'i-lucide-shield-check',
        title: 'Built for scale',
        description: 'Enterprise-ready architecture with proper error handling, SEO optimization, and security best practices built-in.'
      }]"
    />

    <UPageSection>
      <UPageCTA
        title="Ready to build your next Nuxt app?"
        description="Join thousands of developers building with Nuxt and Nuxt UI. Get this template and start shipping today."
        variant="subtle"
        :links="[{
          label: 'Start building',
          to: 'https://ui.nuxt.com/docs/getting-started/installation/nuxt',
          target: '_blank',
          trailingIcon: 'i-lucide-arrow-right',
          color: 'neutral'
        }, {
          label: 'View on GitHub',
          to: 'https://github.com/nuxt-ui-templates/starter',
          target: '_blank',
          icon: 'i-simple-icons-github',
          color: 'neutral',
          variant: 'outline'
        }]"
      />
    </UPageSection>
  </div>
</template> -->
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
    "devops_description": "Automation of deployment, versioning, CI/CD, and optimization of the development environment to ensure efficiency and reliability in projects."
  },
  "br": {
    "title_page": "Desenvolvedor Fullstack",
    "title_section": "Principais Stacks",
    "frontend_description": "Experiência em desenvolvimento de interfaces modernas e responsivas, com foco em performance, acessibilidade e boa experiência do usuário.",
    "backend_description": "Criação e integração de APIs, gerenciamento de dados e lógica de negócio com foco em segurança, escalabilidade e boas práticas de arquitetura.",
    "devops_title": "DevOps / Ferramentas",
    "devops_description": "Automação de deploy, versionamento, CI/CD, e otimização de ambiente de desenvolvimento para garantir eficiência e confiabilidade nos projetos."
  }
}
</i18n>
