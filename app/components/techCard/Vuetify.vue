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
    "description": "Vuetify is a component framework for Vue based on Material Design, which makes it easy to create modern, responsive, and visually consistent interfaces."
  },
  "br": {
    "description": "Vuetify é um framework de componentes para Vue baseado no Material Design, que facilita a criação de interfaces modernas, responsivas e visualmente consistentes."
  }
}
</i18n>
