<script>
  import Body from "../../components/Body.svelte";
  import title from "../../stores/title";
  title.set("Blog");
  export let posts;
</script>

<Body>
  <div class="py-4 px-2">
    <div class="px-4 py-4 rounded-xl bg-white">
      <h1 class="px-2 py-2">Posts:</h1>
      <div class="grid grid-cols-4 gap-4 ">
        {#each posts as post}
          <a href={post.path}>
            <div class="bg-[#607EAA] rounded-xl grid grid-rows-2">
              <div class="pt-3 px-4 flex flex-row">
                <p class="text-xl text-white ">{post.title} -</p>
                <p class=" text-white pl-1 pt-1">{post.author} -</p>
                <p class=" text-white pl-1 pt-1">{post.date}</p>
              </div>
              <div class=" mb-2 mx-2 rounded-xl bg-white">
                <div class="flex flex-row py-2">
                  <p class=" text-black pl-2">Tags:</p>
                  {#each post.tags as tag}
                    <p class=" text-black px-2 ">
                      {tag}
                    </p>
                  {/each}
                </div>
              </div>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </div>
</Body>
