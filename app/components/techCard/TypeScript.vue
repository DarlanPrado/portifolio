<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPageCard
    title="TypeScript"
    :description="t('description')"
    icon="i-logos-typescript-icon"

    spotlight
    class="[--spotlight-color:#3178c6]"
  />
</template>

<i18n lang="json">
{
  "us": {
    "description": "I write all my code with static typing — it cuts down production bugs and makes maintenance easier, especially in financial systems where precision is critical."
  },
  "br": {
    "description": "Escrevo todo meu código com tipagem estática — isso reduz bugs em produção e facilita a manutenção, especialmente em sistemas financeiros onde precisão é crítica."
  }
}
</i18n>
