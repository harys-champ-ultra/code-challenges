const missingNos = (list, k) => {
    const n = list.length + k;
    const missingNumbers = [];

    for (let index = 1; index <= n; index++) {
        if (!list.includes(index)) {
            missingNumbers.push(index);
        }
    }

    return missingNumbers;
}

const list = [1, 2, 4, 5, 6, 7, 8, 10];
const k = 2;
console.log(missingNos(list, k));
