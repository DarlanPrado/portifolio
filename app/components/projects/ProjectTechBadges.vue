<script setup lang="ts">
import type { TechStackSlug } from '~/utils/techStack'
import { TECH_STACK_META } from '~/utils/techStack'

const props = defineProps<{
  technologies: TechStackSlug[]
}>()

const localePath = useLocalePath()

function homeHref(slug: TechStackSlug) {
  return `${localePath('/')}#${slug}`
}
</script>

<template>
  <div class="mt-6 flex flex-wrap gap-2">
    <NuxtLink
      v-for="slug in props.technologies"
      :key="slug"
      :to="homeHref(slug)"
      class="inline-flex items-center gap-1.5 rounded-full border border-default px-2.5 py-1 text-xs text-muted transition-colors hover:bg-elevated/50 hover:text-default"
    >
      <UIcon
        :name="TECH_STACK_META[slug].icon"
        class="size-3.5 shrink-0"
      />
      <span>{{ TECH_STACK_META[slug].label }}</span>
    </NuxtLink>
  </div>
</template>
