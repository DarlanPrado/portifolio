<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPageCard
    title="Vue"
    :description="t('description')"
    icon="i-logos-vue"

    spotlight
    class="[--spotlight-color:#42b883]"
  />
</template>

<i18n lang="json">
{
  "us": {
    "description": "Vue is a progressive JavaScript framework used to create dynamic and reactive web interfaces in a simple and efficient way."
  },
  "br": {
    "description": "Vue é um framework JavaScript progressivo usado para criar interfaces web dinâmicas e reativas de forma simples e eficiente."
  }
}
</i18n>
