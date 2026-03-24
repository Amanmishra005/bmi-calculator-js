const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
     e.preventDefault();        //to hold and show the value otherwise get refreshed everytime we click on submit 
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please provide a valid height ${height}`; 
    }

   else if (weight === '' || isNaN(weight) || weight < 0) {
        result.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
       
        let category = '';

        // BMI categories
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }
         //show the result on the webpage
        results.innerHTML = `<span>${bmi} - ${category}</span>`;
        }
});
