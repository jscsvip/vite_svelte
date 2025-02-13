<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut,elasticOut } from 'svelte/easing';
  import { fade,fly } from 'svelte/transition';
  let visible = true;

  const color = tweened("4096ff", {
    duration: 1000,
    interpolate: (a, b) => (t) => {
      const rA = parseInt(a.slice(0, 2), 16);
      const gA = parseInt(a.slice(2, 4), 16);
      const bA = parseInt(a.slice(4, 6), 16);

      const rB = parseInt(b.slice(0, 2), 16);
      const gB = parseInt(b.slice(2, 4), 16);
      const bB = parseInt(b.slice(4, 6), 16);

      const rT = ("0" + Math.round((rB - rA) * t + rA).toString(16)).slice(-2);
      const gT = ("0" + Math.round((gB - gA) * t + gA).toString(16)).slice(-2);
      const bT = ("0" + Math.round((bB - bA) * t + bA).toString(16)).slice(-2);

      return rT + gT + bT;
    }
  });
  const count = tweened(0, {
    duration: 300
  });
  // 动画先慢后快
  const count2 = tweened(0, {
    duration: 300,
    easing: cubicOut
  });

function typewriter(node, { speed = 1 }) {
  const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

  if (!valid) {
    throw new Error(`This transition only works on elements with a single text node child`);
  }

  const text = node.textContent;
  const duration = text.length / (speed * 0.01);

  return {
    duration,
    tick: (t) => {
      const i = ~~(text.length * t);
      node.textContent = text.slice(0, i);
    }
  };
}
  </script>
  <div>
    <label>
      <input type="checkbox" bind:checked={visible}>
      visible
    </label>
    
    {#if visible}
      <div transition:fade>fades in and out</div>
      <div in:fly out:fade>flies in, fades out</div>
        <p in:typewriter={{ speed: 1 }}>The quick brown fox jumps over the lazy dog</p>

    {/if}
  </div>

  <div>
    <button on:click={() => { $count += 0.1;$count2 += 0.1}}>+</button>
    <button on:click={() => { $count -= 0.1;$count2 -= 0.1}}>-</button>
    
    <progress value={$count}></progress>
    <progress value={$count2}></progress>
  </div>
  <div>
    <button on:click={() => { $color = 'ff4d4f'}}>+</button>
    <button on:click={() => { $color = '4096ff'}}>-</button>

    <button style="background-color: #{$color};border:none;padding: 4px 12px;border-radius: 5px;">Colorful Button</button>
  </div>
  