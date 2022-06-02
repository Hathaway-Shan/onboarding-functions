


export function add(x, y) {
    return x + y;
}
export function subtract(x, y) {
    return x - y;
}
export function convertToSeconds(x) {
    return x * 60;
}
export function triangleArea(base, height) {
    return base * height / 2;
}
export function numberSum(a, b) {
    if (add(a, b) < 100) {
        return true; 
    } else {
        return false;
    }
}
export function oddEven(number) {
    if (number % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}