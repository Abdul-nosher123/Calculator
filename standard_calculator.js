



let first_value = "";
let oprator = "";
let waiting_for_second_value = false;

const display = document.querySelector('#display');

window.onload = function () {
    display.value = "";
};

function onclick_write(num) {
    if (waiting_for_second_value) {
        display.value = "";
        waiting_for_second_value = false;

    }
    if (num === '.' && display.value.includes('.')) {
        return;
    };
    if (num === '.' && display.value === '') {
        display.value = '0.';
        return;
    };
    waiting_for_second_value = false;
    display.value += num;
    // console.log(`${num}`);

};
function onclick_oprator(op) {
    if (op === '%') {
        // If display has a value, turn it into a percentage
        if (display.value !== "") {
            display.value = parseFloat(display.value) / 100;
        }
        return; // no need to set operator
    }


    if (first_value === "") {
        first_value = display.value;

    } else if (!waiting_for_second_value) {
        first_value = eval(first_value + oprator + display.value);
        display.value = first_value;
    };



    oprator = op;
    waiting_for_second_value = true;
    // console.log(`${first_value},${oprator},${display.value}`);

};

function onclick_get_answer() {
    if (first_value !== "" && oprator !== "" && !waiting_for_second_value) {
        let result = eval(first_value + oprator + display.value);
        display.value = result;
        first_value = "";
        oprator = "";
    }

};

function onclick_all_clear() {
    display.value = "";

    // console.log(`all value is clear`);

};


function onclick_one_digit_clear() {
    display.value = display.value.slice(0, -1);
    // console.log(`one digit is clear`);

}


let switching_calulator = document.querySelector('#switching_calulator');

switching_calulator.addEventListener('click', function () {
    const drop_down = document.querySelector("#calculator_drop_down");
    drop_down.style.display = drop_down.style.display === "block" ? "none" : "block";
});


document.addEventListener('click', function (event) {
    const switching_button = document.querySelector("#switching_calulator");
    const drop_down = document.querySelector("#calculator_drop_down");
    if (!switching_button.contains(event.target) && !drop_down.contains(event.target)) {
        drop_down.style.display = "none";
    }

});