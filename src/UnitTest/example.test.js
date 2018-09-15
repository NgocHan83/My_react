import ExampleTest from './example';

describe('Example Test', () => {
  it('Add function', () => {
    const exampleTest = new ExampleTest();
    const a = 3;
    const b = 2;
    expect(exampleTest.Add(a,b)).toEqual(5);
  });

  it('Subtract function', () => {
    const exampleTest = new ExampleTest();
    const a = 3;
    const b = 2;
    expect(exampleTest.Subtract(a,b)).toEqual(1);
  });
})