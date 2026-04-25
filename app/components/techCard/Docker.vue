<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPageCard
    title="Docker"
    :description="t('description')"
    icon="i-logos-docker-icon"
    spotlight
    class="[--spotlight-color:#1D63ED]"
  />
</template>

<i18n lang="json">
{
  "us": {
    "description": "I use it so the system runs the same in any environment — it removes the classic \"works on my machine\" problem and makes production deploys easier."
  },
  "br": {
    "description": "Uso para garantir que o sistema rode de forma idêntica em qualquer ambiente — elimina o clássico \"funciona na minha máquina\" e facilita o deploy em produção."
  }
}
</i18n>
