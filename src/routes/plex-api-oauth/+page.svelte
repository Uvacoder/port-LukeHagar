<script>
  import {
    AccordionGroup,
    AccordionItem,
    Button,
    CodeBlock,
    Divider,
    Tab,
    TabGroup,
  } from "@brainandbones/skeleton";

  import {
    CreatePlexClientInformation,
    GetPlexDevices,
    GetPlexLibraries,
    GetPlexMovieLibraries,
    GetPlexServers,
    GetPlexUserData,
    PlexLogin,
  } from "plex-api-oauth";

  import { writable } from "svelte/store";
  import title from "../../stores/title";
  title.set("plex-api-oauth");

  let storeTab = new writable("Servers/Devices");
  let storeAccordion = new writable([0, 1]);

  let plexClientInformation = null;
  let plexLoginInformation = null;
  let plexServers = null;
  let commandOutPut = null;
</script>

<svelte:head>
  <title>{$title}</title>
</svelte:head>

<div class="grid grid-cols-1">
  <div class="prose max-w-none text-center">
    <h1 class="text-center">
      {$title}
    </h1>
    <a href="https://github.com/LukeHagar/plex-api-oauth">Repo</a>
    <p>
      Alright so this project has been kinda awesome I have gotten to write a
      LOT of functional code and its been a hoot SO I figured the best way to
      present it was to give you an interactive API-OAuth Explorer to use
    </p>
  </div>
  <AccordionGroup selected={storeAccordion} multiple>
    <AccordionItem value={0} hover={"hover:bg-accent-500/10"}>
      <svelte:fragment slot="title"
        ><p class="text-center">Module Usage</p></svelte:fragment
      >
      <svelte:fragment slot="description"
        ><CodeBlock
          class="grow text-start"
          language="bash"
          code={`npm install plex-api-oauth`}
        />
        <Divider class="py-1" />
        <CodeBlock
          class="grow text-start"
          language="JavaScript"
          code={`import {
  CreatePlexClientInformation,
  PlexLogin,
  GetPlexServers,
  //...etc
} from "plex-api-oauth";`}
        /></svelte:fragment
      >
    </AccordionItem>
    <AccordionItem value={1} hover={"hover:bg-accent-500/10"}>
      <svelte:fragment slot="title"
        ><p class="text-center">Instructions</p></svelte:fragment
      >
      <svelte:fragment slot="description"
        ><CodeBlock
          class="grow text-start"
          language="md"
          code={`1. Generate Client Information
2. Login
3. ???
4. Profit!!!`}
        /></svelte:fragment
      >
    </AccordionItem>
  </AccordionGroup>
</div>
<div>
  <div class="p-2 mt-4 grid grid-cols-1 gap-2 justify-center">
    <p class="text-center">Client & Auth Information</p>
    <Divider />
    <div class="xl:grid xl:grid-cols-2 gap-2 flex flex-col pt-2">
      <Button
        size="xl:xl sm"
        background="bg-black"
        color="text-white"
        ring="ring-transparent"
        weight="ring-none"
        rounded="rounded-full"
        disabled={false}
        class="col-span-2"
        on:click={() => {
          let input = { product: "LukeHagar.com" };
          plexClientInformation = CreatePlexClientInformation(input);
          console.log(plexClientInformation);
        }}
      >
        CreatePlexClientInformation()
      </Button>
      <div class="flex justify-center">
        <div class="overflow-hidden flex flex-col justify-center">
          <p class="text-center">Command:</p>
          <CodeBlock
            class="text-start"
            language="JavaScript"
            code={`let input = {product:"LukeHagar.com"}
plexClientInformation = CreatePlexClientInformation(input);`}
          />
        </div>
      </div>
      <div class="overflow-hidden flex flex-col justify-center">
        <p class="text-center">plexClientInformation</p>
        <CodeBlock
          class="text-start"
          language="JSON"
          code={JSON.stringify(plexClientInformation, " ", 4)}
        />
      </div>
    </div>
    <div class="xl:grid xl:grid-cols-2 gap-2 flex flex-col">
      <Button
        size="xl:xl sm"
        background="bg-black"
        color="text-white"
        ring="ring-transparent"
        weight="ring-none"
        rounded="rounded-full"
        disabled={false}
        class="col-span-2"
        on:click={async () => {
          plexLoginInformation = await PlexLogin(plexClientInformation);
          console.log(plexLoginInformation);
        }}
      >
        PlexLogin()
      </Button>
      <div class="flex justify-center">
        <div class="overflow-hidden flex flex-col justify-center">
          <p class="text-center">Command:</p>
          <CodeBlock
            class="text-start"
            language="JavaScript"
            code={`plexLoginInformation = PlexLogin(plexClientInformation);`}
          />
        </div>
      </div>
      <div class="overflow-hidden flex flex-col justify-center">
        <p class="text-center">plexLoginInformation</p>
        <CodeBlock
          class="text-start"
          language="JSON"
          code={JSON.stringify(plexLoginInformation, " ", 4)}
        />
      </div>
    </div>
    <div class="xl:grid xl:grid-cols-2 gap-2 flex flex-col">
      <div class="xl:col-span-2">
        <p class="text-center">API Interactions</p>
        <Divider class="m-2 p-2" />
        <TabGroup
          selected={storeTab}
          justify="justify-center"
          highlight="border-accent-500"
          color="text-accent-500"
        >
          <Tab value="Servers/Devices">Servers/Devices</Tab>
          <Tab value="UserData">UserData</Tab>
          <Tab value="Libraries">Libraries</Tab>
        </TabGroup>
        <div class="grid grid-cols-1 gap-2">
          {#if $storeTab === "Servers/Devices"}
            <div class="flex flex-wrap gap-1 justify-center pt-2">
              <div
                class="flex flex-wrap gap-1 justify-center grow overflow-hidden"
              >
                <div class="flex flex-col justify-center">
                  <Button
                    size="xl"
                    background="bg-black"
                    color="text-white"
                    ring="ring-transparent"
                    weight="ring-none"
                    rounded="rounded-full"
                    disabled={plexClientInformation === null}
                    on:click={async () => {
                      commandOutPut = await GetPlexServers(
                        plexClientInformation,
                        plexLoginInformation
                      );
                      plexServers = commandOutPut;
                      console.log(commandOutPut);
                    }}
                  >
                    Get Plex Servers
                  </Button>
                </div>
                <div class="overflow-hidden flex flex-col justify-center">
                  <p class="text-center">Command</p>
                  <CodeBlock
                    class="text-start"
                    language="JavaScript"
                    code={`commandOutPut = await GetPlexServers(
plexClientInformation,
plexLoginInformation
);`}
                  />
                </div>
              </div>
              <div
                class="flex flex-wrap gap-1 justify-center grow overflow-hidden"
              >
                <div class="flex flex-col justify-center">
                  <Button
                    size="xl"
                    background="bg-black"
                    color="text-white"
                    ring="ring-transparent"
                    weight="ring-none"
                    rounded="rounded-full"
                    disabled={plexLoginInformation === null}
                    on:click={async () => {
                      commandOutPut = await GetPlexDevices(
                        plexClientInformation,
                        plexLoginInformation
                      );
                      console.log(commandOutPut);
                    }}
                  >
                    Get Plex Devices
                  </Button>
                </div>

                <div class="overflow-hidden flex flex-col justify-center">
                  <p class="text-center">Command</p>
                  <CodeBlock
                    class="text-start"
                    language="JavaScript"
                    code={`commandOutPut = await GetPlexDevices(
plexClientInformation,
plexLoginInformation
);`}
                  />
                </div>
              </div>
            </div>
          {/if}
          {#if $storeTab === "UserData"}
            <div class="flex-wrap gap-2 flex pt-2">
              <div
                class="flex flex-wrap gap-1 justify-center grow overflow-hidden"
              >
                <div class="flex flex-col justify-center">
                  <Button
                    size="xl"
                    background="bg-black"
                    color="text-white"
                    ring="ring-transparent"
                    weight="ring-none"
                    rounded="rounded-full"
                    disabled={plexLoginInformation === null}
                    on:click={async () => {
                      commandOutPut = await GetPlexUserData(
                        plexClientInformation,
                        plexLoginInformation
                      );
                      console.log(commandOutPut);
                    }}
                  >
                    GetPlexUserData()
                  </Button>
                </div>
                <div class="overflow-hidden flex flex-col justify-center">
                  <p class="text-center">Command</p>
                  <CodeBlock
                    class="text-start"
                    language="JavaScript"
                    code={`commandOutPut = await GetPlexUserData(plexClientInformation, plexLoginInformation);`}
                  />
                </div>
              </div>
            </div>
          {/if}
          {#if $storeTab === "Libraries"}
            <div class="flex flex-wrap gap-1 justify-center pt-2">
              <div
                class="flex flex-wrap gap-1 justify-center grow overflow-hidden"
              >
                <div class="flex flex-col justify-center">
                  <Button
                    size="xl"
                    background="bg-black"
                    color="text-white"
                    ring="ring-transparent"
                    weight="ring-none"
                    rounded="rounded-full"
                    disabled={plexServers === null}
                    on:click={async () => {
                      commandOutPut = await GetPlexLibraries(plexServers);
                      console.log(commandOutPut);
                    }}
                  >
                    GetPlexLibraries()
                  </Button>
                </div>
                <div class="overflow-hidden flex flex-col justify-center">
                  <p class="text-center">Command</p>
                  <CodeBlock
                    class="text-start"
                    language="JavaScript"
                    code={`commandOutPut = await GetPlexLibraries(plexServers)`}
                  />
                </div>
              </div>
              <div
                class="flex flex-wrap gap-1 justify-center grow overflow-hidden"
              >
                <div class="flex flex-col justify-center">
                  <Button
                    size="xl"
                    background="bg-black"
                    color="text-white"
                    ring="ring-transparent"
                    weight="ring-none"
                    rounded="rounded-full"
                    disabled={plexServers === null}
                    on:click={async () => {
                      commandOutPut = await GetPlexMovieLibraries(plexServers);
                      console.log(commandOutPut);
                    }}
                  >
                    GetPlexMovieLibraries()
                  </Button>
                </div>

                <div class="overflow-hidden flex flex-col justify-center">
                  <p class="text-center">Command</p>
                  <CodeBlock
                    class="text-start"
                    language="JavaScript"
                    code={`commandOutPut = await GetPlexMovieLibraries(plexServers)`}
                  />
                </div>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <div class="col-span-2">
        <p class="text-center">Command Output</p>
        <Divider />
        <CodeBlock
          class="text-start"
          language="JSON"
          code={JSON.stringify(commandOutPut, " ", 4)}
        />
      </div>
    </div>
  </div>
</div>
