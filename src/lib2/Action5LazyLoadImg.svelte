<script>
  import { lazyLoadImage } from './component/lazyLoad.svelte.js'
</script>
<div style="height: 200px;overflow-y: auto;">
  {#each [...Array(5).keys()] as _}
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati ex totam laboriosam, culpa ipsa quis nostrum odio dolore aut eos numquam ratione quam maiores voluptates quas eius labore error?
  </p>

{/each}

<img use:lazyLoadImage width="400px" data-src="https://cn.bing.com/th?id=OHR.UmbrellaDay_ZH-CN8024305066_UHD.jpg&pid=hp&w=1920" alt="">
</div>
