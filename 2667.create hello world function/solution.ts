function createHelloWorld() {
  return function(): string {
      return "Hello World"
  };
};

export default createHelloWorld