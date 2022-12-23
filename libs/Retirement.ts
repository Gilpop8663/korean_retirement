import { ALONE_COST, CONSTANT, COUPLE_COST } from './constant';

class Retirement {
  #target;

  #remainingAge;

  #multiplyNumber;

  constructor(target: string, age: number) {
    this.#target = target;
    this.#remainingAge = CONSTANT.lifeAge - age;
    this.#multiplyNumber = this.#remainingAge * CONSTANT.monthsYear;
  }

  play() {}

  getMinimumCost() {
    if (this.#target === CONSTANT.alone) {
      const minimum = {
        seoulCost: ALONE_COST.minimum.seoulMonth * this.#multiplyNumber,
        metropolitanCost:
          ALONE_COST.minimum.metropolitanMonth * this.#multiplyNumber,
        doCost: ALONE_COST.minimum.doMonth * this.#multiplyNumber,
      };
      const proper = {
        seoulCost: ALONE_COST.proper.seoulMonth * this.#multiplyNumber,
        metropolitanCost:
          ALONE_COST.proper.metropolitanMonth * this.#multiplyNumber,
        doCost: ALONE_COST.proper.doMonth * this.#multiplyNumber,
      };

      return { minimum, proper };
    }
    const minimum = {
      seoulCost: COUPLE_COST.minimum.seoulMonth * this.#multiplyNumber,
      metropolitanCost:
        COUPLE_COST.minimum.metropolitanMonth * this.#multiplyNumber,
      doCost: COUPLE_COST.minimum.doMonth * this.#multiplyNumber,
    };
    const proper = {
      seoulCost: COUPLE_COST.proper.seoulMonth * this.#multiplyNumber,
      metropolitanCost:
        COUPLE_COST.proper.metropolitanMonth * this.#multiplyNumber,
      doCost: COUPLE_COST.proper.doMonth * this.#multiplyNumber,
    };

    return { minimum, proper };
  }

  getProperCost() {}
}

const retirement = new Retirement(CONSTANT.alone, 27);

retirement.play();

export default Retirement;
