<script>
  import svelteLogo from './assets/svelte.svg'
  import InputUpper from './lib/InputUpper.svelte'
  import CounterShow from './lib/CounterShow.svelte'
  import Input from './lib/Input.svelte'
  import Quote from './lib/Quote.svelte'
  import ImgGif from './lib/ImgGif.svelte'
</script>

<main>
  <div>
    <a href="https://vite.dev" target="_blank" rel="noreferrer">
      <!-- <img src={viteLogo} class="logo" alt="Vite Logo" /> -->
      <ImgGif />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte
  </h1>
  <InputUpper />
  <div class="card">
    <!-- 数字展示组件 -->
    <CounterShow />
    <!-- 名言组件 -->
    <Quote />
    <!-- url不能用双引号 会导致fetch报错 -->
    <!-- 懒加载 -->
    {#await import('./lib/Counter.svelte') then { default: Counter }}
      <Counter btnName="Click me" url='http://jsonplaceholder.typicode.com/posts' onChange={(e,count)=>{
        console.log(e,count)
      }}/>
    {/await}
   
    <!-- 传值 -->
    <Input initVal={11}/>
  </div>

  
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
