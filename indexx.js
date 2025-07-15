let result = document.getElementById('result');

function display() {
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    height = height / 100;
    console.log(height, weight);

    let bmiValue = weight / (height * height);
    console.log(bmiValue);
    
    if (bmiValue < 18.4) {
    console.log("Under weight");
    result.innerText = "Result is: Under weight";
} else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        result.innerText = "Result is: Normal";
    } else if (bmiValue >= 25 && bmiValue <= 39.9) {
        result.innerText = "Result is: Over weight";
    } else if (bmiValue >= 40) {
        result.innerText = "Result is: Obese";
    }
}
