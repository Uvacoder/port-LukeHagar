<script>
  import {
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
  } from "@rgossiaux/svelte-headlessui";
  import { SelectorIcon } from "@rgossiaux/svelte-heroicons/solid";
  import { CheckIcon } from "@rgossiaux/svelte-heroicons/outline";
</script>

<TabGroup>
  <TabList>
    <Tab class="bg-sky-500 w-32 h-20 shadow-lg rounded-full"
      >Tab 1<CheckIcon />
      <SelectorIcon class="my-class" aria-hidden="true" /></Tab
    >
    <Tab class="bg-sky-500 w-32 h-20 shadow-lg rounded-full">Tab 2</Tab>
    <Tab
      class="bg-sky-500 w-32 h-20 shadow-lg rounded-full text-white border-slate-600	"
      >Tab 3</Tab
    >
  </TabList>
  <TabPanels>
    <TabPanel class="bg-sky-500 w-32 h-20">Content 1</TabPanel>
    <TabPanel
      >Content 2
      <CheckIcon />
      <SelectorIcon class="my-class" aria-hidden="true" />
    </TabPanel>
    <TabPanel
      >Content 3
      <SelectorIcon class="my-class" aria-hidden="true" />
    </TabPanel>
  </TabPanels>
</TabGroup>
