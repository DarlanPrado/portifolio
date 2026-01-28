<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPageCard
    title="Expo"
    :description="t('')"
    icon="i-logos-expo-icon"

    spotlight
    class="[--spotlight-color:#FF9900]"
  />
</template>

<i18n lang="json">
{
  "us": {
    "description": "Expo is a platform that simplifies mobile app development with React Native, offering tools and services to quickly create, test, and publish applications."
  },
  "br": {
    "description": "Expo é uma plataforma que simplifica o desenvolvimento de apps mobile com React Native, oferecendo ferramentas e serviços para criar, testar e publicar aplicativos rapidamente."
  }
}
</i18n>
