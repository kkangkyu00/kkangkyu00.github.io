import { RefObject, useState, useEffect } from 'react';

interface ObserverProps extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  { threshold, root, rootMargin, freezeOnceVisible }: ObserverProps
) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const updateEntry = ([e]: IntersectionObserverEntry[]): void => {
    setEntry(e);
  };

  useEffect(() => {
    const node = elementRef?.current;
    const frozen = entry?.isIntersecting && freezeOnceVisible;

    if (frozen || !node) return;
    const observer = new IntersectionObserver(updateEntry, { threshold, root, rootMargin });
    observer.observe(node);

    // eslint-disable-next-line consistent-return
    return () => observer.disconnect();
  }, [elementRef, entry?.isIntersecting, freezeOnceVisible, root, rootMargin, threshold]);
  return entry;
};

export default useIntersectionObserver;
