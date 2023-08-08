// String.prototype.toJadenCase = function () {
//   let phrase = this;
//   console.log(phrase);
//   return phrase.map(
//     (elem) => elem[0].toUpperCase() + elem.slice(1, elem.length).toLowerCase()
//   );
// };

// interface String {
//   // Declaration needed, don't remove it
//   toJadenCase(): string;
// }

// "How can mirrors be real if our eyes aren't real".toJadenCase();

export class G964 {
  public static digPow = (n: number, p: number) => {
    let numArr = n.toString().split("");
    let index = p - 1;
    let num = numArr.reduce(
      (value, _value) => Number(_value) ** (index += 1) + value,
      0
    );
    return num % p === 0 ? num / n : -1;
  };
}

console.log(G964.digPow(114, 3));
