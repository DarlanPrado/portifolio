<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPageCard
    title="Node"
    :description="t('description')"
    icon="i-devicon-nodejs"

    spotlight
    class="[--spotlight-color:#339933]"
  />
</template>

<i18n lang="json">
{
  "us": {
    "description": "I used it at Brasilcap to build the API behind sales, customer, and reporting management — with a focus on performance and data security."
  },
  "br": {
    "description": "Usei no Brasilcap para construir a API que sustenta toda a gestão de vendas, clientes e relatórios — com foco em performance e segurança dos dados."
  }
}
</i18n>
