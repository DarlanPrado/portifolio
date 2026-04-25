<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPageCard
    title="PHP"
    :description="t('description')"
    icon="i-logos-php"

    spotlight
    class="[--spotlight-color:#787CB5]"
  />
</template>

<i18n lang="json">
{
  "us": {
    "description": "Part of the stack I shaped at Seth for financial logic — alongside Laravel for integrations with Serasa, billing, PIX, and collections automation for companies."
  },
  "br": {
    "description": "Linguagem do backend que integrei no Seth com Laravel para toda a lógica financeira — integrações com Serasa, emissão de boletos, PIX e automação de cobrança."
  }
}
</i18n>
