<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPageCard
    title="Laravel"
    :description="t('description')"
    icon="i-logos-laravel"

    spotlight
    class="[--spotlight-color:#F05340]"
  />
</template>

<i18n lang="json">
{
  "us": {
    "description": "The stack I structured at Seth for all financial logic — integrations with Serasa, billing, PIX, and collections automation for companies."
  },
  "br": {
    "description": "Stack que estruturei no Seth para toda a lógica financeira — integrações com Serasa, emissão de boletos, PIX e automação de cobrança para empresas."
  }
}
</i18n>
