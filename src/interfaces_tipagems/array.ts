function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
}

const numeros = [1, 2, 3, 4, 8];
const strings = ["a", "u", "d", "i"];

console.log(inverterArray(numeros));
console.log(inverterArray(strings));