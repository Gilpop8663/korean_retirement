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

  getMinimumCost() {
    if (this.#target === CONSTANT.alone) {
      const minimum = {
        seoulCost: this.#fommatter.format(
          Math.min(
            this.getInterestRateCost(ALONE_COST.minimum.seoulMonth),
            ALONE_COST.minimum.seoulMonth * this.#multiplyNumber
          )
        ),
        metropolitanCost: this.#fommatter.format(
          Math.min(
            this.getInterestRateCost(ALONE_COST.minimum.metropolitanMonth),
            ALONE_COST.minimum.metropolitanMonth * this.#multiplyNumber
          )
        ),
        doCost: this.#fommatter.format(
          Math.min(
            this.getInterestRateCost(ALONE_COST.minimum.doMonth),
            ALONE_COST.minimum.doMonth * this.#multiplyNumber
          )
        ),
      };

      return minimum;
    }
    const minimum = {
      seoulCost: this.#fommatter.format(
        Math.min(
          this.getInterestRateCost(COUPLE_COST.minimum.seoulMonth),
          COUPLE_COST.minimum.seoulMonth * this.#multiplyNumber
        )
      ),
      metropolitanCost: this.#fommatter.format(
        Math.min(
          this.getInterestRateCost(COUPLE_COST.minimum.metropolitanMonth),
          COUPLE_COST.minimum.metropolitanMonth * this.#multiplyNumber
        )
      ),
      doCost: this.#fommatter.format(
        Math.min(
          this.getInterestRateCost(COUPLE_COST.minimum.doMonth),
          COUPLE_COST.minimum.doMonth * this.#multiplyNumber
        )
      ),
    };

    return minimum;
  }

  getProperCost() {
    if (this.#target === CONSTANT.alone) {
      const proper = {
        seoulCost: this.#fommatter.format(
          Math.min(
            this.getInterestRateCost(ALONE_COST.proper.seoulMonth),
            ALONE_COST.proper.seoulMonth * this.#multiplyNumber
          )
        ),
        metropolitanCost: this.#fommatter.format(
          Math.min(
            this.getInterestRateCost(ALONE_COST.proper.metropolitanMonth),
            ALONE_COST.proper.metropolitanMonth * this.#multiplyNumber
          )
        ),
        doCost: this.#fommatter.format(
          Math.min(
            this.getInterestRateCost(ALONE_COST.proper.doMonth),
            ALONE_COST.proper.doMonth * this.#multiplyNumber
          )
        ),
      };
      return proper;
    }
    const proper = {
      seoulCost: this.#fommatter.format(
        Math.min(
          this.getInterestRateCost(COUPLE_COST.proper.seoulMonth),
          COUPLE_COST.proper.seoulMonth * this.#multiplyNumber
        )
      ),
      metropolitanCost: this.#fommatter.format(
        Math.min(
          this.getInterestRateCost(COUPLE_COST.proper.metropolitanMonth),
          COUPLE_COST.proper.metropolitanMonth * this.#multiplyNumber
        )
      ),
      doCost: this.#fommatter.format(
        Math.min(
          this.getInterestRateCost(COUPLE_COST.proper.doMonth),
          COUPLE_COST.proper.doMonth * this.#multiplyNumber
        )
      ),
    };
    return proper;
  }
}

const retirement = new Retirement(CONSTANT.alone, 27);

retirement.play();

export default Retirement;
