import { ALONE_COST, CONSTANT, COUPLE_COST } from './constant';

class Retirement {
  #target;

  #remainingAge;

  #multiplyNumber;

  #fommatter;

  constructor(target: string, age: number) {
    console.log(target, age);
    this.#target = target;
    this.#remainingAge = CONSTANT.lifeAge - age;
    this.#multiplyNumber = this.#remainingAge * CONSTANT.monthsYear;
    this.#fommatter = new Intl.NumberFormat('ko', {
      style: 'currency',
      currency: 'krw',
      compactDisplay: 'short',
      notation: 'compact',
    });
  }

  play() {}

  getMinimumCost() {
    if (this.#target === CONSTANT.alone) {
      const minimum = {
        seoulCost: this.#fommatter.format(
          ALONE_COST.minimum.seoulMonth * this.#multiplyNumber
        ),
        metropolitanCost: this.#fommatter.format(
          ALONE_COST.minimum.metropolitanMonth * this.#multiplyNumber
        ),
        doCost: this.#fommatter.format(
          ALONE_COST.minimum.doMonth * this.#multiplyNumber
        ),
      };

      return minimum;
    }
    const minimum = {
      seoulCost: this.#fommatter.format(
        COUPLE_COST.minimum.seoulMonth * this.#multiplyNumber
      ),
      metropolitanCost: this.#fommatter.format(
        COUPLE_COST.minimum.metropolitanMonth * this.#multiplyNumber
      ),
      doCost: this.#fommatter.format(
        COUPLE_COST.minimum.doMonth * this.#multiplyNumber
      ),
    };

    return minimum;
  }

  getProperCost() {
    if (this.#target === CONSTANT.alone) {
      const proper = {
        seoulCost: this.#fommatter.format(
          ALONE_COST.proper.seoulMonth * this.#multiplyNumber
        ),
        metropolitanCost: this.#fommatter.format(
          ALONE_COST.proper.metropolitanMonth * this.#multiplyNumber
        ),
        doCost: this.#fommatter.format(
          ALONE_COST.proper.doMonth * this.#multiplyNumber
        ),
      };
      return proper;
    }
    const proper = {
      seoulCost: this.#fommatter.format(
        COUPLE_COST.proper.seoulMonth * this.#multiplyNumber
      ),
      metropolitanCost: this.#fommatter.format(
        COUPLE_COST.proper.metropolitanMonth * this.#multiplyNumber
      ),
      doCost: this.#fommatter.format(
        COUPLE_COST.proper.doMonth * this.#multiplyNumber
      ),
    };
    return proper;
  }
}

const retirement = new Retirement(CONSTANT.alone, 27);

retirement.play();

export default Retirement;
