<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPage class="flex flex-col xl:mx-16">
    <UContainer>
      <UPageHeader :title="t('title')" />

      <UPageBody>
        <ProjectsProjectCard
          title="Portifólio"
          :description="t('portifolio_description')"
          :links="[
            {
              label: 'Get started',
              color: 'neutral'
            },
            {
              label: 'Learn more',
              color: 'neutral',
              variant: 'subtle',
              trailingIcon: 'i-lucide-arrow-right'
            }
          ]"
        />
        <ProjectsProjectCard
          title="ResumePro"
          reverse
          :description="t('resume_pro_description')"
          src-image="/projects/resume_pro/home.png"
          :links="[
            {
              label: 'Get started',
              color: 'neutral'
            },
            {
              label: 'Learn more',
              color: 'neutral',
              variant: 'subtle',
              to: '/projeto/resumepro',
              trailingIcon: 'i-lucide-arrow-right'
            }
          ]"
        />
        <ProjectsProjectCard
          title="BashApp"
          :description="t('bash_app_descriptrion')"
          src-image="/projects/bash_app/home.png"
          :links="[
            {
              label: 'Get started',
              color: 'neutral'
            },
            {
              label: 'Learn more',
              color: 'neutral',
              variant: 'subtle',
              to: '/projeto/bashapp',
              trailingIcon: 'i-lucide-arrow-right'
            }
          ]"
        />
        <ProjectsProjectCard
          title="Seth"
          reverse
          :description="t('seth_total_description')"
          src-image="/projects/seth_total/home.png"
          :links="[
            {
              label: 'Get started',
              color: 'neutral'
            },
            {
              label: 'Learn more',
              color: 'neutral',
              variant: 'subtle',
              to: '/projeto/seth',
              trailingIcon: 'i-lucide-arrow-right'
            }
          ]"
        />
      </UPageBody>
    </UContainer>
  </UPage>
</template>

<i18n lang="json">
{
  "us": {
    "title": "Projects",
    "portifolio_description": "This is the same project you're working on; try it out in practice ;) .",
    "resume_pro_description": "Tool for creating customized resumes.",
    "bash_app_descriptrion": "A tool to control access for all clients to their respective contracted services, as well as providing access to usage reports and operational monitoring.",
    "seth_total_description": "Financial management tool for businesses with invoice generator, PIX (Brazilian instant payment system), customer data cleansing, credit analysis, Serasa negative reporting, and billing automation."
  },
  "br": {
    "title": "Projetos",
    "portifolio_description": "Tratase do mesmo projéto em que você está, teste na pratica seu uso ;) .",
    "resume_pro_description": "Ferramenta para criação de curriculos personalizados.",
    "bash_app_descriptrion": "Ferramenta para controlar o acesso de todos os clientes com os seus devidos serviços contratados, além de dar acesso ao relatório de uso, monitoramento operacional.",
    "seth_total_description": "Ferramenta de gestão financeira para empresas com gerador de boleto, pix, higienização de clientes, analize de crédito negativação Serasa e automação de cobrança."
  }
}
</i18n>
