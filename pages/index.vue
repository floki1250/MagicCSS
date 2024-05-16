<template>
    <div class="h-[50vh] w-full flex justify-center items-center flex-col">
        <div class="flex m-4 mb-6">
            <h1 class="text-7xl lg:text-8xl font-bold reem-kufi">Magic</h1>
            <h1
                class="text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent reem-kufi">
                CSS
            </h1>
        </div>

        <div class="flex">
            <div
                class="p-0.5 rounded-xl bg-white dark:bg-gray-800 hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 transition-all duration-500 ease-in-out shadow-md">
                <div class="h-full w-full bg-gray-50 p-2 rounded-[calc(.75rem-1px)] dark:bg-gray-900">
                    <code class="text-sm p-2 text-black dark:text-white">npm i @magic-css/magiccss</code>
                </div>
            </div>
            <div
                class="ml-2 p-0.5 rounded-xl bg-white dark:bg-gray-800 hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 transition-all duration-500 ease-in-out shadow-md">
                <div class="h-full w-full bg-gray-50 p-2 rounded-[calc(.75rem-1px)] dark:bg-gray-900">
                    <NuxtLink to="https://www.github.com/floki1250/magiccss" target="_blank">
                        <IconsGithubIcon class="text-2xl" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 py-4">
        <div
            class="box border-2 border-white dark:border-gray-800 transition-all duration-500 ease-in-out min-w-72 w-full  rounded-xl    shadow-md">
            <div class="h-full w-full bg-gray-50 p-2 rounded-[calc(.75rem-1px)] dark:bg-gray-900">
                <div class="text-3xl font-bold w-full pl-2 py-2">Button</div>
                <UDivider class="my-2" />
                <div class="p-2 w-full flex flex-col">
                    <div class="flex items-center whitespace-nowrap">
                        <code
                            class="text-sm bg-gray-100 dark:bg-gray-800 p-2 text-black dark:text-white rounded-lg">npm i @magic-css/magicbutton</code>
                    </div>

                    <div class="my-2 flex">
                        <NuxtLink to="https://www.npmjs.com/package/@magic-css/magicbutton" target="_blank"
                            class="flex items-center bg-gray-100 dark:bg-gray-800 p-2 text-black dark:text-white w-fit rounded-lg">
                            <IconsVueIcon class="text-2xl" />
                        </NuxtLink>
                        &nbsp
                        <NuxtLink to="https://uiverse.io/floki1250/itchy-emu-75" target="_blank"
                            class="flex items-center bg-gray-100 dark:bg-gray-800 p-2 text-black dark:text-white w-fit rounded-lg">
                            <IconsHtmlIcon class="text-3xl" /> &nbsp;+
                            <IconsCssIcon class="text-3xl" />
                        </NuxtLink>
                    </div>

                    <UDivider class="my-2" />
                    <div class="flex justify-between">
                        <div>
                            <MButton text="Button" :color="color" icon="gravity-ui/magic-wand" />
                        </div>
                        <div>
                            <MButton text="Button" color="red" icon="gravity-ui/heart" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="box border-2 border-white dark:border-gray-800 transition-all duration-500 ease-in-out min-w-72 w-full  rounded-xl    shadow-md">
            <div class="h-full w-full bg-gray-50 p-2 rounded-[calc(.75rem-1px)] dark:bg-gray-900">
                <div class="text-3xl font-bold w-full pl-2 py-2">Input Text</div>
                <UDivider class="my-2" />
                <div class="p-2 w-full flex flex-col">
                    <div class="flex items-center whitespace-nowrap">
                        <code
                            class="text-sm bg-gray-100 dark:bg-gray-800 p-2 text-black dark:text-white rounded-lg">npm i @magic-css/magicbutton</code>
                    </div>
                    <div class="my-2 flex">
                        <NuxtLink to="https://www.npmjs.com/package/@magic-css/magicbutton" target="_blank"
                            class="flex items-center bg-gray-100 dark:bg-gray-800 p-2 text-black dark:text-white w-fit rounded-lg">
                            <IconsVueIcon class="text-2xl" />
                        </NuxtLink>
                        &nbsp
                        <NuxtLink to="https://uiverse.io/floki1250/itchy-emu-75" target="_blank"
                            class="flex items-center bg-gray-100 dark:bg-gray-800 p-2 text-black dark:text-white w-fit rounded-lg">
                            <IconsHtmlIcon class="text-3xl" /> &nbsp;+
                            <IconsCssIcon class="text-3xl" />
                        </NuxtLink>
                    </div>

                    <UDivider class="my-2" />
                    <div class="flex justify-between">
                        <MInput placeholder="Input Text" :color="color" type="password" />
                    </div>
                </div>
            </div>
        </div>
        <div
            class="box border-2 border-white dark:border-gray-800 transition-all duration-500 ease-in-out min-w-72 w-full  rounded-xl    shadow-md">
            <div class="h-full w-full bg-gray-50 p-2 rounded-[calc(.75rem-1px)] dark:bg-gray-900">
                <div class="text-3xl font-bold w-full pl-2 py-2">CheckBox</div>
                <UDivider class="my-2" />
                <div class="p-2 w-full flex flex-col">
                    <div class="flex items-center whitespace-nowrap">
                        <code
                            class="text-sm bg-gray-100 dark:bg-gray-800 p-2 text-black dark:text-white rounded-lg">npm i @magic-css/magiccheckbox</code>
                    </div>

                    <div class="my-2 flex">
                        <NuxtLink to="https://www.npmjs.com/package/@magic-css/magicbutton" target="_blank"
                            class="flex items-center bg-gray-100 dark:bg-gray-800 p-2 text-black dark:text-white w-fit rounded-lg">
                            <IconsVueIcon class="text-2xl" />
                        </NuxtLink>
                        &nbsp
                        <NuxtLink to="https://uiverse.io/floki1250/itchy-emu-75" target="_blank"
                            class="flex items-center bg-gray-100 dark:bg-gray-800 p-2 text-black dark:text-white w-fit rounded-lg">
                            <IconsHtmlIcon class="text-3xl" /> &nbsp;+
                            <IconsCssIcon class="text-3xl" />
                        </NuxtLink>
                    </div>

                    <UDivider class="my-2" />
                    <div class="flex justify-between">
                        <div>
                            <MCheckBox :color="color" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="lg:col-span-2 box border-2 border-white dark:border-gray-800 transition-all duration-500 ease-in-out  w-full  rounded-xl   overflow-auto shadow-md">
            <div class="h-full w-full bg-gray-50 p-2 rounded-[calc(.75rem-1px)] dark:bg-gray-900">
                <div class="text-3xl font-bold w-full pl-2 py-2">Data Table</div>
                <UDivider class="my-2" />
                <div class="p-2 w-full flex flex-col">
                    <div class="flex items-center whitespace-nowrap">
                        <code
                            class="text-sm bg-gray-100 dark:bg-gray-800 p-2 text-black dark:text-white rounded-lg">npm i @magic-css/magicbutton</code>
                    </div>

                    <div class="my-2 flex">
                        <NuxtLink to="https://www.npmjs.com/package/@magic-css/magicbutton" target="_blank"
                            class="flex items-center bg-gray-100 dark:bg-gray-800 p-2 text-black dark:text-white w-fit rounded-lg">
                            <IconsVueIcon class="text-2xl" />
                        </NuxtLink>
                        &nbsp
                        <NuxtLink to="https://uiverse.io/floki1250/itchy-emu-75" target="_blank"
                            class="flex items-center bg-gray-100 dark:bg-gray-800 p-2 text-black dark:text-white w-fit rounded-lg">
                            <IconsHtmlIcon class="text-3xl" /> &nbsp;+
                            <IconsCssIcon class="text-3xl" />
                        </NuxtLink>
                    </div>

                    <UDivider class="my-2" />
                    <div class="flex justify-between">
                        <ClientOnly fallback-tag="span" fallback="Loading ...">
                            <MDataTable :data="data" :color="color" />
                        </ClientOnly>
                    </div>
                </div>
            </div>
        </div>
        <div
            class=" box border-2 border-white dark:border-gray-800 transition-all duration-500 ease-in-out min-w-72 w-full  rounded-xl    shadow-md">
            <div class="h-full w-full bg-gray-50 p-2 rounded-[calc(.75rem-1px)] dark:bg-gray-900">
                <div class="text-3xl font-bold w-full pl-2 py-2">Button</div>
                <UDivider class="my-2" />
                <div class="p-2 w-full flex flex-col">
                    <div class="flex items-center whitespace-nowrap">
                        <code
                            class="text-sm bg-gray-100 dark:bg-gray-800 p-2 text-black dark:text-white rounded-lg">npm i @magic-css/magicbutton</code>
                    </div>

                    <div class="my-2 flex">
                        <NuxtLink to="https://www.npmjs.com/package/@magic-css/magicbutton" target="_blank"
                            class="flex items-center bg-gray-100 dark:bg-gray-800 p-2 text-black dark:text-white w-fit rounded-lg">
                            <IconsVueIcon class="text-2xl" />
                        </NuxtLink>
                        &nbsp
                        <NuxtLink to="https://uiverse.io/floki1250/itchy-emu-75" target="_blank"
                            class="flex items-center bg-gray-100 dark:bg-gray-800 p-2 text-black dark:text-white w-fit rounded-lg">
                            <IconsHtmlIcon class="text-3xl" /> &nbsp;+
                            <IconsCssIcon class="text-3xl" />
                        </NuxtLink>
                    </div>

                    <UDivider class="my-2" />
                    <div class="flex justify-between">
                        <div>
                            <p class="text-md">Change Color of the Button :</p>
                            <input type="color" v-model="color" class="mr-4" id="color" />
                        </div>
                        <div>
                            <MButton text="Button" :color="color" icon="gravity-ui/magic-wand" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

const color = useState<string>("color")

const data: Array<Object> = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Alice", age: 25 },
    { id: 3, name: "Bob", age: 35 },
];
</script>
<style lang="scss" scoped>
.box:hover {
    --border-angle: 0turn;
    --main-bg: conic-gradient(from var(--border-angle), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0) 95%);
    border: solid 2px transparent;
    --gradient-border: conic-gradient(from var(--border-angle),
            transparent 25%,
            #08f,
            #f03 99%,
            transparent);

    background: var(--main-bg) padding-box, var(--gradient-border) border-box,
        var(--main-bg) border-box;

    background-position: center center;

    animation: bg-spin 10s linear infinite;




    @keyframes bg-spin {
        to {
            --border-angle: 1turn;
        }
    }
}

@property --border-angle {
    syntax: "<angle>";
    inherits: true;
    initial-value: 0turn;
}
</style>
