import {
  ALONE_COST,
  COUPLE_COST,
  SERVICE_NUMBER,
  SERVICE_STRING,
} from 'constant';

class Retirement {
  #target;

  #remainingAge;

  #multiplyNumber;

  #fommatter;

  #category;

  #isRich;

  constructor(target: string, age: number, score: number, richCount: number) {
    this.#target = target;
    this.#remainingAge = SERVICE_NUMBER.lifeAge - age;
    this.#multiplyNumber = this.#remainingAge * SERVICE_NUMBER.monthsYear;
    this.#fommatter = new Intl.NumberFormat('ko', {
      style: 'currency',
      currency: 'krw',
      compactDisplay: 'short',
      notation: 'compact',
    });
    this.#category = this.calculateCategory(score);
    this.#isRich = richCount === SERVICE_NUMBER.richCount ? true : false;
    console.log(richCount);
  }

  calculateCategory(score: number) {
    // 1 * 4  최소는 4부터 6까지 4,5,6
    // 2 * 4 적정은 8부터 10까지 7,8,9,
    // 3 * 4 호화는 10부터 12까지 10,11,12
    console.log('점수 : ', score);

    if (score < SERVICE_NUMBER.scoreMinimum) {
      return SERVICE_STRING.minimum;
    }
    if (score < SERVICE_NUMBER.scoreProper) {
      return SERVICE_STRING.proper;
    }
    return SERVICE_STRING.luxury;
  }

  play() {}

  getInterestRateCost(retirementMonth: number) {
    const retirementCost = retirementMonth * SERVICE_NUMBER.monthsYear;
    return retirementCost / SERVICE_NUMBER.interestRate;
  }

  calculateCost(cost: number) {
    return this.#fommatter.format(
      Math.min(this.getInterestRateCost(cost), cost * this.#multiplyNumber)
    );
  }

  getCategory() {
    if (this.#isRich) {
      return this.getRichCategory();
    }
    return this.#category;
  }

  getKoreanCategory() {
    if (this.#isRich) {
      return this.getRichCategory();
    }
    if (this.#category === SERVICE_STRING.minimum) {
      return SERVICE_STRING.koreanMinimum;
    }
    if (this.#category === SERVICE_STRING.proper) {
      return SERVICE_STRING.koreanProper;
    }
    return SERVICE_STRING.koreanluxury;
  }

  getRichCategory() {
    const randomNumber = Math.random() * 4;
    if (randomNumber < 1) {
      return SERVICE_STRING.stock;
    }
    if (randomNumber < 2) {
      return SERVICE_STRING.realEstate;
    }
    if (randomNumber < 3) {
      return SERVICE_STRING.virtualCurrency;
    }
    return SERVICE_STRING.business;
  }

  getLuxuryCost() {
    if (this.#target === SERVICE_STRING.alone) {
      const luxury = {
        seoulCost: this.calculateCost(ALONE_COST.luxury.seoulMonth),
        metropolitanCost: this.calculateCost(
          ALONE_COST.luxury.metropolitanMonth
        ),
        doCost: this.calculateCost(ALONE_COST.luxury.doMonth),
      };

      return luxury;
    }
    const luxury = {
      seoulCost: this.calculateCost(COUPLE_COST.luxury.seoulMonth),
      metropolitanCost: this.calculateCost(
        COUPLE_COST.luxury.metropolitanMonth
      ),
      doCost: this.calculateCost(COUPLE_COST.luxury.doMonth),
    };

    return luxury;
  }

  getMinimumCost() {
    if (this.#target === SERVICE_STRING.alone) {
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
    if (this.#target === SERVICE_STRING.alone) {
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

const retirement = new Retirement(SERVICE_STRING.alone, 27, 3, 4);

retirement.play();

export default Retirement;
