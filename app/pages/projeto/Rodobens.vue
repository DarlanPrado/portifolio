<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPage class="flex flex-col">
    <UContainer>
      <ProjectsProjectDetailsHeader title="Rodobens" />

      <UContainer>
        <UPageBody>
          <NuxtImg
            class="rounded-2xl"
            src="/projects/rodobens/home.png"
          />
          <div class="mx-4">
            <p>{{ t('p1') }}</p>
            <p>{{ t('p2') }}</p>
            <p>{{ t('p3') }}</p>
            <p>{{ t('p4') }}</p>
          </div>
          <div class="flex flex-wrap gap-4">
            <TechCardNuxt />
            <TechCardVue />
            <TechCardTypeScript />
            <TechCardTailwind />
            <TechCardPinia />
            <TechCardAws />
            <TechCardDocker />
          </div>
        </UPageBody>
      </UContainer>
    </UContainer>
  </UPage>
</template>

<i18n lang="json">
{
  "us": {
    "p1": "Rodobens is an internal system developed to manage vehicle financing sales, track customer information, issue necessary documents, and generate management reports.",
    "p2": "The system streamlines the sales process by providing tools for sales representatives to efficiently handle customer inquiries, process applications, and monitor the status of each financing.",
    "p3": "Additionally, Rodobens offers robust reporting features that allow management to analyze sales performance, customer demographics, and overall business metrics.",
    "p4": "By automating these processes, Rodobens enhances operational efficiency and improves customer satisfaction."
  },
  "br": {
    "p1": "Rodobens é um sistema interno desenvolvido para gerenciar vendas de financiamentos de veículos, acompanhar informações dos clientes, emitir documentos necessários e gerar relatórios gerenciais.",
    "p2": "O sistema simplifica o processo de vendas ao fornecer ferramentas para representantes de vendas lidarem eficientemente com consultas dos clientes, processar aplicações e monitorar o status de cada financiamento.",
    "p3": "Além disso, o Rodobens oferece recursos robustos de relatórios que permitem à gestão analisar o desempenho das vendas, a demografia dos clientes e métricas empresariais gerais.",
    "p4": "Ao automatizar esses processos, o Rodobens melhora a eficiência operacional e a satisfação do cliente."
  }
}
</i18n>
