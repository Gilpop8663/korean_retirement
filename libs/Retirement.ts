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
    console.log(this.getInterestRateCost(ALONE_COST.minimum.seoulMonth));
  }

  play() {}

  getInterestRateCost(retirementMonth: number) {
    const retirementCost = retirementMonth * CONSTANT.monthsYear;
    return retirementCost / CONSTANT.interestRate;
  }

  calculateCost(cost: number) {
    return this.#fommatter.format(
      Math.min(this.getInterestRateCost(cost), cost * this.#multiplyNumber)
    );
  }

  getMinimumCost() {
    if (this.#target === CONSTANT.alone) {
      const minimum = {
        seoulCost: this.calculateCost(ALONE_COST.minimum.seoulMonth),
        metropolitanCost: this.calculateCost(
          ALONE_COST.minimum.metropolitanMonth
        ),
        doCost: this.calculateCost(ALONE_COST.minimum.doMonth),
      };

      return minimum;
    }
    const minimum = {
      seoulCost: this.calculateCost(COUPLE_COST.minimum.seoulMonth),
      metropolitanCost: this.calculateCost(
        COUPLE_COST.minimum.metropolitanMonth
      ),
      doCost: this.calculateCost(COUPLE_COST.minimum.doMonth),
    };

    return minimum;
  }

  getProperCost() {
    if (this.#target === CONSTANT.alone) {
      const proper = {
        seoulCost: this.calculateCost(ALONE_COST.proper.seoulMonth),
        metropolitanCost: this.calculateCost(
          ALONE_COST.proper.metropolitanMonth
        ),
        doCost: this.calculateCost(ALONE_COST.proper.doMonth),
      };
      return proper;
    }
    const proper = {
      seoulCost: this.calculateCost(COUPLE_COST.proper.seoulMonth),
      metropolitanCost: this.calculateCost(
        COUPLE_COST.proper.metropolitanMonth
      ),
      doCost: this.calculateCost(COUPLE_COST.proper.doMonth),
    };
    return proper;
  }
}

const retirement = new Retirement(CONSTANT.alone, 27);

retirement.play();

export default Retirement;
