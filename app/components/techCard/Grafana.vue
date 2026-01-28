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
    "description": "Grafana is an observability platform used to visualize and monitor data in real time, creating interactive dashboards from various sources such as databases and metrics services."
  },
  "br": {
    "description": "Grafana é uma plataforma de observabilidade usada para visualizar e monitorar dados em tempo real, criando painéis interativos a partir de diversas fontes como bancos de dados e serviços de métricas."
  }
}
</i18n>
