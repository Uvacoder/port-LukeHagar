<script>
  import NavBar from "../components/NavBar.svelte";
  import Body from "../components/Body.svelte";
  import sailpoint from "../sailpoint.svg";
  import title from "../stores/title";

  let experiences = [
    {
      title: "Cloud Support Engineer",
      company: "SailPoint",
      logo: sailpoint,
      skills: [
        "AWS",
        "Azure",
        "Active Directory",
        "JavaScript",
        "React",
        "Svelte",
        "PowerShell",
      ],
      startDate: "",
      endDate: "",
      active: true,
    },
    {
      title: "Identity and Access Management Engineer",
      company: "Whole Foods",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Whole_Foods_Market_201x_logo.svg",
      skills: ["PowerShell", "AWS", "Active Directory"],
      startDate: "",
      endDate: "",
      active: false,
    },
    {
      title: "Senior Technician",
      company: "Whole Foods",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Whole_Foods_Market_201x_logo.svg",
      skills: ["PowerShell", "AWS", "Active Directory"],
      startDate: "",
      endDate: "",
      active: false,
    },
  ];
  title.set("Home");
</script>

<svelte:head>
  <title>{$title}</title>
</svelte:head>

<div class="px-2 py-2 ">
  <div class="lg:grid lg:grid-cols-6 rounded-lg bg-white py-2 lg:px-2">
    <div class="px-2 py-2 flex justify-center lg:justify-end">
      <img
        src={"https://media-exp1.licdn.com/dms/image/C5603AQHP-ZFGPNDbBA/profile-displayphoto-shrink_800_800/0/1640206612663?e=1665619200&v=beta&t=Mhj3gWL9lfhBNk5oepXryDZ8gPpvZEkCK9VwQKHT2lM"}
        alt="Me"
        class="rounded-full w-36 h-36"
      />
    </div>
    <div class=" col-span-4">
      <h1 class=" font-bold mt-4 pl-2">Hey I'm Luke</h1>
      <p class="py-2 px-2">And I enjoy making things.</p>
    </div>
  </div>
  <div class="flex lg:justify-center gap-4 mt-8">
    <a href="https://www.github.com/lukehagar" class="py-2">
      My Personal GitHub:
      <img
        alt="My Personal GitHub Stats"
        class=""
        src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=lukehagar&theme=vue"
      />
    </a>
    <a href="https://www.github.com/luke-hagar-sp" class="py-2">
      My Work GitHub:
      <img
        alt="My Work GitHub Stats"
        class=""
        src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=luke-hagar-sp&theme=vue"
      />
    </a>
  </div>
  <div class="bg-white rounded-xl">
    <p class="px-4 py-4 font-bold mt-8">Previous Experience:</p>
    <div class="py-5 px-2 flex flex-col">
      {#each experiences as experience}
        <div
          class="rounded-2xl my-3 bg-[#607EAA] mx-2 hover:-translate-y-5 hover:translate-x-2 hover:shadow-2xl hover:border-2 border-1 border-white grow"
        >
          <div class="px-4 py-4 flex flex-row justify-between">
            <div>
              <p class="text-white">{experience.title}</p>
              <p class="text-white text-xs">{experience.company}</p>
              <p class="text-white py-2">Skills:</p>
              <div class="flex flex-row justify-between">
                {#each experience.skills.sort() as skill}
                  {#if skill === "Svelte"}
                    <p
                      class="text-white text-bold px-2 mx-1 rounded-md bg-[#ff511a]"
                    >
                      {skill}
                    </p>
                  {:else if skill === "React"}
                    <p
                      class="text-white text-bold px-2 mx-1 rounded-md bg-[#3391ff]"
                    >
                      {skill}
                    </p>
                  {:else if skill === "PowerShell"}
                    <p
                      class="text-white text-bold px-2 mx-1 rounded-md bg-[#012456]"
                    >
                      {skill}
                    </p>
                  {:else if skill === "JavaScript"}
                    <p
                      class="text-black text-bold px-2 mx-1 rounded-md bg-[#f7df1e]"
                    >
                      {skill}
                    </p>
                  {:else if skill === "AWS"}
                    <p
                      class="text-white text-bold px-2 mx-1 rounded-md bg-[#FF9900]"
                    >
                      {skill}
                    </p>
                  {:else if skill === "Azure"}
                    <p
                      class="text-white text-bold px-2 mx-1 rounded-md bg-[#008AD7]"
                    >
                      {skill}
                    </p>
                  {:else}
                    <p
                      class="text-black text-bold px-2 mx-1 rounded-md bg-[#F9F5EB]"
                    >
                      {skill}
                    </p>
                  {/if}
                {/each}
              </div>
            </div>
            <div class="px-4">
              {#if experience.company === "Whole Foods"}
                <img
                  class="w-32 h-32 bg-white rounded-full"
                  src={experience.logo}
                  alt={experience.company}
                />
              {:else}
                <img
                  class="w-64 h-24"
                  src={experience.logo}
                  alt={experience.company}
                />
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
