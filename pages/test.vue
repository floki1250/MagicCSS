<template>
    <div class="flex justify-center items-center">

        <div class=" w-96 h-96  absolute blur-blob bg-teal-200" :style="{ left: x + 'px', top: y + 'px' }">

        </div>
        <div class="box  min-w-72 w-full p-0.5 rounded-xl bg-white dark:bg-gray-800  ease-in-out shadow-md">
            <div class="h-full w-full bg-gray-50 p-2 rounded-[calc(.75rem-1px)] dark:bg-gray-900"></div>
        </div>
    </div>

</template>
<script setup>
import { useMouse } from '@vueuse/core'

const { x, y, sourceType } = useMouse()
</script>
<style></style>
<style lang="scss" scoped>
.box {
    --border-angle: 0turn;
    --main-bg: conic-gradient(from var(--border-angle), rgb(31, 41, 55), rgb(31, 41, 55) 5%, rgb(31, 41, 55) 60%, rgb(31, 41, 55) 95%);
    border: solid 2px transparent;
    --gradient-border: conic-gradient(from var(--border-angle),
            transparent 25%,
            #08f,
            #f03 99%,
            transparent);

    background: var(--main-bg) padding-box, var(--gradient-border) border-box,
        var(--main-bg) border-box;

    background-position: center center;

    @keyframes bg-spin {
        to {
            --border-angle: 1turn;
        }
    }
}

.box:hover {
    animation: bg-spin 5s linear infinite;
}

@property --border-angle {
    syntax: "<angle>";
    inherits: true;
    initial-value: 0turn;
}
</style>
