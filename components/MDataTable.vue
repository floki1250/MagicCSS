<template>
    <div class="tabcontent">
        <div class="tabheader">
            Records 1 - 10
            <div class="flex">
                <MButton color="#1427cf" @click="handleClick" icon="heroicons/chevron-left" />
                <MButton color="#1427cf" @click="handleClick" icon="heroicons/chevron-right" />
            </div>
        </div>
        <table class="MDtable">
            <thead>
                <th>
                    <div style="text-align: center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15">
                                <path fill="none" stroke="#dbdbdb" stroke-linecap="square"
                                    d="M14.5 2.499c0 1.103-3.134 1.998-7 1.998S.5 3.602.5 2.5m14 0c0-1.105-3.134-2-7-2s-7 .895-7 1.999m14 0v9.993c0 1.103-3.134 1.999-7 1.999s-7-.895-7-1.999V2.5m14 4.996c0 1.104-3.134 2-7 2s-7-.896-7-2" />
                            </svg>
                        </div>
                        <br />
                        <MCheckBox type="checkbox" id="all" v-model="selectAll" @change="selectAllItems" class="" />
                    </div>
                </th>
                <th v-for="col in cols">
                    <MInput type="text" />
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
                        <MCheckBox :id="key" v-model="select" @change="selectItem(data[key])" />
                    </td>
                    <td class="text-center" v-for="value in data[key]">{{ value }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup lang="ts">
const { data } = defineProps(["data"]);
const cols = Object.keys(data[0]);
const keys = Object.keys(data);
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
<style scoped>
.tabcontent {
    background-color: #fcfcfc;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #1427cf;
    color: #000000;
}

.tabheader {
    display: flex;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: space-between;
}

input {
    border-radius: 5px;
    padding: 2px;
}

table.MDtable {
    border: 1px solid #f7f7f7;
    background-color: #ffffff;
    width: 100%;
    text-align: left;
    border-collapse: collapse;
}

table.MDtable td,
table.MDtable th {
    border: 1px solid #f7f7f7;
    padding: 3px 2px;
}

table.MDtable tbody td {
    font-size: 13px;
}

table.MDtable tr:nth-child(even) {
    background: #f7f7f7;
}

table.MDtable thead {
    background: #fcfcfc;
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
    background-color: #1427cf !important;
    color: white !important;
}
</style>
