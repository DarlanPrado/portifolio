<template>
  <div>
    <NuxtRouteAnnouncer />
    <div>
      
      <div class="snap-start">
        <Layout />
      </div>
      <div class="snap-start min-h-screen py-20 space-y-10">
        <ContentMeuTrabalho />
        <ContentMeusProjetos />
        <ContentPrincipaisTecnologias />
      </div>
      <div class="snap-start min-h-screen bg-gradient-to-b  from-primary-500 dark:from-primary-600 to-primary-700 dark:to-primary-900 dark:bg-primary-600 py-10">
        <ContentSobreMim />
      </div>
      <div class="snap-start min-h-screen flex flex-col pt-10">
        <ContentMeusContatos class="flex-grow flex-shrink-0 h-full w-full" />
        <LayoutFooter />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

useSeoMeta({
  title: 'Darlan Prado - Desenvolvedor Fullstack',
  description: 'Portfólio de Darlan, desenvolvedor fullstack especializado em Nuxt3, Vue3, Typescript e Tailwind. Confira meus projetos e experiência.',
  ogTitle: 'Darlan Prado - Desenvolvedor Fullstack',
  ogDescription: 'Explore o portfólio de Darlan, onde apresento meus projetos, habilidades e experiência como desenvolvedor.',
  ogImage: '/avatar.png', // Substitua pelo caminho real da imagem
  twitterTitle: 'Darlan Prado - Desenvolvedor Fullstack',
  twitterDescription: 'Veja meu portfólio e conheça meus projetos e habilidades.',
  twitterImage: '/avatar.png', // Substitua pelo caminho real da imagem
  twitterCard: 'summary'
})


useHead({
  bodyAttrs: {
    class: 'bg-gray-200 dark:bg-gray-800'
  },
  htmlAttrs: {
    lang: 'pt-br',
    class: 'font-mukta overflow-y-auto snap-y snap-mandatory h-screen '
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/avatar.png'
    }
  ]
})

</script>
