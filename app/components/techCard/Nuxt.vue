<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPageCard
    title="Nuxt"
    :description="t('description')"
    icon="i-logos-nuxt-icon"

    spotlight
    class="[--spotlight-color:#00DC82]"
  />
</template>

<i18n lang="json">
{
  "us": {
    "description": "Nuxt is a Vue-based framework that makes it easy to create modern web applications by offering server-side rendering (SSR), automated routing, and performance optimizations."
  },
  "br": {
    "description": "Nuxt é um framework baseado em Vue que facilita a criação de aplicações web modernas, oferecendo renderização do lado do servidor (SSR), rotas automáticas e otimizações de performance."
  }
}
</i18n>
