class Example {
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: any, b: any): any {
      return a + b;
    }
  }
  
  const example = new Example();
  console.log(example.add(10, 20)); // Output: 30
  console.log(example.add("Hello, ", "World!"));
export{}