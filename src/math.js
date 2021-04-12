//function 1

export function pow(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else if (exponent < 0) {
        return 1 / base * pow(1 / base, -exponent - 1)
    }
    return base * pow(base, exponent - 1);
}


//function 2

export function hypotenuse(adjacent, opposite) {
    const hypotenuse = Math.sqrt(adjacent ** 2 + opposite ** 2);
    return {
        adjacent: +adjacent,
        opposite: +opposite,
        hypotenuse: hypotenuse
    }
}


//function 3
//the required constant 
const PI = 3.14;

export function circleArea(radius) {
    //A = π r²
    return PI * (radius ** 2);
}