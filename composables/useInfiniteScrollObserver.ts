/**
 * Custom Vue composition function for infinite scrolling.
 *
 * This function creates an IntersectionObserver that triggers a callback function when the observed element intersects with the viewport.
 * The IntersectionObserver is created when the component is mounted and is disconnected when the component is unmounted.
 *
 * @param {Function} callback - The function to call when the observed element intersects with the viewport. The function receives the IntersectionObserverEntry as a parameter.
 * @param {Object} options - The options for the IntersectionObserver. Defaults to { root: null, rootMargin: '0px', threshold: 1.0 }.
 * @returns {Ref<Element>} A ref to the element to be observed. This ref should be attached to the element in the template.
 */
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
