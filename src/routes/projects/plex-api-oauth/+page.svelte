<script>
  import {
    AccordionGroup,
    AccordionItem,
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
  import title from "../../../stores/title";
  title.set("plex-api-oauth");

  let storeTab = new writable("Servers/Devices");
  let storeAccordion = new writable([]);

  let plexClientInformation = null;
  let plexLoginInformation = null;
  let plexServers = null;
  let commandOutPut = null;
</script>

<svelte:head>
  <title>{$title}</title>
</svelte:head>

<div
  class="no-scrollbar bg-surface-900 flex grow flex-col overflow-hidden overflow-y-scroll rounded-xl p-6"
>
  <div class="flex flex-col">
    <div class=" py-10 text-center">
      <h1 class="pb-5 text-center text-4xl">
        {$title}
      </h1>
      <p>
        A Simplified JavaScript ESM Module for interacting with the Plex API
      </p>
      <a
        class="mt-2 text-blue-500 underline"
        href="https://github.com/LukeHagar/plex-api-oauth">Repo</a
      >
    </div>
    <AccordionGroup selected={storeAccordion} multiple>
      <AccordionItem value={0} hover={"hover:bg-accent-500/10"}>
        <svelte:fragment slot="title"
          ><p class="text-center">Get Started</p></svelte:fragment
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
    <div class="mt-4 grid grid-cols-1 justify-center gap-2 p-2">
      <p class="text-center">Client & Auth Information</p>
      <Divider />
      <div class="flex flex-col gap-2 pt-2 xl:grid xl:grid-cols-2">
        <button
          class="col-span-2"
          on:click={() => {
            let input = { product: "LukeHagar.com" };
            plexClientInformation = CreatePlexClientInformation(input);
            console.log(plexClientInformation);
          }}
        >
          CreatePlexClientInformation()
        </button>
        <div class="flex justify-center">
          <div class="flex flex-col justify-center overflow-hidden">
            <p class="text-center">Command:</p>
            <CodeBlock
              class="text-start"
              language="JavaScript"
              code={`let input = {product:"LukeHagar.com"}
plexClientInformation = CreatePlexClientInformation(input);`}
            />
          </div>
        </div>
        <div class="flex flex-col justify-center overflow-hidden">
          <p class="text-center">plexClientInformation</p>
          <CodeBlock
            class="text-start"
            language="JSON"
            code={JSON.stringify(plexClientInformation, " ", 4)}
          />
        </div>
      </div>
      <div class="flex flex-col gap-2 xl:grid xl:grid-cols-2">
        <button
          class="col-span-2"
          on:click={async () => {
            plexLoginInformation = await PlexLogin(plexClientInformation);
            console.log(plexLoginInformation);
          }}
        >
          PlexLogin()
        </button>
        <div class="flex justify-center">
          <div class="flex flex-col justify-center overflow-hidden">
            <p class="text-center">Command:</p>
            <CodeBlock
              class="text-start"
              language="JavaScript"
              code={`plexLoginInformation = PlexLogin(plexClientInformation);`}
            />
          </div>
        </div>
        <div class="flex flex-col justify-center overflow-hidden">
          <p class="text-center">plexLoginInformation</p>
          <CodeBlock
            class="text-start"
            language="JSON"
            code={JSON.stringify(plexLoginInformation, " ", 4)}
          />
        </div>
      </div>
      <div class="flex flex-col gap-2 xl:grid xl:grid-cols-2">
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
              <div class="flex flex-wrap justify-center gap-1 pt-2">
                <div
                  class="flex grow flex-wrap justify-center gap-1 overflow-hidden"
                >
                  <div class="flex flex-col justify-center">
                    <button
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
                    </button>
                  </div>
                  <div class="flex flex-col justify-center overflow-hidden">
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
                  class="flex grow flex-wrap justify-center gap-1 overflow-hidden"
                >
                  <div class="flex flex-col justify-center">
                    <button
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
                    </button>
                  </div>

                  <div class="flex flex-col justify-center overflow-hidden">
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
              <div class="flex flex-wrap gap-2 pt-2">
                <div
                  class="flex grow flex-wrap justify-center gap-1 overflow-hidden"
                >
                  <div class="flex flex-col justify-center">
                    <button
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
                    </button>
                  </div>
                  <div class="flex flex-col justify-center overflow-hidden">
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
              <div class="flex flex-wrap justify-center gap-1 pt-2">
                <div
                  class="flex grow flex-wrap justify-center gap-1 overflow-hidden"
                >
                  <div class="flex flex-col justify-center">
                    <button
                      disabled={plexServers === null}
                      on:click={async () => {
                        commandOutPut = await GetPlexLibraries(plexServers);
                        console.log(commandOutPut);
                      }}
                    >
                      GetPlexLibraries()
                    </button>
                  </div>
                  <div class="flex flex-col justify-center overflow-hidden">
                    <p class="text-center">Command</p>
                    <CodeBlock
                      class="text-start"
                      language="JavaScript"
                      code={`commandOutPut = await GetPlexLibraries(plexServers)`}
                    />
                  </div>
                </div>
                <div
                  class="flex grow flex-wrap justify-center gap-1 overflow-hidden"
                >
                  <div class="flex flex-col justify-center">
                    <button
                      disabled={plexServers === null}
                      on:click={async () => {
                        commandOutPut = await GetPlexMovieLibraries(
                          plexServers
                        );
                        console.log(commandOutPut);
                      }}
                    >
                      GetPlexMovieLibraries()
                    </button>
                  </div>

                  <div class="flex flex-col justify-center overflow-hidden">
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
</div>

<style lang="postcss">
  /* Hide scrollbar for Chrome, Safari and Opera */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
</style>
