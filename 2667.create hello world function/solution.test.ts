import createHelloWorld from './solution';

describe('createHelloWorld', () => {
  it('should return "Hello World" when called with any arguments', () => {
    const helloWorld = createHelloWorld();
    const result = helloWorld();

    expect(result).toBe('Hello World');
  });
});
