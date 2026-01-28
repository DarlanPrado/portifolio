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
    "description": "Jenkins is an automation tool focused on continuous integration and continuous delivery (CI/CD), allowing you to build, test, and deploy applications in an automated way."
  },
  "br": {
    "description": "Jenkins é uma ferramenta de automação voltada para integração e entrega contínua (CI/CD), permitindo construir, testar e implantar aplicações de forma automatizada."
  }
}
</i18n>
