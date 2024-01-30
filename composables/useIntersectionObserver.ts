export default function useIntersectionObserver(callback, options = { root: null, rootMargin: '0px', threshold: 1.0 }) {
  // TODO: Receive observer as a parameter
  const observerElement = ref(null);
  let observer;

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry);
        }
      });
    }, options);

    if (observerElement.value) {
      observer.observe(observerElement.value);
    }
  });

  onBeforeUnmount(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  return observerElement;
}
