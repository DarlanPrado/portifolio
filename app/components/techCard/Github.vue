<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPageCard
    title="Github"
    :description="t('description')"
    icon="i-logos-github-octocat"

    spotlight
    class="[--spotlight-color:#FF9900]"
  />
</template>

<i18n lang="json">
{
  "us": {
    "description": "GitHub is a code hosting platform that uses Git for version control, facilitating collaboration, code review, and project management among developers."
  },
  "br": {
    "description": "GitHub é uma plataforma de hospedagem de código que usa Git para controle de versão, facilitando colaboração, revisão de código e gestão de projetos entre desenvolvedores."
  }
}
</i18n>
