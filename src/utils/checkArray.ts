export const handleCheckArrayThree = (index: number, arrayLength: number) => {
  switch (arrayLength % 3) {
    case 1:
      return index > arrayLength - 2;
    case 2:
      return index > arrayLength - 3;
    default:
      return index > arrayLength - 4;
  }
};

export const handleCheckArrayTwo = (index: number, arrayLength: number) => {
  switch (arrayLength % 2) {
    case 1:
      return index > arrayLength - 2;
    default:
      return index > arrayLength - 3;
  }
};

export const checkRowEnd = (divisor: number, index: number, arrayLength: number) => {
  switch (divisor) {
    case 3:
      switch (arrayLength % divisor) {
        case 0:
          return;
        case 1:
          return index >= arrayLength - 3 && index <= arrayLength - 2;
        case 2:
          return index === arrayLength - 3;
        default:
          return;
      }
    case 2:
      switch (arrayLength % divisor) {
        case 1:
          return index === arrayLength - 2;
        default:
          return;
      }
    default:
      break;
  }
};
