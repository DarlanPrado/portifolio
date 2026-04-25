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
          <div class="mx-4 space-y-8">
            <section>
              <h3 class="mb-3 text-2xl font-semibold text-default">
                {{ t('about_title') }}
              </h3>
              <div class="space-y-3 text-muted">
                <p>{{ t('about_p1') }}</p>
              </div>
            </section>
            <section>
              <h3 class="mb-3 text-2xl font-semibold text-default">
                {{ t('contribution_title') }}
              </h3>
              <div class="space-y-3 text-muted">
                <p>{{ t('contribution_p1') }}</p>
                <p>{{ t('contribution_p2') }}</p>
              </div>
            </section>
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
    "about_title": "About the project",
    "about_p1": "Financial management platform for small and medium businesses that need to bill, collect, and control finances in one place. It covers the full cycle — from credit checks with Serasa through collections automation via WhatsApp, SMS, email, and voice bots, plus issuance of bank slips, PIX, card payments, and invoices.",
    "contribution_title": "My contribution",
    "contribution_p1": "I joined while the product was still in testing, with access limited to a small set of customers. On the frontend, I refactored and optimized Vue.js code to improve development efficiency and user experience, and fixed critical bugs. On the Laravel backend, I improved architecture, addressed critical vulnerabilities, and optimized core processes.",
    "contribution_p2": "I also took over a discontinued mobile app — with no prior React Native experience, I reviewed the app, fixed issues, and published to both stores (App Store and Google Play), including push notifications. The app initially drove adoption from over 10% of existing customers. Within three months, I helped turn Seth into a public product, reaching 200+ registered companies while we kept shipping improvements."
  },
  "br": {
    "about_title": "Sobre o projeto",
    "about_p1": "Plataforma de gestão financeira voltada para pequenas e médias empresas que precisam cobrar, receber e controlar o financeiro em um só lugar. Cobre o ciclo completo — da análise de crédito junto ao Serasa até negativação, automação de cobranças via WhatsApp, SMS, e-mail e robô de voz, além de emissão de boletos, PIX, cartão e notas fiscais.",
    "contribution_title": "Minha contribuição",
    "contribution_p1": "Entrei quando o produto ainda estava em fase de testes, com acesso limitado a poucos clientes. No frontend, refatorei e otimizei código Vue.js para melhorar a eficiência do desenvolvimento e a experiência do usuário, além de corrigir bugs críticos. No backend com Laravel, realizei melhorias na arquitetura, corrigi vulnerabilidades críticas e otimizei processos essenciais.",
    "contribution_p2": "Assumi também o app mobile que havia sido descontinuado — sem experiência prévia em React Native, revisei a aplicação, corrigi os erros e publiquei nas duas lojas (App Store e Google Play), incluindo notificações push. O app gerou adesão inicial de mais de 10% dos clientes existentes. Em três meses, contribuí para transformar a Seth em um produto público, chegando a mais de 200 CNPJs cadastrados enquanto continuávamos entregando melhorias."
  }
}
</i18n>
