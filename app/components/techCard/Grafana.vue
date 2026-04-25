<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPageCard
    title="Grafana"
    :description="t('description')"
    icon="i-logos-grafana"

    spotlight
    class="[--spotlight-color:#F15B2A]"
  />
</template>

<i18n lang="json">
{
  "us": {
    "description": "I implemented it on BashApp to monitor active calls, errors, and performance in real time — catching issues before they hit users."
  },
  "br": {
    "description": "Implementei na BashApp para monitorar em tempo real métricas como chamadas ativas, erros e performance — permitindo identificar problemas antes que afetem os usuários."
  }
}
</i18n>
