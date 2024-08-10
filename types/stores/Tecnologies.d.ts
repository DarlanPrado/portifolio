import type { Tag } from "~/types/stores/Tags";

interface Technology {
    name: string;
    description: string;
    tag?: Tag | undefined,
}