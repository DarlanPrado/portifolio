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
    "description": "Node.js is a server-side JavaScript runtime environment that allows you to create fast and scalable applications using Chrome's V8 engine."
  },
  "br": {
    "description": "Node.js é um ambiente de execução JavaScript do lado do servidor, que permite criar aplicações rápidas e escaláveis usando o motor V8 do Chrome."
  }
}
</i18n>
