const getCountryData = function () {
    fetch(`https://restcountries.com/v3.1/all`).then(function (response) {

        return response.json();
    }).then(function (data) {
        data.forEach(data => {
            {
                console.log(`Country :${data.name.official}\nCapital: ${data.capital}\nFlag: ${data.flag}`);
                console.log('\n');
            }
        });
    })

}

getCountryData();