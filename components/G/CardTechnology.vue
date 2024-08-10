<template>
    <section ref="section">
        <UCard>
            <div class="'w-full h-full'">
                <div class="flex justify-center items-center mb-2">
                    <UIcon :name="data.tag?.icon || ''" class="w-28 h-28"/>
                </div>
                <h6 class="text-center text-4xl font-bold font-bebas">{{ data.name }}</h6>
            </div>
        </UCard>
    </section>
</template>

<script setup lang="ts">
import type { Technology } from '~/types/stores/Tecnologies';
const { $anime } = useNuxtApp();

const data = defineModel<Technology>({required: true})
const section = ref<HTMLElement | null>(null);

const animeScrollLeftSideIn = () => {
    if (section.value) {
        const animeInstance = $anime({
            targets: section.value,
            // translateY: [-100, 0],
            rotateY: [-100, 0],
            duration: 2000,
            // opacity: [0, 1],
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