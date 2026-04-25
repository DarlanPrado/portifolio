<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPageCard
    title="Vue"
    :description="t('description')"
    icon="i-logos-vue"

    spotlight
    class="[--spotlight-color:#42b883]"
  />
</template>

<i18n lang="json">
{
  "us": {
    "description": "The JavaScript framework I know in the most depth. It shows up across my projects, from financial dashboards to customer support platforms."
  },
  "br": {
    "description": "O framework JavaScript que domino com mais profundidade. Presente em todos os meus projetos, desde dashboards financeiros até plataformas de atendimento ao cliente."
  }
}
</i18n>
