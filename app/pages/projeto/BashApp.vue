<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
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
          <div class="mx-4">
            <p>{{ t('p1') }}</p>
            <ul class="my-4 flex flex-col gap-2">
              <li class="ml-4">
                • SoftPhone: {{ t('li1') }}
              </li>
              <li class="ml-4">
                • Discador: {{ t('li2') }}
              </li>
              <li class="ml-4">
                • Webchat: {{ t('li3') }}
              </li>
              <li class="ml-4">
                • ChatBot: {{ t('li4') }}
              </li>
            </ul>
            <p>{{ t('p2') }}</p>
            <br>
            <p>{{ t('p3') }}</p>
            <p>{{ t('p4') }}</p>
          </div>
          <div class="grid grid-cols-4 gap-2">
            <TechCardNuxt />
            <TechCardVue />
            <TechCardTypeScript />
            <TechCardTailwind />
            <TechCardPinia />
            <TechCardAws />
            <TechCardDocker />
            <TechCardGolang />
            <TechCardGrafana />
            <TechCardJenkins />
          </div>
        </UPageBody>
      </UContainer>
    </UContainer>
  </UPage>
</template>

<i18n lang="json">
{
  "us": {
    "p1": "Bash is a platform that provides access to a variety of communication products, including:",
    "li1": "A VoIP software that lets you make and receive calls without a physical phone, offering real-time call monitoring and analytics.",
    "li2": "A dialing system that allows you to make multiple outbound calls to different numbers with customizable settings to create your own call strategies.",
    "li3": "A live chat solution integrated into the client’s website or WhatsApp, where customers are assisted by a real agent.",
    "li4": "An automated chat system integrated into the client’s website or WhatsApp, using a predefined question-and-answer flow (chatbot).",
    "p2": "It also supports multichannel communication, integrating WhatsApp, Instagram, and Facebook in one place.",
    "p3": "Overall, the platform is designed for customer service companies, offering a wide range of options for how your team can operate and manage interactions.",
    "p4": "It also provides personalized support, where we build tailor-made solutions from scratch to meet each client’s specific needs."
  },
  "br": {
    "p1": "Plataforma da Bash para acessar diversos produtos, entre eles:",
    "li1": "Software para realizar e receber chamadas utilizando VoIP, sem precisar de um telefone fisico, além de disponibilizar monitoramento em tempo real",
    "li2": "Software que permite realizar diversas discagens para váriios numeros, disponibilizando diversas configurações que permite você criar sua própia estratégia",
    "li3": "Chat de atendimento personalizado incluso no site do cliente ou via WhatsApp, sendo atendido por um atendente",
    "li4": "Chat de atendimento personalizado incluso no site do cliente ou via WhatsApp, onde o mesmo segue uma arvore de perguntas e recebe respostas pré definidas",
    "p2": "Além de permitir multicanais, que integram whatsapp, instagram, facebook, em um unico lugar",
    "p3": "No geral a plataforma é voltada para empresas de atendimento ao cliente, e disponibiliza uma vasta opção da forma como você pode trabalhar e como trabalhar,",
    "p4": "além de forncer atendimento personalizado, onde criamos uma solução do zero, onde criamos um projeto personalizado para atender a sua necessidade"
  }
}
</i18n>
