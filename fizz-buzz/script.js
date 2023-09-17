const fizzbuzz = (n) => {
    let array = [];
    
    for (let index = 1; index <= n; index++) {
        const value = (index % 3 === 0 ? "Fizz" : "") + (index % 5 === 0 ? "Buzz" : "");
        array.push(value || index);
    }

    return array;
}

console.log(fizzbuzz(16));