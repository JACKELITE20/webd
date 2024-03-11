// script.js

document.getElementById('btn').addEventListener('click', calculateBMI);

function calculateBMI() {
    var heightInput = document.getElementById('height');
    var weightInput = document.getElementById('weight');
    var heightError = document.getElementById('height_error');
    var weightError = document.getElementById('weight_eror');
    var output = document.getElementById('output');

    // Reset error messages
    heightError.textContent = '';
    weightError.textContent = '';

    // Validate height and weight inputs
    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);

    if (isNaN(height) || height <= 0) {
        heightError.textContent = 'Please enter a valid height.';
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        weightError.textContent = 'Please enter a valid weight.';
        return;
    }

    // Calculate BMI
    var bmi = weight / ((height / 100) * (height / 100));

    // Display the result
    output.textContent = 'Your BMI is: ' + bmi.toFixed(2);

    // Determine the classification
    var classification;
    if (bmi < 16) {
        classification = 'Severe Thinness';
    } else if (bmi < 17) {
        classification = 'Moderate Thinness';
    } else if (bmi < 18.5) {
        classification = 'Mild Thinness';
    } else if (bmi < 25) {
        classification = 'Normal';
    } else if (bmi < 30) {
        classification = 'Overweight';
    } else {
        classification = 'Obese';
    }

    // Append the classification to the result
    output.textContent += '\nClassification: ' + classification;
}
