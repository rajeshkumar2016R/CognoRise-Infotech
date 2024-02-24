window.onload = () => {
    let button = document.querySelector('.btn');
    button.addEventListener('click', calculatorBmi);
}

function calculatorBmi() {
    let height = document.querySelector('.height').value;
    let weight = document.querySelector('.weight').value;
    let result = document.querySelector('.result');

    if (!height || isNaN(height) || height < 0) {
        result.innerText = "please enter a valid height";
        return;
    }

    else if (!weight || isNaN(weight) || weight < 0) {
        result.innerText = "please enter a valid weight";
        return;
    }

    else {

        let bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.5) {
            result.innerText = `Underweight : ${bmi}`;
        } else if (bmi > 18.5 && bmi <= 24.9) {
            result.innerText = `Healthy : ${bmi}`;
        } else if (bmi >= 25.0 && bmi < 29.9) {
            result.innerText = `Overweight : ${bmi}`;
        } else if (bmi >= 30.0 && bmi < 34.9) {
            result.innerText = `Obesity (Class I) : ${bmi}`;
        } else if (bmi >= 35.5 && bmi < 39.9) {
            result.innerText = `Obesity (Class II) : ${bmi}`;
        } else {
            result.innerText = `Extreme opacity : ${bmi}`;
        }
    }
}