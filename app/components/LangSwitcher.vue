<script setup>
const { locale, locales } = useI18n()
const availableLocales = locales
const switchLocalePath = useSwitchLocalePath()
const languageSelected = ref(locale.value)
</script>

<template>
  <USelect
    v-model="languageSelected"
    :items="availableLocales"
    value-key="code"
    label-key="name"
    :icon="`i-flagpack-${languageSelected}`"
    class="w-48"
    @change="() => navigateTo(switchLocalePath(languageSelected))"
  />
</template>
