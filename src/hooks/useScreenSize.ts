import { SCREEN_DESKTOP, SCREEN_TABLET, SCREEN_MOBILE } from 'src/constants';

export function useScreenSize() {
  const w = window.innerWidth;
  let screenSize = SCREEN_DESKTOP;

  switch (true) {
    case w <= 576:
      screenSize = SCREEN_MOBILE;
      break;
    case w <= 1200:
      screenSize = SCREEN_TABLET;
      break;
    default:
      screenSize = SCREEN_DESKTOP;
      break;
  }

  return screenSize;
}
