<template>
    <input :type="type" class="m-input" :style="{ '--primary-color': color }" />
</template>

<script setup lang="ts">
const props = defineProps({
    color: {
        type: String,
        default: "blue",
    },
    type: String
})
</script>

<style scoped lang="scss">
.m-input {
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    border-radius: 8px;
    outline: none;
    transition: 0.3s ease;
}

.m-input::placeholder {
    color: #9e9ea7;
}

.m-input:focus,
input:hover {
    outline: none;
    border-color: var(--primary-color);
}



/* Styles for dark mode */
@media (prefers-color-scheme: light) {
    .m-input {
        background-color: #fafafa;
        color: #464646;
        border: 1px solid #ececec;
    }

    .m-input::placeholder {
        color: #9e9ea7;
    }
}

@media (prefers-color-scheme: dark) {
    .m-input {
        background-color: #222 !important;
        border-color: rgba(#fff, 0.5);
        color: #fff;
    }

    .m-input::placeholder {
        color: rgba(#fff, 0.7);
    }
}
</style>
