var einp = document.getElementById('inp');
var eeinp = 0
function clickbt(num) {
    einp.value = einp.value + num;
    eeinp = eeinp + num;
}
function add() {
    if(einp.value.includes('+')) {
        einp.value = einp.value;
    }
    else if(einp.value.includes('-')) {
        einp.value = einp.value;
    }
    else if(einp.value.includes('*')) {
        einp.value = einp.value;
    }
    else if(einp.value.includes('/')) {
        einp.value = einp.value;
    }
    else {
        einp.value = einp.value + '+';
    }
    eeinp = 0
}
function sub() {
    if(einp.value.includes('+')) {
        einp.value = einp.value;
    }
    else if(einp.value.includes('-')) {
        einp.value = einp.value;
    }
    else if(einp.value.includes('*')) {
        einp.value = einp.value;
    }
    else if(einp.value.includes('/')) {
        einp.value = einp.value;
    }
    else {
        einp.value = einp.value + '-';
    }
    eeinp = 0
}
function mul() {
    if(einp.value.includes('+')) {
        einp.value = einp.value;
    }
    else if(einp.value.includes('-')) {
        einp.value = einp.value;
    }
    else if(einp.value.includes('*')) {
        einp.value = einp.value;
    }
    else if(einp.value.includes('/')) {
        einp.value = einp.value;
    }
    else {
        einp.value = einp.value + '*';
    }
    eeinp = 0
}
function div() {
    if(einp.value.includes('+')) {
        einp.value = einp.value;
    }
    else if(einp.value.includes('-')) {
        einp.value = einp.value;
    }
    else if(einp.value.includes('*')) {
        einp.value = einp.value;
    }
    else if(einp.value.includes('/')) {
        einp.value = einp.value;
    }
    else {
        einp.value = einp.value + '/';
    }
    eeinp = 0
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
}
function getcount() {
    if(einp.value.includes("+")) {
        einp.value = parseFloat(einp.value) + parseFloat(eeinp);
    }
    else if(einp.value.includes("-")) {
        einp.value = parseFloat(einp.value) - parseFloat(eeinp);
    }
    else if(einp.value.includes("*")) {
        einp.value = parseFloat(einp.value) * parseFloat(eeinp);
    }
    else if(einp.value.includes("/")) {
        einp.value = parseFloat(einp.value) / parseFloat(eeinp);
    }
}