import colors from '#ui-colors'

export interface Tag {
    name: string,
    icon?: string,
    color?: typeof colors[number] | undefined
}