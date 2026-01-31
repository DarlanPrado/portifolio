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
          to="/"
        />
        <ProjectsProjectCard
          title="ResumePro"
          reverse
          :description="t('resume_pro_description')"
          src-image="/projects/resume_pro/home.png"
          more="/projeto/resumepro"
        />
        <ProjectsProjectCard
          title="BashApp"
          :description="t('bash_app_descriptrion')"
          src-image="/projects/bash_app/home.png"
          more="/projeto/bashapp"
        />
        <ProjectsProjectCard
          title="Seth"
          reverse
          :description="t('seth_total_description')"
          src-image="/projects/seth_total/home.png"
          more="/projeto/seth"
        />
        <ProjectsProjectCard
          title="Brasilcap"
          :description="t('brasilcap_description')"
          src-image="/projects/brasilcap/home.png"
          more="/projeto/brasilcap"
        />
        <ProjectsProjectCard
          title="Rodobens"
          reverse
          :description="t('rodobens_description')"
          src-image="/projects/rodobens/home.png"
          more="/projeto/rodobens"
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
    "seth_total_description": "Financial management tool for businesses with invoice generator, PIX (Brazilian instant payment system), customer data cleansing, credit analysis, Serasa negative reporting, and billing automation.",
    "brasilcap_description": "Internal system for managing consortium sales, customer tracking, document issuance, and management reports.",
    "rodobens_description": "Internal system for managing vehicle financing sales, customer tracking, document issuance, and management reports."
  },
  "br": {
    "title": "Projetos",
    "portifolio_description": "Tratase do mesmo projéto em que você está, teste na pratica seu uso ;) .",
    "resume_pro_description": "Ferramenta para criação de curriculos personalizados.",
    "bash_app_descriptrion": "Ferramenta para controlar o acesso de todos os clientes com os seus devidos serviços contratados, além de dar acesso ao relatório de uso, monitoramento operacional.",
    "seth_total_description": "Ferramenta de gestão financeira para empresas com gerador de boleto, pix, higienização de clientes, analize de crédito negativação Serasa e automação de cobrança.",
    "brasilcap_description": "Sistema interno para gestão de vendas de consórcios, acompanhamento de clientes, emissão de documentos e relatórios gerenciais.",
    "rodobens_description": "Sistema interno para gestão de vendas de financiamentos de veículos, acompanhamento de clientes, emissão de documentos e relatórios gerenciais."

  }
}
</i18n>
