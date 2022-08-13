<script>
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
      title: "Senior Service Desk Technician",
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
  <div
    class="lg:grid lg:grid-cols-6 rounded-lg bg-white py-2 hover:shadow-2xl lg:px-2"
  >
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
  <div class="flex flex-wrap justify-center">
    <a href="https://www.github.com/lukehagar" class="py-4">
      <img
        alt="My Personal GitHub Stats"
        class=""
        href="https://www.github.com/lukehagar"
        src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=lukehagar&theme=vue"
      />
    </a>
    <a href="https://www.github.com/luke-hagar-sp" class="py-2">
      <img
        alt="My Work GitHub Stats"
        class=""
        src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=luke-hagar-sp&theme=vue"
      />
    </a>
  </div>
  <div class="bg-[#EAE3D2] rounded-xl">
    <p class="px-4 py-4 text-center">Previous Experience</p>
    <div class=" px-2 flex flex-col">
      {#each experiences as experience}
        <div class="my-2 rounded-2xl bg-white hover:shadow-2xl grow">
          <div class="px-4 py-4 flex flex-row justify-between">
            <div>
              <p class="text-black text-xs">{experience.title}</p>
              <p class="text-black text-xs">{experience.company}</p>

              <div class="hidden lg:flex justify-between pt-2">
                <p class="text-black">Skills:</p>
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
        </div>
      {/each}
    </div>
  </div>
</div>
