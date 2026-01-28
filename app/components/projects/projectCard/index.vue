<script setup lang="ts">
interface Props {
  title: string
  description?: string
  reverse?: boolean
  srcImage?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  links: Array<any>
}

const { title, description, reverse, srcImage, links } = defineProps<Props>()
</script>

<template>
  <UPageCTA
    :title
    :description
    orientation="horizontal"
    :reverse
    :links
  >
    <img
      v-if="srcImage"
      :src="srcImage"
      width="320"
      height="364"
      :alt="`Illustration ${title}`"
      class="w-full rounded-lg"
    >
  </UPageCTA>
</template>
