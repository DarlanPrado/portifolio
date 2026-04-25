<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
const localePath = useLocalePath()

const cards = computed(() => [
  {
    title: t('title-nuxt-yup'),
    description: t('description-nuxt-yup'),
    icon: 'i-lucide-shield-check',
    to: localePath('/biblioteca/nuxt-yup')
  },
  {
    title: t('title-nuxt-libras'),
    description: t('description-nuxt-libras'),
    icon: 'i-lucide-a-large-small',
    to: localePath('/biblioteca/nuxt-libras')
  },
  {
    title: t('title-real-cep'),
    description: t('description-real-cep'),
    icon: 'i-lucide-map-pin',
    to: localePath('/biblioteca/real-cep')
  }
])
</script>

<template>
  <UPage class="flex flex-col xl:mx-16">
    <UContainer>
      <UPageHeader :title="t('title')" />
      <UPageBody>
        <!-- <uPageCTA  title="nuxt-yup" /> -->
        <!-- <librariesItemCard
          title="nuxt-yup"
          description="Validação de formulários no Nuxt.js com Yup"
          nuxtModule
        /> -->
        <UPageGrid>
          <UPageCard
            v-for="(card, index) in cards"
            :key="index"
            v-bind="card"
          />
        </UPageGrid>
      </UPageBody>
    </UContainer>
  </UPage>
</template>

<i18n lang="json">
{
  "us": {
    "title": "Libraries",
    "title-nuxt-yup": "nuxt-yup",
    "description-nuxt-yup": "Nuxt module for implementing yup in Nuxt.js for form validation, filters, and data validation.",
    "title-nuxt-libras": "nuxt-libras",
    "description-nuxt-libras": "Nuxt module for integration with VLibras, allowing automatic translation of content into Brazilian Sign Language (Libras).",
    "title-real-cep": "real-cep",
    "description-real-cep": "Simple library for validating and looking up Brazilian postal codes (CEPs), as well as providing state and municipality utilities via IBGE."
  },
  "br": {
    "title": "Bibliotecas",
    "title-nuxt-yup": "nuxt-yup",
    "description-nuxt-yup": "Módulo Nuxt para implementação do yup no Nuxt.js para validação de formulários, filtros e validação de dados.",
    "title-nuxt-libras": "nuxt-libras",
    "description-nuxt-libras": "Módulo Nuxt para integração com VLibras, permitindo a tradução automática de conteúdos para a Língua Brasileira de Sinais (Libras).",
    "title-real-cep": "real-cep",
    "description-real-cep": "Biblioteca simples para validação e consulta de CEPs do Brasil, além de fornecer utilitários de estados e municípios via IBGE."
  }
}
</i18n>
