<script setup lang="ts">
import type { TechStackSlug } from '~/utils/techStack'

const { t } = useI18n({
  useScope: 'local'
})

const technologies = [
  'vue',
  'typescript',
  'vuetify',
  'php',
  'laravel',
  'aws'
] as const satisfies readonly TechStackSlug[]
</script>

<template>
  <UPage class="flex flex-col">
    <UContainer>
      <ProjectsProjectDetailsHeader title="Seth" />

      <UContainer>
        <UPageBody>
          <NuxtImg
            class="rounded-2xl"
            src="/projects/seth_total/home.png"
          />
          <div class="mx-4">
            <p>{{ t('p1') }}</p>
            <ul class="my-4 flex flex-col gap-2">
              <li class="ml-4">
                • {{ t('li1') }}
              </li>
              <li class="ml-4">
                • {{ t('li2') }}
              </li>
              <li class="ml-4">
                • {{ t('li3') }}
              </li>
              <li class="ml-4">
                • {{ t('li4') }}
              </li>
              <li class="ml-4">
                • {{ t('li5') }}
              </li>
              <li class="ml-4">
                • {{ t('li6') }}
              </li>
              <li class="ml-4">
                • {{ t('li7') }}
              </li>
              <li class="ml-4">
                • {{ t('li8') }}
              </li>
              <li class="ml-4">
                • {{ t('li9') }}
              </li>
              <li class="ml-4">
                • {{ t('li10') }}
              </li>
              <li class="ml-4">
                • {{ t('li11') }}
              </li>
            </ul>
            <br>
            <p>
              {{ t('p2') }}
            </p>
          </div>
          <ProjectsProjectTechBadges :technologies="[...technologies]" />
        </UPageBody>
      </UContainer>
    </UContainer>
  </UPage>
</template>

<i18n lang="json">
{
  "us": {
    "p1": "Seth is an automated financial management platform that includes features such as:",
    "li1": "Credit bureau check (similar to Experian or Equifax)",
    "li2": "Electronic service invoicing",
    "li3": "Customer data cleansing",
    "li4": "Receivables advance (invoice factoring)",
    "li5": "Credit reporting and collection",
    "li6": "Credit risk analysis",
    "li7": "Multiple payment methods (instant transfer, bank slip, credit card, payment link)",
    "li8": "Automated billing and reminders (via WhatsApp, Email, SMS, Voice bot)",
    "li9": "Asset sales management",
    "li10": "Financial management tools",
    "li11": "Legal feasibility analysis for debt collection",
    "p2": "The company offers a variety of financial solutions tailored for small business owners, freelancers, and startups."
  },
  "br": {
    "p1": "Seth é uma plataforma de gestão financeira automatizada, inclui funcionalidades como:",
    "li1": "Consulta Serasa",
    "li2": "Nota fiscal de serviço eletrônica",
    "li3": "Higienização de cadastro",
    "li4": "Antecipação de recebiveis",
    "li5": "Negativação Serasa",
    "li6": "Análise de crédito",
    "li7": "Meio de pagamentos(PIX, Boleto, Cartão de crédito, Link de pagamento)",
    "li8": "Automatização de cobrança(WhatsApp, E-mail, SMS, Robô de voz)",
    "li9": "Venda de ativos",
    "li10": "Gestão financeira",
    "li11": "Análise de viabilidade de ajuizamento",
    "p2": "A empresa oferece diversas soluções financeiras voltado para MEI(Microempreendedor individual), ME(Microempresa) e EPP(Empresa de pequeno porte)"
  }
}
</i18n>
