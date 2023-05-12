export const wait = (exampleResponseDelay: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, exampleResponseDelay);
  });
