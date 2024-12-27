<script>
  // 随机整数
  function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // 包含最小值和最大值
  }

  let todoId = $state(getRandomIntInclusive(1, 100));

  async function getTodo(todoId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const data = await response.json();
    return data;
  }
</script>

<button onclick={() => {
  todoId = getRandomIntInclusive(1, 100)
}}>换一批</button>

{#await getTodo(todoId)}
  loading...
{:then {title = '' }}
  {title}
{:catch error}
  Error
{/await}