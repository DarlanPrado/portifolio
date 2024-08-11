import anime from "animejs";
import type { AnimeInstance, AnimeParams } from "animejs";

export default defineNuxtPlugin(() => {

    return {
        provide: {
            anime: import.meta.client ? anime : () => { return {} as AnimeInstance }
        }
    };

});
