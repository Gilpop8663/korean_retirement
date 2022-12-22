class Retirement {
  #target;

  #age;

  #aloneCosts = { seoul: 1 };

  constructor(target: string, age: number) {
    this.#target = target;
    this.#age = age;
  }

  getMinimumCost() {}

  getProperCost() {}
}

export default Retirement;
