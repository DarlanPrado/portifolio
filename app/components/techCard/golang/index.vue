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
    "description": "A high-performance language I used on BashApp to handle simultaneous dialing and real-time call monitoring without freezing the system."
  },
  "br": {
    "description": "Linguagem de alta performance que usei na BashApp para processar discagens simultâneas e monitoramento de chamadas em tempo real sem travar o sistema."
  }
}
</i18n>
