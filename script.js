var einp = document.getElementById('inp');
var cal_num = "";
var last_status = ""; //紀錄上一個加減乘除狀態
var result = 0.0; // 目前的答案
var check_status = true; // 紀錄上一個是否按符號運算(+-*/)的狀態


function state_calculate(){

   if(last_status == "") {
        result = cal_num;
   }
   else if(last_status == "+") {
        result += cal_num;
   }
   else if(last_status == "-") {
        result -= cal_num;
   }
   else if(last_status == "*") {
        result *= cal_num;
   }
   else if(last_status == "/") {
        result /= cal_num;
   }
}

function clickbt(num) {
    if (check_status){
        einp.value += num; //同等 einp.value = einp.value + num;
    }
    else{
        einp.value = ""
        einp.value += num; 
        check_status = true; //上一個不是按符號運算 check_status = true解除
    }
    
}

function operation(operator) {
    if (einp.value != ""){
        cal_num = parseFloat(einp.value);
        state_calculate();
        last_status = operator;
        einp.value = result;
        check_status = false; //符號運算 
    }
}

function dot() {
    if(einp.value.includes('.')) {
        einp.value = einp.value;
    }
    else {
        einp.value = einp.value + '.';
    }
}

function allclear() {
    einp.value = '';
    cal_num = "";
    result = 0;
}
