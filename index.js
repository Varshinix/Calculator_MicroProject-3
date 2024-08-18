document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('calci');
    const buttons = document.querySelectorAll('.button');
    const resetButton = document.querySelector('.reset');
    const deleteButton = document.querySelector('.delete');
    const resultButton = document.querySelector('.result');

    display.value = "0";

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.textContent;

            if (value === "RESET") return;
            if (value === "DEL") return;
            if (value === "=") return;

            if (display.value === "0") {
                display.value = value;
            } else if (display.value.length < 7 || !isFinite(value)) {
                display.value += value;
            }
        });
    });

    resetButton.addEventListener('click', function () {
        display.value = "0";
    });

    deleteButton.addEventListener('click', function () {
        display.value = display.value.slice(0, -1) || "0";
    });

    resultButton.addEventListener('click', function () {
        try {
            let result = eval(display.value.replace(/x/g, '*'));

            result = parseFloat(result.toFixed(3));

            display.value = result.toString();
        } catch (e) {
            display.value = "Error";
        }
    });
});
