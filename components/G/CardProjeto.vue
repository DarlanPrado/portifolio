<template>
    <section ref="section">
        <UCard class="border-2 border-gray-50/0 hover:border-primary-500" :ui="{ background: 'hover:bg-gray-100 hover:dark:bg-gray-800'}">
            <div class="grid grid-cols-1 sm:flex gap-4">
                <div class="flex justify-center" >
                    <LazyNuxtImg v-if="props.data.images?.length" :src="props.data.images![0]" height="110" width="220" />
                </div>
                <div class="w-full">
                    <div>
                    <div class="flex justify-between">
                        <h6 class="text-center font-bold text-xl">{{ props.data.title }}</h6>
                        <UButtonGroup>
                        <LazyUTooltip v-if="props.data.link" text="Acessar plataforma">
                            <UButton color="gray" icon="i-heroicons-link" target="_blank" :to="props.data.link" />
                        </LazyUTooltip>
                        <LazyUTooltip v-if="props.data.githubLink" text="Ver no Github">
                            <UButton icon="i-grommet-icons-github" :to="props.data.githubLink" target="_blank" />
                        </LazyUTooltip>
                        </UButtonGroup>
                    </div>
                    </div>
                    <div>
                    <span v-if="props.data.description" class="mt-2 text-md line-clamp-6 text-gray-400 dark:text-gray-500 leading-none">{{ props.data.description }}</span>
                    <div class="flex gap-3 mt-4">
                        <div class="flex justify-center items-center" v-for="tag in props.data.tags" :key="tag.id">
                        <UTooltip :text="tag.name">
                            <LazyUIcon class="w-6 h-6" v-if="tag.icon" :name="tag.icon" />
                            <LazyUBadge :color="tag.color" v-else :label="tag.name" />
                        </UTooltip>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </UCard>
    </section>
</template>

<script setup lang="ts">
import type { Project } from '~/types/stores/Projects';
const { $anime } = useNuxtApp();

interface Props {
    data: Project;
}

const props = defineProps<Props>();
const section = ref<HTMLElement | null>(null);

const animeScrollLeftSideIn = () => {
    if (section.value) {
        const animeInstance = $anime({
            targets: section.value,
            translateX: [-100, 0],
            duration: 1000,
            opacity: [0, 1],
            autoplay: false,
        });

        const scrollPercent = () => {
            const bodyST = document.body.scrollTop;
            const docST = document.documentElement.scrollTop;
            const docSH = document.documentElement.scrollHeight;
            const docCH = document.documentElement.clientHeight;

            return (docST + bodyST) / (docSH - docCH) * 100;
        };

        const updateAnimationOnScroll = () => {
            animeInstance.seek((scrollPercent() / 100) * animeInstance.duration);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                animeInstance.restart();
                window.onscroll = updateAnimationOnScroll;
                }
            },
            {
                threshold: [0.3],
            }
        );

        observer.observe(section.value);

        window.addEventListener('beforeunload', () => {
            observer.disconnect();
            window.onscroll = null;
        });
    }
};

onMounted(() => {
    animeScrollLeftSideIn();
});
</script>
  