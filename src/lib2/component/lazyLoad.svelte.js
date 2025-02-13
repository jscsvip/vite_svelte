export function lazyLoadImage(node) {
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
}