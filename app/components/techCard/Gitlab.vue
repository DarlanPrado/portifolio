<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPageCard
    title="Gitlab"
    :description="t('')"
    icon="i-logos-gitlab-icon"

    spotlight
    class="[--spotlight-color:#FF9900]"
  />
</template>

<i18n lang="json">
{
  "us": {
    "description": "GitLab is a complete DevOps platform that combines Git repositories, continuous integration (CI/CD), and project management tools in a single environment."
  },
  "br": {
    "description": "GitLab é uma plataforma completa de DevOps que combina repositórios Git, integração contínua (CI/CD) e ferramentas de gerenciamento de projetos em um único ambiente."
  }
}
</i18n>
