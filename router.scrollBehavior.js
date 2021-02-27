export default function(to, from, savedPosition) {
  const defaultPosition = false;
  const scrollTopPosition = { x: 0, y: 0 };

  let position = defaultPosition;
  console.log({ to, from });
  if (savedPosition) {
    position = savedPosition;
  } else if (to.matched.length < 2) {
    position = scrollTopPosition;
  } else if (to.matched.some(child => child.components.default.options.scrollToTop)) {
    position = scrollTopPosition;
  }

  return new Promise(resolve => {
    window.$nuxt.$once('triggerScroll', () => {
      if (to.hash && document.querySelector(to.hash)) {
        position = { selector: to.hash };
      }

      resolve(position);
    });
  });
}