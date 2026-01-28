<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPageCard
    title="Golang"
    :description="t('description')"
    icon="i-logos-gopher"

    spotlight
    class="[--spotlight-color:#00ADD8]"
  />
</template>

<i18n lang="json">
{
  "us": {
    "description": "Golang is a programming language created by Google, focused on performance, simplicity, and efficient concurrency, ideal for scalable and high-performance systems."
  },
  "br": {
    "description": "Golang é uma linguagem de programação criada pelo Google, focada em desempenho, simplicidade e concorrência eficiente, ideal para sistemas escaláveis e de alta performance."
  }
}
</i18n>
