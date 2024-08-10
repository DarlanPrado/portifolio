<template>
    <div>
        <UBadge v-for="tag in useTagsStore().tags" :color="tag.color" :ui="{ rounded: 'rounded-full' }">{{ tag.name }}</UBadge>
    </div>
</template>