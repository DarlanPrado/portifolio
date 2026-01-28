<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPageCard
    title="Pinia"
    :description="t('description')"
    icon="i-logos-pinia"

    spotlight
    class="[--spotlight-color:#f7d336]"
  />
</template>

<i18n lang="json">
{
  "us": {
    "description": "Pinia is a simple and intuitive state management library for Vue that replaces Vuex, offering better typing, reactivity, and integration with Vue 3."
  },
  "br": {
    "description": "Pinia é uma biblioteca de gerenciamento de estado para Vue, simples e intuitiva, que substitui o Vuex oferecendo melhor tipagem, reatividade e integração com o Vue 3"
  }
}
</i18n>
