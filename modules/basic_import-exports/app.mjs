import { PI, num_del,num_eq, num_sum, num_minus } from "./mathUtils.mjs";

const [a, b] = [4, 7];

const S = PI * a ** 2;

console.log(S);

console.table([num_del(a, b), num_eq(a, b), num_sum(a, b), num_minus(a, b)]);