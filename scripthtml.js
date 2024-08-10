// Alerts API
const alertsApi = 'https://example.com/alerts-api';

// Resources API
const resourcesApi = 'https://example.com/resources-api';

// Community Forum API
const forumApi = 'https://example.com/forum-api';

// Get Alerts
fetch(alertsApi)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const alertList = document.getElementById('alert-list');
        alertList.innerHTML = ''; // Clear any existing alerts

        // Assuming data.alerts is an array
        data.alerts.forEach(alert => {
            const listItem = document.createElement('li');
            listItem.textContent = alert.message; // Assuming each alert has a "message" property
            alertList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        const alertList = document.getElementById('alert-list');
        alertList.innerHTML = '<li>Failed to load alerts. Please try again later.</li>';
    });
