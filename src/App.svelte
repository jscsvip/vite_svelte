<script>
  import svelteLogo from './assets/svelte.svg'
  import InputUpper from './lib/InputUpper.svelte'
  import CounterShow from './lib/CounterShow.svelte'
  import Input from './lib/Input.svelte'
  import Quote from './lib/Quote.svelte'
  import ImgGif from './lib/ImgGif.svelte'
  import RequestImg from './lib/RequestImg.svelte'
  import Runes from './lib/Runes.svelte'
  import TodoList from './lib/TodoList.svelte'
  import Effect from './lib/Effect.svelte'
  import InputModel from './lib/InputModel.svelte'
  import Css from './lib2/Css.svelte'
  import Action from './lib2/Action.svelte'
  import Action2Edit from './lib2/Action2Edit.svelte'
  import Action3DoubleClick from './lib2/Action3DoubleClick.svelte'
  import Action4Modal from './lib2/Action4Modal.svelte'
  import Action5LazyLoadImg from './lib2/Action5LazyLoadImg.svelte'
  import Action6Tooltips from './lib2/Action6Tooltips.svelte'
  import Animation from './lib2/Animation.svelte'
 
  let condition = $state(false) 
  let condition2 = $state(false) 
  // 当父级使用 `bind:` 传递属性的时候，不允许父级传递 undefined。
  let modelValue = $state('1')
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
  <div class="card">
    <h2>动画</h2>
    <Animation />
    <!-- 样式配置 -->
    <h2>css配置</h2>
    <Css />
    <!-- 组件中元素的生命周期控制 -->
    <h2>action事件的生命周期</h2>
    <Action />
    <h2>编辑状态的切换</h2>
    <Action2Edit />
    <h2>双击事件</h2>
    <Action3DoubleClick />
    <h2>弹窗</h2>
    <Action4Modal />
    <h2>懒加载图片</h2>  
    <Action5LazyLoadImg />
    <h2>tooltips</h2>
    <Action6Tooltips />
  </div>

  <div class="card">
    <!-- 父子组件双向绑定 -->
    父组件modelValue:{modelValue}
    <InputModel bind:value={modelValue}/>
    <!-- effect.pre的应用 -->
    <Effect />
    <!-- 代办列表 -->
    <TodoList />
    <!-- svelte5符文的应用 -->
    <Runes />
    <!-- 请求图片组件库 -->
    <div>
      <button onclick={()=>{condition2=!condition2}}>加载网络图片{condition2}</button>  
        {#if condition2}
          <RequestImg /> 
        {/if} 
    </div>
    <!--- 小写转大写 -->
     <InputUpper />
    <!-- 数字展示组件 -->
    <div>
        <button onclick={()=>{condition=!condition}}>显示数字动画{condition}</button>  
        {#if condition}
          <CounterShow />
        {/if}
    </div>
    
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
