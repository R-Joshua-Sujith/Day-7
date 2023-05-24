const getCountryData = function () {
    fetch(`https://restcountries.com/v3.1/all`).then(function (response) {

        return response.json();
    }).then(function (data) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].currencies === undefined) {
                continue;
            } else if ('USD' in data[i].currencies)
                console.log(data[i].name.official)
        }
    })

}
getCountryData();
