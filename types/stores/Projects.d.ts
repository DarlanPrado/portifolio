import type { Tag } from "./Tags";

export interface Project {
    id: string;
    title: string;
    tags?: Tag[] | undefined,
    description?: string | undefined;
    githubLink?: string | undefined;
    link?: string | undefined;
    images?: string[] | undefined;
}