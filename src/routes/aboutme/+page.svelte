<script>
  export let data;
  import { Card, Divider } from "@brainandbones/skeleton";

  import sailpoint from "./sailpoint.svg";

  console.log(data);

  let experiences = [
    {
      title: "Cloud Support Engineer",
      company: "SailPoint",
      logo: sailpoint,
      description: "",
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
      description:
        "Designed, implemented, and maintained credential and identity management solutions. Patched, Remediated 1000+ Vulnerabilities on, and Validated hundreds of Virtualized Hosts. Secured and audited all aspects of Users Identity and privileged access across multiple domains and systems",
      skills: ["Identity Management", "SQL", "MIM"],
      startDate: "May 2021",
      endDate: "Feb 2022",
      active: false,
    },
    {
      title: "Senior Service Desk Technician",
      company: "Whole Foods",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Whole_Foods_Market_201x_logo.svg",
      description:
        "Authored or contributed to over 300 knowledge articles, wrote and refined over 200,000 lines of PowerShell, processed more than 15,000 tickets, and oversaw a team of 20+ Technicians",
      skills: ["PowerShell", "AWS", "Active Directory"],
      startDate: "Sep 2019",
      endDate: "May 2021",
      active: false,
    },
  ];
</script>

<svelte:head>
  <title>About Me</title>
</svelte:head>

<div class="flex flex-col">
  <p class="text-center text-white">Previous Experience</p>
  <Divider class="mb-2" />
  <div class=" flex flex-wrap gap-4">
    {#each experiences as experience}
      <Card
        background="bg-surface-900"
        color="text-white"
        class="flex grow flex-col gap-2 shadow-2xl"
      >
        <div class=" flex flex-row justify-between">
          <div>
            <p class="text-xl ">{experience.title}</p>
            <p class="text-md ">{experience.company}</p>
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
        {#if experience.description !== ""}
          <Divider />
          <p>Description:</p>
          <p>{experience.description}</p>
        {/if}
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
