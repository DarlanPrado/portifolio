<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPageCard
    title="Aws"
    :description="t('description')"
    icon="i-logos-aws"

    spotlight
    class="[--spotlight-color:#FF9900]"
  />
</template>

<i18n lang="json">
{
  "us": {
    "description": "AWS (Amazon Web Services) is a cloud computing platform that offers services such as hosting, databases, storage, and deployment tools on a global scale."
  },
  "br": {
    "description": "AWS (Amazon Web Services) é uma plataforma de computação em nuvem que oferece serviços como hospedagem, banco de dados, armazenamento e ferramentas de deploy em escala global."
  }
}
</i18n>
