<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPageCard
    title="GitLab"
    :description="t('description')"
    icon="i-logos-gitlab-icon"

    spotlight
    class="[--spotlight-color:#FF9900]"
  />
</template>

<i18n lang="json">
{
  "us": {
    "description": "I used it at Brasilcap for versioning and organizing the development workflow — clear records of who changed what, when, and why."
  },
  "br": {
    "description": "Usei no Brasilcap para versionamento e organização do fluxo de desenvolvimento — controle de quem alterou o quê, quando e por quê."
  }
}
</i18n>
