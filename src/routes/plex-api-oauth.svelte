<script>
  import { Button, CodeBlock, Divider } from "@brainandbones/skeleton";
  import {
    PlexLogin,
    CreatePlexClientInformation,
    GetPlexServers,
    GetPlexDevices,
    GetPlexLibraries,
    GetPlexUserData,
  } from "plex-api-oauth";
  import title from "../stores/title";
  title.set("plex-api-oauth");

  let plexClientInformation = null;
  let plexLoginInformation = null;
  let plexServers = null;
  let commandOutPut = null;
</script>

<svelte:head>
  <title>{$title}</title>
</svelte:head>

<div class="prose max-w-none text-center">
  <h1 class="text-center">{$title}</h1>

  <a href="https://github.com/LukeHagar/plex-api-oauth">Repo</a>

  <p>Alright so this project has been kinda awesome</p>
  <p>I have gotten to write a LOT of functional code and its been a hoot</p>
  <p>
    SO I figured the best way to present it was to give you an interactive
    API-OAuth Explorer to use
  </p>

  <div class="text-start">
    <CodeBlock
      language="md"
      code={`1. Generate Client Information
2. Click the Plex Logo
3. ???
4. Profit!!!`}
    />
  </div>
  <div class="p-2 grid grid-cols-2 gap-2 justify-center">
    <div>
      <Button
        size="xl"
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
        Generate Client Information
      </Button>
      <p class="text-center">Client information:</p>
      <CodeBlock
        class="text-start"
        language="JSON"
        code={JSON.stringify(plexClientInformation, " ", 4)}
      />
    </div>
    <div>
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
        Plex Login
      </Button>
      <div class="text-start">
        <p class="text-center">Plex Auth Token:</p>
        <CodeBlock
          language="JSON"
          code={JSON.stringify(plexLoginInformation, " ", 4)}
        />
      </div>
    </div>
    {#if plexLoginInformation !== null && plexClientInformation !== null}
      <div class="col-span-2">
        <p>API Interactions</p>
        <Divider />
        <div class="grid grid-cols-2 gap-2">
          <div class="flex flex-col gap-1">
            <p>1. Servers/Devices</p>
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
          <div class="flex flex-col gap-1">
            <p>2. User Data / Libraries</p>
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
        </div>
      </div>
    {/if}
    {#if plexLoginInformation !== null && plexClientInformation !== null}
      <div class="col-span-2">
        <p>Command Output</p>
        <Divider />
        <CodeBlock
          class="text-start"
          language="JSON"
          code={JSON.stringify(commandOutPut, " ", 4)}
        />
      </div>
    {/if}
  </div>
</div>
