//alert('테스트')

var body = document.getElementById('gradient');//바디태그
var color1 = document.querySelector('.color1');//컬러입력창1
var color2 = document.querySelector('.color2');//컬러입력창2
var h3 = document.querySelector('h3');         //빈태그 h3

//이벤트 연결
//익명함수 활용
//color1.addEventListener('input', function () {
//body.style.background = " linear-gradient(to right," + color1.value + "," + color2.value + ")"
//h3.textContent = body.style.background;

//})//컬러1의 색깔이 바뀌면 함수가 수행된다.
//color2.addEventListener('input', function () {
// body.style.background = " linear-gradient(to right," + color1.value + "," + color2.value + ")"
//h3.textContent = body.style.background;

//})
//함수활용
color1.addEventListener('input', grad);

color2.addEventListener('input', grad);


function grad() {
    body.style.background = " linear-gradient(to right," + color1.value + "," + color2.value + ")"
    h3.textContent = body.style.background;
}