<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPageCard
    title="AWS"
    :description="t('description')"
    icon="i-logos-aws"

    spotlight
    class="[--spotlight-color:#FF9900]"
  />
</template>

<i18n lang="json">
{
  "us": {
    "description": "The cloud infrastructure I use to host and scale production systems — present across almost all my projects, ensuring availability and security."
  },
  "br": {
    "description": "Infraestrutura de nuvem que uso para hospedar e escalar sistemas em produção — presente em quase todos os projetos, garantindo disponibilidade e segurança."
  }
}
</i18n>
