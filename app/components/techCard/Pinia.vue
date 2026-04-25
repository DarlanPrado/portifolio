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
    "description": "The state management I use to handle complex on-screen data — essential on dashboards with lots of real-time information, like BashApp."
  },
  "br": {
    "description": "Gerenciamento de estado que uso para controlar dados complexos na tela — essencial em dashboards com muitas informações em tempo real, como na BashApp."
  }
}
</i18n>
