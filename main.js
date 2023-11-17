// main.js
const counterForBirdStrikes = document.querySelector("#counter-bird-strike")
const counterForBirdYearsLost = document.querySelector("#counter-bird-year-lost")

// Counter for bird strikes
function birdCounter () {
    let sum = 1;
    let speed = 1000
    const countUpTo = 267278;

    const countWithDelay = (currentCount) => {
        // Adjust the speed as needed
        if (currentCount > 10 && currentCount < 100) {
            speed = 100;
        } else if (currentCount > 100 && currentCount < 300) {
            speed = 10;
        } else if (currentCount > 300) {
            speed = 4;
        }
        setTimeout(() => {
            counterForBirdStrikes.innerText = currentCount;
            birdYearsLost()

            if (currentCount < countUpTo) {
                countWithDelay(currentCount + 1);
            }
        }, speed);
    };
    countWithDelay(sum);
}
// Initialize the counter
birdCounter();


// Average bird lifespan counter
let sumForBirdYearsLost = 0
function birdYearsLost () {
    // Create a random number between 5 and 10 ( Average lifespan for waterfowl 31% of all strikes)
    let randomYearsLost = Math.floor(Math.random()  * 6 + 5)

    sumForBirdYearsLost += randomYearsLost

    counterForBirdYearsLost.innerText = sumForBirdYearsLost


}


// Bird Strikes Per Year Chart

// Format Data
let arrayWithYears = [];
let arrayWithDataForYears = [];
function formatDataForYear () {

    yearData.forEach((year) => {
        arrayWithYears.push(year.INCIDENT_YEAR)
        arrayWithDataForYears.push(year.amount)
    })
}
formatDataForYear()

const ctx = document.querySelector('#chart1');

// Create Chart
new Chart(ctx, {
    type: 'line',
    data: {
        labels: arrayWithYears,
        datasets: [{
            label: 'Bird strikes',
            data: arrayWithDataForYears,
            borderWidth: 4,
            borderColor: "#70db70"
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Bird strikes per year',
                position: 'top',
                color: 'white'
            },
            legend: {
                fontColor: "white",
                position: 'right'
            }
        },
        scales: {
            y: {
                ticks: {
                    color: 'white',

                },
                color: "white",
                beginAtZero: true,
                grid: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'count of bird strikes',
                    color: 'white'
                }
            },
            x: {
                ticks: {
                    color: 'white',
                    // Function from chart.js documentation
                    callback: function(val, index) {
                        // Hide every 2nd tick label
                        return index % 2 === 0 ? this.getLabelForValue(val) : '';
                    },
                },
                grid: {
                    display: false
                }
            }
        },
    }
});


// Bird Strikes Per Month

// Format Data
let arrayWithXAndYDataPointsForPerMonth = [];
function formatPerMonthData () {

    dataPerMonth.forEach((month, index) => {
        let monthAsObject = {};
        monthAsObject.x = index
        monthAsObject.y = month.amount
        arrayWithXAndYDataPointsForPerMonth.push(monthAsObject)
    })
}
formatPerMonthData();

// Create Animation For Chart
const ctx2 = document.querySelector('#chart2');

const totalDuration = 8000;
const delayBetweenPoints = totalDuration / arrayWithXAndYDataPointsForPerMonth.length;

const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
const animation = {
    x: {
        type: 'number',
        easing: 'linear',
        duration: delayBetweenPoints,
        from: NaN, // the point is initially skipped
        delay(ctx) {
            if (ctx.type !== 'data' || ctx.xStarted) {
                return 0;
            }
            ctx.xStarted = true;
            return ctx.index * delayBetweenPoints;
        }
    },
    y: {
        type: 'number',
        easing: 'linear',
        duration: delayBetweenPoints,
        from: previousY,
        delay(ctx) {
            if (ctx.type !== 'data' || ctx.yStarted) {
                return 0;
            }
            ctx.yStarted = true;
            return ctx.index * delayBetweenPoints;
        }
    }
};

// Creation of Chart
let chart2 = new Chart(ctx2, {
    scaleFontColor: "white",
    type: 'line',
    data: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAJ', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [{
            label: 'Bird strikes',
            data: arrayWithXAndYDataPointsForPerMonth,
            borderWidth: 4,
            borderColor: "#70db70"
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Bird strikes per month',
                position: 'top',
                color: 'white'
            },
            legend: {
                fontColor: "white",
                position: 'right'
            }
        },
        scales: {
            y: {
                ticks: {
                    color: 'white'
                },
                beginAtZero: true,
                grid: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'count of bird strikes',
                    color: 'white'
                }
            },
            x: {
                ticks: {
                    color: 'white'
                },
                grid: {
                    display: false
                }
            }
        },
        animation: animation,
        interaction: {
            intersect: false
        }
    }
});

// Animal chart

// Format Data
let arrayWithAnimalNames = [];
let arrayWithAmountOfReportsForAnimals = [];
function formatAnimalData () {
    randomAnimalData.forEach((animal) => {
        arrayWithAnimalNames.push(animal.species)
        arrayWithAmountOfReportsForAnimals.push(animal.amount)
    })
}
formatAnimalData()

const ctx3 = document.querySelector('#chart3');


let delayed;
let chart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: arrayWithAnimalNames,
        datasets: [{
            label: 'Animal species closer to extinction',
            data: arrayWithAmountOfReportsForAnimals,
            borderWidth: 4,
            backgroundColor: "#70db70"
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Animal species struck by plane',
                position: 'top',
                color: 'white'
            },
            legend: {
                color: "white",
                position: 'bottom',
            }
        },
        scales: {
            y: {
                ticks: {
                    color: 'white'
                },
                beginAtZero: true,
                grid: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'count of bird strikes',
                    color: 'white'
                }
            },
            x: {
                ticks: {
                    color: 'white'
                },
                grid: {
                    display: false
                }
            }
        }, animation: {
            // Delay animation from chart.js documentation
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                    delay = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
            },
        },
    }
});



//Check Scroll position
let alreadyHappenedForChart2 = 0
let alreadyHappenedForChart3 = 0
function checkScrollPosition () {

    // y position for when we want to update the chart
    const animatedChartPositionForChart2 = 1750
    const animatedChartPositionForChart3 = 2000

    // Check to see if the scroll position is at the right position
    let chart2InPosition = window.scrollY >= animatedChartPositionForChart2 && window.scrollY < animatedChartPositionForChart3
    let chart3InPosition = window.scrollY >= animatedChartPositionForChart3

    //Chart 2 checker
    if (chart2InPosition && alreadyHappenedForChart2 === 0) {
       updateChart(2)

        alreadyHappenedForChart2 = 1
        setTimeout(() => {
            alreadyHappenedForChart2 = 0
        }, 10000)
        //Chart 3 checker
    } else if (chart3InPosition && alreadyHappenedForChart3 === 0) {
        updateChart(3)

        alreadyHappenedForChart3 = 1
        setTimeout(() => {
            alreadyHappenedForChart3 = 0
        }, 10000)
    }

}

window.addEventListener("scroll",() => {
    checkScrollPosition()
})
function updateChart (chartNumber) {
    console.log("Updating chart " + chartNumber)
    // Creates a variable with the name of the chart
    let currentChart = "chart"+chartNumber

        if (currentChart === "chart2") {
            // Destroy the chart and create it again
            chart2.destroy()
            chart2 = new Chart(ctx2, {
                scaleFontColor: "white",
                type: 'line',
                data: {
                    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAJ', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
                    datasets: [{
                        label: 'Bird strikes',
                        data: arrayWithXAndYDataPointsForPerMonth,
                        borderWidth: 4,
                        borderColor: "#70db70"
                    }]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: 'Bird strikes per month',
                            position: 'top',
                            color: 'white'
                        },
                        legend: {
                            fontColor: "white",
                            position: 'right'
                        }
                    },
                    scales: {
                        y: {
                            ticks: {
                                color: 'white'
                            },
                            beginAtZero: true,
                            grid: {
                                display: false
                            },
                            title: {
                                display: true,
                                text: 'count of bird strikes',
                                color: 'white'
                            }
                        },
                        x: {
                            ticks: {
                                color: 'white'
                            },
                            grid: {
                                display: false
                            }
                        }
                    },
                    animation: animation,
                    interaction: {
                        intersect: false
                    }
                }
            });
        } else if (currentChart === "chart3") {
            // Destroy the chart and create it again
             chart3.destroy()
            delayed = false;
             chart3 = new Chart(ctx3, {
                type: 'bar',
                data: {
                    labels: arrayWithAnimalNames,
                    datasets: [{
                        label: 'Animal species closer to extinction',
                        data: arrayWithAmountOfReportsForAnimals,
                        borderWidth: 4,
                        backgroundColor: "#70db70"
                    }]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: 'Animal species struck by plane',
                            position: 'top',
                            color: 'white'
                        },
                        legend: {
                            color: "white",
                            position: 'bottom',
                        }
                    },
                    scales: {
                        y: {
                            ticks: {
                                color: 'white'
                            },
                            beginAtZero: true,
                            grid: {
                                display: false
                            },
                            title: {
                                display: true,
                                text: 'count of bird strikes',
                                color: 'white'
                            }
                        },
                        x: {
                            ticks: {
                                color: 'white'
                            },
                            grid: {
                                display: false
                            }
                        }
                    }, animation: {
                        // Delay animation from chart.js documentation
                        onComplete: () => {
                            delayed = true;
                        },
                        delay: (context) => {
                            let delay = 0;
                            if (context.type === 'data' && context.mode === 'default' && !delayed) {
                                delay = context.dataIndex * 300 + context.datasetIndex * 100;
                            }
                            return delay;
                        },
                    },
                }
            });
        }
}

