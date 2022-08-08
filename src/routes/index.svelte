<script>
  import NavBar from "../components/NavBar.svelte";
  import Body from "../components/Body.svelte";
  import sailpoint from "../assets/sailpoint.svg";
  import headshot from "../../src/assets/headshot.jpeg";

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
      startDate: "Jan 2022",
      endDate: "",
      active: true,
    },
    {
      title: "Identity and Access Management Engineer",
      company: "Whole Foods",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Whole_Foods_Market_201x_logo.svg",
      skills: ["PowerShell", "AWS", "Active Directory"],
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
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<NavBar currentPage="Home" />

<Body>
  <div class="px-2 py-2 ">
    <div class="grid grid-cols-6 rounded-lg bg-white py-2 px-2 my-2">
      <div class="px-2 py-2 flex justify-end">
        <img src={headshot} alt="Me" class="rounded-full w-36 h-36" />
      </div>
      <div class=" col-span-4">
        <h1 class=" font-bold mt-4 pl-2">Hey I'm Luke</h1>
        <p class="py-2 px-2">
          I enjoy making things.
          <br />

          This website for example. This is all written in Svelte, I wanted to
          get familiar with it instead of React as it seems like a much more
          entertaining and simpler language to use for personal projects. Now I
          have written Electron Applications and Chrome extensions in React so
          its definitely doable but I am not a huge fan of React, it feels so
          clunky compared to Svelte
        </p>
      </div>
    </div>
    <div class="flex justify-center gap-4 mt-8">
      <a href="https://www.github.com/lukehagar" class="py-2">
        My Personal GitHub:
        <img
          alt="My Personal GitHub Stats"
          class="hover:-translate-y-5 hover:scale-125"
          src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=lukehagar&theme=vue"
        />
      </a>
      <a href="https://www.github.com/luke-hagar-sp" class="py-2">
        My Work GitHub:
        <img
          alt="My Work GitHub Stats"
          class="hover:-translate-y-5 hover:scale-125"
          src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=luke-hagar-sp&theme=vue"
        />
      </a>
    </div>
    <p class="px-2 font-bold mt-8">Previous Experience:</p>
    <div class="py-2 px-2 flex flex-col">
      {#each experiences as experience}
        <div
          class="rounded-2xl my-1 bg-[#607EAA] mx-2 hover:-translate-y-5 hover:shadow-xl hover:border-2 border-1 border-white grow"
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
</Body>
