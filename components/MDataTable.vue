<template>
    <div class="tabcontent" :style="{ '--primary-color': color }">
        <div class="tabheader">
            <h1 class="reem-kufi">
                {{ title }}</h1>
        </div>
        <table class="MDtable">
            <thead>
                <th>
                    <div style="text-align: center;margin-top: 50px;">
                        <MCheckBox type="checkbox" id="all" v-model="selectAll" @change="selectAllItems"
                            :color="color" />
                    </div>
                </th>
                <th v-for="col in cols">
                    <MInput type="text" :color="color" />
                    <div class="text-left my-2 ml-2">
                        <button class="p-2 w-full">
                            <div class="flex justify-between">
                                <span class="reem-kufi opacity-50"> {{ col }}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="#dbdbdb" fill-rule="evenodd"
                                        d="M6.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.25 4.81V16.5a.75.75 0 0 1-1.5 0V4.81L3.53 8.03a.75.75 0 0 1-1.06-1.06zm9.53 4.28a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V7.5a.75.75 0 0 1 .75-.75"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </th>
            </thead>
            <tbody>
                <tr v-for="(key, rowIndex) in keys" :key="rowIndex" @mouseenter="hoveredRow = rowIndex"
                    @mouseleave="hoveredRow = null" :class="{ hovered: hoveredRow === rowIndex }">
                    <td class="text-center">
                        <MCheckBox :id="key" v-model="select" @change="selectItem(data[key])" :color="color" />
                    </td>
                    <td class="text-center" v-for="value in data[key]">{{ value }}</td>
                </tr>
            </tbody>
        </table>
        <div class="flex justify-between w-full p-2 ">
            <div>
                Records 1 - 10
            </div>
            <div class="flex">
                <div class="pagination-icon" @click="handleClick">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="m12 2l.324.001l.318.004l.616.017l.299.013l.579.034l.553.046c4.785.464 6.732 2.411 7.196 7.196l.046.553l.034.579q.008.147.013.299l.017.616L22 12l-.005.642l-.017.616l-.013.299l-.034.579l-.046.553c-.464 4.785-2.411 6.732-7.196 7.196l-.553.046l-.579.034q-.147.008-.299.013l-.616.017L12 22l-.642-.005l-.616-.017l-.299-.013l-.579-.034l-.553-.046c-4.785-.464-6.732-2.411-7.196-7.196l-.046-.553l-.034-.579l-.013-.299l-.017-.616Q2 12.327 2 12l.001-.324l.004-.318l.017-.616l.013-.299l.034-.579l.046-.553c.464-4.785 2.411-6.732 7.196-7.196l.553-.046l.579-.034q.147-.008.299-.013l.616-.017Q11.673 2 12 2m1.707 6.293a1 1 0 0 0-1.414 0l-3 3l-.083.094a1 1 0 0 0 .083 1.32l3 3l.094.083a1 1 0 0 0 1.32-.083l.083-.094a1 1 0 0 0-.083-1.32L11.415 12l2.292-2.293l.083-.094a1 1 0 0 0-.083-1.32" />
                    </svg>
                </div>
                <div class="pagination-icon" @click="handleClick">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M12 2q-.327 0-.642.005l-.616.017l-.299.013l-.579.034l-.553.046c-4.785.464-6.732 2.411-7.196 7.196l-.046.553l-.034.579q-.008.147-.013.299l-.017.616l-.004.318L2 12q0 .327.005.642l.017.616l.013.299l.034.579l.046.553c.464 4.785 2.411 6.732 7.196 7.196l.553.046l.579.034q.147.008.299.013l.616.017L12 22l.642-.005l.616-.017l.299-.013l.579-.034l.553-.046c4.785-.464 6.732-2.411 7.196-7.196l.046-.553l.034-.579q.008-.147.013-.299l.017-.616L22 12l-.005-.642l-.017-.616l-.013-.299l-.034-.579l-.046-.553c-.464-4.785-2.411-6.732-7.196-7.196l-.553-.046l-.579-.034l-.299-.013l-.616-.017l-.318-.004zm-1.707 6.293a1 1 0 0 1 1.32-.083l.094.083l3 3a1 1 0 0 1 .083 1.32l-.083.094l-3 3a1 1 0 0 1-1.497-1.32l.083-.094L12.585 12l-2.292-2.293a1 1 0 0 1-.083-1.32z" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    color: {
        type: String,
        default: "blue",
    },
    data: {
        type: Array<Object>,
        default: []
    },
    title: {
        type: String,
        default: "Datatable"
    }
})

const cols = Object.keys(props.data[0]);
const keys = Object.keys(props.data);
const selected = ref(Array<{}>());
const selectAll = ref(false);
const select = ref(false);
const hoveredRow: Ref<number | null> = ref(null);
function handleClick () {
    console.log("clicked");
}
function selectAllItems () {
    if (selectAll.value) {
        selected.value = data; // Select all items
    } else {
        selected.value = []; // Deselect all items
    }
}
function selectItem (q: {}) {
    const index = selected.value.findIndex((item: any) => item === q);
    if (select.value) {
        selected.value.push(q); // Add item if not already selected
    } else {
        selected.value.splice(index, 1); // Remove item if already selected
    }
}
</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Reem+Kufi+Fun&family=Reem+Kufi+Ink&display=swap');

.reem-kufi {
    font-family: "Reem Kufi Fun", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
}

.pagination-icon {
    font-size: 1.5rem;
    line-height: 2rem;
    color: var(--primary-color);
    background: transparent;
    transition: all 0.3s ease;
}

.pagination-icon:hover {
    scale: 1.2;
}

.tabcontent,
.tabheader {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-radius: 0.5rem;
}

.tabcontent {
    background-color: #fff;
    border: 1px solid #f0f0f0;

    color: #000000;
    width: 100%;
    overflow-x: auto;
}

.tabheader {
    padding: 0.5rem;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
    opacity: 0.8;
}



table.MDtable {
    border: 1px solid #f2f2f3;
    background-color: #ffffff;
    width: 100%;
    text-align: left;
    border-collapse: collapse;
}

table.MDtable td,
table.MDtable th {
    border: 1px solid #f2f2f3;
    padding: 3px 2px;
}

table.MDtable tbody td {
    font-size: 13px;
}

table.MDtable tr:nth-child(even) {
    background: #f7f7f7;
}

table.MDtable thead {
    background: #fff;
}

table.MDtable thead th {
    font-size: 15px;
}

table.MDtable thead th:first-child {
    border-left: none;
}

table.MDtable tfoot td {
    font-size: 14px;
}

table.MDtable tfoot .links {
    text-align: right;
}

.hovered {
    background-color: var(--primary-color) !important;
    color: white !important;
}

/* Dark mode styles */
.dark .tabcontent {
    background-color: #000000;
    border: 1px solid #2c2c2e;
    color: #ffffff;
}

.dark .tabheader {
    color: #ffffff;

}

.dark input {
    background-color: #000000;
    color: #ffffff;
}

.dark table.MDtable {
    border-color: #242424;
    background-color: #2d2d2d;
    color: #ffffff;
}

.dark table.MDtable tr:nth-child(even) {
    background: #222222;
}

.dark table.MDtable thead {
    background: #000000;
    color: #ffffff;
}

.dark table.MDtable td,
.dark .MDtable th {
    border: 1px solid #000000;

}
</style>
