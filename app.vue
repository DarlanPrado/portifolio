<template>
  <div>
    <div class="snap-start">
      <Layout />
    </div>
    <div class="snap-start min-h-screen py-10 space-y-5">
      <ContentMeuTrabalho />
      <ContentMeusProjetos />
      <ContentTecnologias />
    </div>
    <div class="snap-start min-h-screen bg-gradient-to-b  from-primary-500 dark:from-primary-600 to-primary-700 dark:to-primary-900 dark:bg-primary-600 py-10">
      <ContentSobreMim />
    </div>
    <div class="snap-start min-h-screen flex flex-col pt-10">
      <ContentMeusContatos class="flex-grow flex-shrink-0 h-full w-full" />
      <LayoutFooter />
    </div>
  </div>
</template>
<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bg-gray-200 dark:bg-gray-800'
  },
  htmlAttrs: {
    class: 'font-mukta overflow-y-auto snap-y snap-mandatory h-screen '
  }
})

</script>
