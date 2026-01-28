<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPageCard
    title="Typescript"
    :description="t('description')"
    icon="i-logos-typescript-icon"

    spotlight
    class="[--spotlight-color:#3178c6]"
  />
</template>

<i18n lang="json">
{
  "us": {
    "description": "TypeScript is a superset of JavaScript that adds static typing and advanced features, helping you write safer, more organized, and easier-to-maintain code."
  },
  "br": {
    "description": "TypeScript é um superset do JavaScript que adiciona tipagem estática e recursos avançados, ajudando a escrever código mais seguro, organizado e fácil de manter."
  }
}
</i18n>
