export default function useInfiniteScrollObserver(callback, options = { root: null, rootMargin: '0px', threshold: 1.0 }) {
  // TODO: Receive observer as a parameter
  const infiniteScrollObserver = ref(null);
  let observer;

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry);
        }
      });
    }, options);

    if (infiniteScrollObserver.value) {
      observer.observe(infiniteScrollObserver.value);
    }
  });

  onBeforeUnmount(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  return infiniteScrollObserver;
}
