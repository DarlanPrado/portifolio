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
  'docker',
  'golang',
  'grafana',
  'jenkins'
] as const satisfies readonly TechStackSlug[]
</script>

<template>
  <UPage class="flex flex-col">
    <UContainer>
      <ProjectsProjectDetailsHeader title="BashApp" />

      <UContainer>
        <UPageBody>
          <NuxtImg
            class="rounded-2xl"
            src="/projects/bash_app/home.png"
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
    "about_p1": "Platform built for Bash Technology, a Santa Catarina–based company focused on business communications — born from a call-center operation and evolved to build its own customer-service tools. The system centralizes access to Bash products: SoftPhone, dialer, web chat, and chatbot, with multichannel support integrating WhatsApp, Instagram, and Facebook in one place.",
    "contribution_title": "My contribution",
    "contribution_p1": "I worked as a full-stack developer responsible for designing, building, and maintaining the entire frontend with Nuxt.js and Vue.js. On the backend, I contributed with Laravel and Golang on critical features, system integration, and process optimization.",
    "contribution_p2": "Major challenges included integrating the webphone (Asterisk) and chatbot (Twilio) with legacy systems, managing real-time communication over WebSocket, and optimizing flows for high concurrent load. The platform served around 200 operators and more than 5,000 customers per month."
  },
  "br": {
    "about_title": "Sobre o projeto",
    "about_p1": "Plataforma desenvolvida para a Bash Technology, empresa catarinense especializada em comunicação empresarial — nascida de uma operação de call center e que evoluiu para criar suas próprias ferramentas de atendimento. O sistema centraliza o acesso a todos os produtos da Bash: SoftPhone, Discador, Webchat e ChatBot, além de suporte a multicanais integrando WhatsApp, Instagram e Facebook em um único lugar.",
    "contribution_title": "Minha contribuição",
    "contribution_p1": "Atuei como desenvolvedor Full Stack responsável por projetar, desenvolver e manter todo o frontend da plataforma com Nuxt.js e Vue.js. No backend, contribuí com Laravel e Golang no desenvolvimento de funcionalidades críticas, integração de sistemas e otimização de processos.",
    "contribution_p2": "Entre os principais desafios esteve a integração do webphone (Asterisk) e do chatbot (Twilio) com sistemas legados, o gerenciamento de comunicação em tempo real via WebSocket e a otimização de fluxos para suportar alto volume simultâneo. A plataforma chegou a atender cerca de 200 operadores e mais de 5 mil clientes por mês."
  }
}
</i18n>
