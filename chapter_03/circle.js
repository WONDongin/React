const PI = 3.141592;

function getArea(radius) {
    return PI * radius * radius;
    //반지름으로 원의 넓이 계산
}
function getCircumference(radius) {
    return 2 * PI * radius;
    //반지름으로 원의 둘레 길이 반환
}
// 내보내기
export default { PI, getArea, getCircumference };