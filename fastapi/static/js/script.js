document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('prediction-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Validate input
        if (!validateInput(data)) {
            resultDiv.innerHTML = 'Please fill all fields with valid data.';
            return;
        }

        try {
            const response = await fetch('/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            resultDiv.innerHTML = `Prediction: ${result.prediction}`;
        } catch (error) {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while making the prediction.';
        }
    });

    function validateInput(data) {
        return data.region && 
               !isNaN(data.population) && 
               !isNaN(data.gdp) && 
               !isNaN(data.unemployment);
    }
});
