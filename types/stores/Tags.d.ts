import colors from '#ui-colors'

export interface Tag {
    id: string,
    name: string,
    icon?: string,
    color?: typeof colors[number] | undefined
}