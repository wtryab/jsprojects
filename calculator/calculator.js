function keypress(eve){
    if(Number(eve) || eve =="+"|| eve =="="|| eve =="/"|| eve =="*"|| eve =="-"|| eve =="."){
        disp(eve);
    }
}
document.querySelector('.display').innerHTML = localStorage.getItem('calc');
let calc = localStorage.getItem('calc') ;
function setstore(){
    document.querySelector('.display').innerText = calc;
    localStorage.setItem('calc', calc);
}
function disp(num){
    calc+=num;
    setstore();
}
function del(){
    calc='';   
    setstore();
}
function backspace(){
    if (calc != '') {
        calc = calc.slice(0, calc.length-1);
        setstore();
    }
}
