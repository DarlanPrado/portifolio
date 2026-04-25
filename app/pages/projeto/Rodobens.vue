<script setup lang="ts">
import type { TechStackSlug } from '~/utils/techStack'

const { t } = useI18n({
  useScope: 'local'
})

const technologies = [
  'nuxt',
  'vue',
  'typescript',
  'tailwind',
  'pinia',
  'aws',
  'docker'
] as const satisfies readonly TechStackSlug[]
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
    "about_p1": "Internal system built for the Rodobens group — Brazil’s largest Mercedes-Benz truck dealer, with over 70 years in the market and a national presence. The platform digitizes the vehicle financing journey from first customer contact through document issuance and management reporting.",
    "contribution_title": "My contribution",
    "contribution_p1": "I took part in the full rebuild of the automotive financing platform, from immersion with users and business areas through designing the new architecture. I led conversations with customers and users of the legacy platform to map needs, highlight what worked well, and understand the main pain points.",
    "contribution_p2": "I performed a technical analysis of the legacy CRM (VTiger on Laravel), studying its business rules, integrations, and critical behaviors that had to be preserved. I contributed to solution architecture planning — technology choices, design patterns, cloud layout, and CI/CD pipelines — and supported integration design with Salesforce and banking systems for government rural financing programs. The work was strongly focused on security and LGPD compliance."
  },
  "br": {
    "about_title": "Sobre o projeto",
    "about_p1": "Sistema interno desenvolvido para o grupo Rodobens — maior vendedora de caminhões Mercedes-Benz do Brasil, com mais de 70 anos de mercado e presença nacional. A plataforma digitaliza o processo de financiamento de veículos, do primeiro contato com o cliente até a emissão de documentos e relatórios de gestão.",
    "contribution_title": "Minha contribuição",
    "contribution_p1": "Participei da reconstrução completa da plataforma de financiamento automotivo, desde a imersão com usuários e áreas de negócio até o desenho da nova arquitetura. Conduzi conversas com clientes e usuários da plataforma antiga para mapear necessidades, identificar pontos positivos e entender as principais dores do sistema atual.",
    "contribution_p2": "Realizei análise técnica do CRM legado (VTiger em Laravel), estudando suas regras de negócio, integrações e comportamentos críticos que precisavam ser preservados. Contribuí no planejamento da arquitetura da solução — escolha de tecnologias, design patterns, estrutura em nuvem e pipeline de CI/CD — além de apoiar o desenho das integrações com Salesforce e sistemas bancários para programas governamentais de financiamento rural. Todo o trabalho foi conduzido com forte foco em segurança e aderência à LGPD."
  }
}
</i18n>
