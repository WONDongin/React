import lodash from "lodash";

const arr = [1, 1, 1, 1, 2, 2, 1, 1, 3, 4, 3, 2] ;
const uniqueArr = lodash.uniqBy(arr);
// uniqBy 메서드 : 중복값 제거하고 반환
console.log(uniqueArr);

/*
import circle from "./circle.js";
console.log(circle.PI, circle.getArea(1), circle.getCircumference(1)); 
*/