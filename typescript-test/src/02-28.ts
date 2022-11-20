function arrayConcat2<T>(items1: T[], items2: T[]) : T[] {
    return items1.concat(items2);
}           // 제네릭을 적용한 함수
let arr2 = arrayConcat2<number>([10, 20, 30], [40, 50])
arr1.push("hello");           // 명시적 에러 발생