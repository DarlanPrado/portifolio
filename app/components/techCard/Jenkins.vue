<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPageCard
    title="Jenkins"
    :description="t('description')"
    icon="i-logos-jenkins"

    spotlight
    class="[--spotlight-color:#D33834]"
  />
</template>

<i18n lang="json">
{
  "us": {
    "description": "I automated BashApp’s delivery pipeline with Jenkins — every change is tested and published automatically, reducing the risk of breaking client systems."
  },
  "br": {
    "description": "Automatizei o processo de entrega de código na BashApp com Jenkins — cada atualização é testada e publicada automaticamente, sem risco de quebrar o sistema dos clientes."
  }
}
</i18n>
