// Function to fetch predictions from the API
async function fetchPredictions() {
    const response = await fetch('/predictions/');
    const predictions = await response.json();
    return predictions;
}

// Function to update the prediction chart
function updateChart(predictions) {
    const ctx = document.getElementById('predictionChart').getContext('2d');
    
    const labels = predictions.map(p => p.candidate);
    const data = predictions.map(p => p.probability);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Prediction Probability',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1
                }
            }
        }
    });
}

// Function to update the prediction list
function updatePredictionList(predictions) {
    const list = document.getElementById('predictionsList');
    list.innerHTML = '';
    
    predictions.forEach(p => {
        const li = document.createElement('li');
        li.textContent = `${p.candidate}: ${(p.probability * 100).toFixed(2)}%`;
        list.appendChild(li);
    });
}

// Main function to update the dashboard
async function updateDashboard() {
    try {
        const predictions = await fetchPredictions();
        updateChart(predictions);
        updatePredictionList(predictions);
    } catch (error) {
        console.error('Error updating dashboard:', error);
    }
}

// Update the dashboard every 5 minutes
setInterval(updateDashboard, 5 * 60 * 1000);

// Initial update
updateDashboard();
