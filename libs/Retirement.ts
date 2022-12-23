import { ALONE_COST, CONSTANT } from './constant';

class Retirement {
  #target;

  #remainingAge;

  #curYear;

  constructor(target: string, age: number) {
    this.#target = target;
    this.#remainingAge = CONSTANT.lifeAge - age;
    this.#curYear = new Date().getFullYear();
  }

  play() {
    console.log(this.#curYear);
  }

  getMinimumCost() {
    if (this.#target === CONSTANT.alone) {
      ALONE_COST.minimum.seoulMonth * 12 * this.#remainingAge;
    }
    return { seoul: 12, metropolitan: 1, do: 1 };
  }

  getProperCost() {}
}

const retirement = new Retirement(CONSTANT.alone, 27);

retirement.play();

export default Retirement;
