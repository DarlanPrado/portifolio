<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPageCard
    title="Vuetify"
    :description="t('description')"
    icon="i-logos-vuetifyjs"

    spotlight
    class="[--spotlight-color:#2196F3]"
  />
</template>

<i18n lang="json">
{
  "us": {
    "description": "The component library I used on Seth to build a dense, clear, responsive financial UI — a great fit for systems used by internal teams."
  },
  "br": {
    "description": "Biblioteca de componentes que usei no Seth para montar uma interface financeira densa, clara e responsiva — ideal para sistemas usados por equipes internas."
  }
}
</i18n>
