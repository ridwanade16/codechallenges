# Solution Explanation

## Approach
The function `createHelloWorld` is designed to return another function. The returned function, when invoked, will always return the string `"Hello World"`. This is accomplished by the closure created inside `createHelloWorld`. The returned function does not rely on any input arguments and always produces the same output, which satisfies the problem requirement.

## Intuition
The goal of the problem is to return a function that ignores any input arguments and always returns `"Hello World"`. This can be easily achieved by using a higher-order function. By returning a function that simply returns the string `"Hello World"`, we meet the requirement. The arguments passed to the returned function do not affect the result in any way.

## Complexity
- **Time complexity**: $$O(1)$$  
  The function `createHelloWorld` and the returned function each execute in constant time, as there are no loops or recursion.
  
- **Space complexity**: $$O(1)$$  
  The space used by the function does not depend on the input size, and no additional memory is allocated during the execution.

## Code
```typescript
function createHelloWorld() {
  return function(): string {
      return "Hello World";
  };
};

export default createHelloWorld;
