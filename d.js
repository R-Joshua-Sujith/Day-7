const getTotalPopulation = function () {
    fetch(`https://restcountries.com/v3.1/all`).then(function (response) {

        return response.json();
    }).then(function (data) {
        const totalPopulation = data.reduce(function (acc, data) {
            return acc + data.population;
        }, 0);
        console.log(`Total Population is ${totalPopulation}`)
    })

}

getTotalPopulation();