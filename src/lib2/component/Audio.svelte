<script context="module">
  let current;
</script>

<button on:click={(e) => {
  e.currentTarget.textContent = '播放中'
  if (e.currentTarget !== current) {
    if (current) current.textContent = '播放'
    current = e.currentTarget;
  }

}}>播放</button>