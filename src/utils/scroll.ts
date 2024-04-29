export const scrollHref = (ref: any) => {
  if (!ref) return;
  window.scrollTo({
    top: ref.offsetTop,
    left: 0
  });
};

export const scrollTop = () => {
  window.scrollTo({
    top: 0,
    left: 0
  });
};
