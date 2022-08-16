<script>
  import {
    Button,
    CodeBlock,
    Divider,
    TabGroup,
    Tab,
  } from "@brainandbones/skeleton";

  import {
    PlexLogin,
    CreatePlexClientInformation,
    GetPlexServers,
    GetPlexDevices,
    GetPlexLibraries,
    GetPlexUserData,
  } from "plex-api-oauth";
  import { writable } from "svelte/store";
  import title from "../stores/title";
  title.set("plex-api-oauth");

  let storeTab = new writable("Servers/Devices");

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
  <div class="text-start">
    <CodeBlock
      class="grow"
      language="md"
      code={`1. Generate Client Information
2. Click the Plex Logo
3. ???
4. Profit!!!`}
    />
  </div>
</div>
<div>
  <div class="p-2 mt-4 grid grid-cols-1 gap-2 justify-center">
    <p class="text-center">Client & Auth Information</p>
    <Divider />
    <div class="xl:grid xl:grid-cols-2 gap-2 flex flex-col">
      <div class="flex justify-center">
        <div class="grid grid-cols-1 content-center justify-center">
          <Button
            size="xl:xl sm"
            background="bg-black"
            color="text-white"
            ring="ring-transparent"
            weight="ring-none"
            rounded="rounded-full"
            disabled={false}
            on:click={() => {
              plexClientInformation = CreatePlexClientInformation();
              console.log(plexClientInformation);
            }}
          >
            CreatePlexClientInformation()
          </Button>
        </div>
      </div>
      <div class="overflow-hidden flex flex-col justify-center">
        <p class="text-center">Client information:</p>
        <CodeBlock
          class="text-start"
          language="JSON"
          code={JSON.stringify(plexClientInformation, " ", 4)}
        />
      </div>
    </div>
    <div class="xl:grid xl:grid-cols-2 gap-2 flex flex-col">
      <div class="flex justify-center">
        <div class="grid grid-cols-1 content-center justify-center">
          <Button
            size="xl"
            background="bg-black"
            color="text-white"
            ring="ring-transparent"
            weight="ring-none"
            rounded="rounded-full"
            disabled={plexClientInformation === null}
            on:click={async () => {
              plexLoginInformation = await PlexLogin(plexClientInformation);
              console.log(plexLoginInformation);
            }}
          >
            PlexLogin()
          </Button>
        </div>
      </div>
      <div>
        <p class="text-center">Plex Auth Token:</p>
        <CodeBlock
          class="text-start"
          language="JSON"
          code={JSON.stringify(plexLoginInformation, " ", 4)}
        />
      </div>
    </div>
    <div class="p-2 mt-4 grid grid-cols-2 gap-2">
      <div class="col-span-2">
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
            <div class="flex flex-wrap gap-1 justify-center p-2">
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
          {/if}
          {#if $storeTab === "UserData"}
            <div class="flex flex-wrap gap-1 justify-center p-2">
              <Button
                size="xl"
                background="bg-black"
                color="text-white"
                ring="ring-transparent"
                weight="ring-none"
                rounded="rounded-full"
                disabled={plexClientInformation === null}
                on:click={async () => {
                  commandOutPut = await GetPlexUserData(
                    plexClientInformation,
                    plexLoginInformation
                  );
                  console.log(commandOutPut);
                }}
              >
                Get Plex User Data
              </Button>
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
                Get Plex Libraries
              </Button>
            </div>
          {/if}
          {#if $storeTab === "Libraries"}
            <div class="flex flex-wrap gap-1 justify-center p-2">
              <Button
                size="xl"
                background="bg-black"
                color="text-white"
                ring="ring-transparent"
                weight="ring-none"
                rounded="rounded-full"
                disabled={plexClientInformation === null}
                on:click={async () => {
                  commandOutPut = await GetPlexUserData(
                    plexClientInformation,
                    plexLoginInformation
                  );
                  console.log(commandOutPut);
                }}
              >
                Get Plex User Data
              </Button>
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
                Get Plex Libraries
              </Button>
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
