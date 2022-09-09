//generic functions
function getItems<Type>(items: Type[]) : Type[] {
    return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([1,2,3,4,5]);
console.log(concatResult);