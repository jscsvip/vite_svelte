<script>
  import Button from './component/Button.svelte'

  let count = $state(0);

</script>
<!-- 父组件传入属性值修改子组件的css样式 -->
<Button --bg-color="#4096ff" --color="#fff">Primary Button</Button>

<Button --bg-color="#fff" --color="#000">Default Button</Button>

<div>
  <button onclick={() => {
    count += 1;
  }}>
    Click 点击2下变色
  </button>
  <!-- 动态绑定css样式 写法1-->
  <p style="color: { count > 1 ? 'red' : 'green'}">{count}</p>
  <!-- 动态绑定css样式 写法2-->
  <p style:color={count > 1 ? 'red' : 'green'}>{count}</p>
  <!-- 动态绑定css类名 写法1-->
  <p class="{count > 1 ? 'danger' : 'safe'}">{count}</p>
  <!-- 动态绑定css类名 写法2export function lazyLoadImage(node) {
  $effect(() => {
    const src = node.getAttribute("data-src");
    let intersecting = false;

    const handleIntersection = (entries) => {
      intersecting = entries[0].isIntersecting;
      if (entries[0].intersectionRatio > 0) {
        node.src = src;
      }
      if (intersecting) {
        observer.unobserve(node);
      }
    };

    const observer = new IntersectionObserver(handleIntersection);

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  });
}-->
  <p
    class:danger={count > 1}
    class:safe={count <= 1}
  >{count}</p>
</div>


<style>
  .danger {color: red}
  .safe {color: green}
</style>