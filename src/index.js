module.exports = function toReadable(number) {

    const ones = {
        0: "zero",
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: "twelve",
        13: "thirteen",
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    }

    const tens = {
        1: "ten",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety"
    }

    const hundreds = {
        1: "one hundred",
        2: "two hundred",
        3: "three hundred",
        4: "four hundred",
        5: "five hundred",
        6: "six hundred",
        7: "seven hundred",
        8: "eight hundred",
        9: "nine hundred"
    }

    const numStr = number.toString();

    return conversion(numStr);

    function conversion(num) {
        if (num.length === 1 || num.length === 2 && +num < 20) {
            return ones[num];
        }

        if (+num < 100) {
            return toTens(num);
        }

        function toTens(num) {
            num = num.toString();
            if (num.length === 2 && +num > 19) {
                if (+num % 10 === 0) {
                    return tens[num[0]];
                } else {
                    return `${tens[num[0]]} ${ones[num[1]]}`;
                }
            } else {
                return conversion(num);
            }
        }

        if (num.length === 3) {
            if (+num % 100 === 0) {
                return hundreds[num[0]];
            } else {
                return `${hundreds[num[0]]} ${toTens(+num.slice(-2))}`;
            }
        }
    }
}