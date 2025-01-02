<script>
  import { onMount } from 'svelte';
  let src = $state("https://placehold.co/200");

  onMount(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`https://api.thecatapi.com/v1/images/search`, { signal })
      .then(response => response.json())
      .then(([{url}]) => { src = url });
    // 如果组件没加载完就销毁则取消请求
    return () => {
      controller.abort();
    }
  });
</script>

<img {src} alt="cat" style="width: 200px;" />