<script>
  import {
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
  } from "@rgossiaux/svelte-headlessui";
</script>

<TabGroup>
  <TabList>
    <Tab class="bg-sky-500 w-32 h-20 shadow-lg rounded-full">Tab 1</Tab>
    <Tab class="bg-sky-500 w-32 h-20 shadow-lg rounded-full">Tab 2</Tab>
    <Tab class="bg-sky-500 w-32 h-20 shadow-lg rounded-full ">Tab 3</Tab>
  </TabList>
  <TabPanels>
    <TabPanel class="bg-sky-500 w-32 h-20">Content 1</TabPanel>
    <TabPanel>Content 2</TabPanel>
    <TabPanel>Content 3</TabPanel>
  </TabPanels>
</TabGroup>
