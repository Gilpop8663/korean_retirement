const CONSTANT = Object.freeze({
  alone: 'ALONE',
  couple: 'COUPLE',
  lifeAge: 100,
});

const ALONE_COST = Object.freeze({
  minimum: {
    seoulMonth: 1_373_000,
    metropolitanMonth: 1_080_000,
    doMonth: 1_130_000,
  },
  proper: {
    seoulMonth: 1_940_000,
    metropolitanMonth: 1_516_000,
    doMonth: 1_606_000,
  },
});

const COUPLE_COST = Object.freeze({
  minimum: {
    seoulMonth: 2_240_000,
    metropolitanMonth: 1_931_000,
    doMonth: 1_860_000,
  },
  proper: {
    seoulMonth: 3_191_000,
    metropolitanMonth: 2_657_000,
    doMonth: 2_523_000,
  },
});

export { CONSTANT, ALONE_COST, COUPLE_COST };
