<script>
  import { Avatar, Divider, Logo, LogoCloud } from "@brainandbones/skeleton";
  import { Card } from "@brainandbones/skeleton";
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
</svelte:head>

<div class="flex flex-wrap justify-center">
  <div class="grid grid-cols-1 gap-1 justify-center">
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
        <h1 class="font-bold text-center ">Hey I'm Luke</h1>
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
  <div class="pt-4 px-2 flex flex-wrap gap-3">
    {#each experiences as experience}
      <Card
        background="bg-white"
        color="text-black"
        class="shadow-2xl grow flex flex-col gap-2"
      >
        <div class=" flex flex-row justify-between">
          <div>
            <p class="text-black text-xl">{experience.title}</p>
            <p class="text-black text-md">{experience.company}</p>
          </div>
          <div class="">
            {#if experience.company === "Whole Foods"}
              <img
                class="w-12 h-12  rounded-full"
                src={experience.logo}
                alt={experience.company}
              />
            {:else}
              <img
                class="w-32 h-12"
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
