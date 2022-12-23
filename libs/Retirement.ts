import { ALONE_COST, CONSTANT } from './constant';

class Retirement {
  #target;

  #remainingAge;

  #curYear;

  /*
  최소 부부 기준
  1차 : 8.29
  2차 : 9.71
  3차 : 7.63
  4차 : 20.21
  5차 : 8.03
  6차 : 2.21
  7차 : 13.07

  최소 개인 기준
    1차 : 8.29
  2차 : 9.71
  3차 : 7.63
  4차 : 20.21
  5차 : 8.03
  6차 : 2.21
  7차 : 13.07
  */

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
