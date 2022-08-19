<script>
  import { Avatar, Card, Divider } from "@brainandbones/skeleton";
  import sailpoint from "../sailpoint.svg";
  import title from "../stores/title";

  let experiences = [
    {
      title: "Cloud Support Engineer",
      company: "SailPoint",
      logo: sailpoint,
      skills: [
        "Active Directory",
        "JavaScript",
        "React",
        "Svelte",
        "PowerShell",
      ],
      startDate: "Jan 2022",
      endDate: "",
      active: true,
    },
    {
      title: "Identity and Access Management Engineer",
      company: "Whole Foods",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Whole_Foods_Market_201x_logo.svg",
      skills: ["Identity Management", "SQL", "MIM"],
      startDate: "May 2021",
      endDate: "Feb 2022",
      active: false,
    },
    {
      title: "Senior Service Desk Technician",
      company: "Whole Foods",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Whole_Foods_Market_201x_logo.svg",
      skills: ["PowerShell", "AWS", "Active Directory"],
      startDate: "Sep 2019",
      endDate: "May 2021",
      active: false,
    },
  ];
  title.set("Home");
</script>

<svelte:head>
  <title>{$title}</title>
  <meta name="description" content="LukeHagar.com" />
</svelte:head>

<div class="flex flex-wrap justify-center">
  <div class="grid grid-cols-1 justify-center gap-1">
    <div class="flex flex-wrap justify-center">
      <Avatar
        initials="LH"
        src="https://media-exp1.licdn.com/dms/image/C5603AQHP-ZFGPNDbBA/profile-displayphoto-shrink_800_800/0/1640206612663?e=1665619200&v=beta&t=Mhj3gWL9lfhBNk5oepXryDZ8gPpvZEkCK9VwQKHT2lM"
        size="3xl"
        background="bg-surface-500"
        outlined={true}
        hover={true}
      />
      <div class="flex flex-col items-center pt-12 pl-6 ">
        <h1 class="text-center font-bold ">Hey I'm Luke</h1>
        <p class="text-center ">And I enjoy making things.</p>
      </div>
    </div>
    <div class="flex flex-wrap justify-center pt-4">
      <a href="https://www.github.com/lukehagar" class="content-center">
        <img
          alt="My Personal GitHub Stats"
          href="https://www.github.com/lukehagar"
          src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=lukehagar&theme=vue"
        />
      </a>
      <a href="https://www.github.com/luke-hagar-sp" class="content-center">
        <img
          alt="My Work GitHub Stats"
          src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=luke-hagar-sp&theme=vue"
        />
      </a>
    </div>
  </div>
</div>

<div class="rounded-xl pt-8">
  <p class="text-center">Previous Experience</p>
  <Divider />
  <div class="flex flex-wrap gap-3 px-2 pt-4">
    {#each experiences as experience}
      <Card
        background="bg-white"
        color="text-black"
        class="flex grow flex-col gap-2 shadow-2xl"
      >
        <div class=" flex flex-row justify-between">
          <div>
            <p class="text-xl text-black">{experience.title}</p>
            <p class="text-md text-black">{experience.company}</p>
          </div>
          <div class="">
            {#if experience.company === "Whole Foods"}
              <img
                class="h-12 w-12  rounded-full"
                src={experience.logo}
                alt={experience.company}
              />
            {:else}
              <img
                class="h-12 w-32"
                src={experience.logo}
                alt={experience.company}
              />
            {/if}
          </div>
        </div>
        <Divider />
        <p>Description:</p>
        <Divider />
        <div class="flex flex-wrap gap-2">
          <p>Skills:</p>
          {#each experience.skills as skill}
            <p>{skill}</p>
          {/each}
        </div>
      </Card>
    {/each}
  </div>
</div>
