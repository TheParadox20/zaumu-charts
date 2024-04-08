console.clear();
console.log('I\'m in !! charts.js');

const bar_ctx = document.getElementById('bar').getContext('2d');
new Chart(bar_ctx, {
type: 'bar',
data: {
    labels: ['January', 'February', 'March'],
    datasets: [{
    label: 'Sales',
    data: [10, 20, 15],
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1,
    }],
},
options: {
    scales: {
    y: {
        beginAtZero: true,
    },
    },
},
});

const line_ctx = document.getElementById('line').getContext('2d');
new Chart(line_ctx, {
type: 'line',
data: {
    labels: ['January', 'February', 'March'],
    datasets: [{
    label: 'Sales',
    data: [10, 20, 15],
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1,
    }],
},
options: {
    scales: {
    y: {
        beginAtZero: true,
    },
    },
},
});