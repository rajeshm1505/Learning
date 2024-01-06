

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();

xhr.onload = function () {
  const  data = JSON.parse(xhr.response);

console.log("------------------------------------------------")
//Get all the countries from Asia continent /region using Filter function
   let realregion = data.filter((printregion) =>  {
        if(printregion.region=== "Asia"){
          console.log("Country Name  :" ,printregion.name.common);
          console.log("Region        :" , printregion.region);
        }
  
  }) 

// Get all the countries with a population of less than 2 lakhs using Filter function
    let realpopulate = data.filter((printpopulation) =>  {
      if(printpopulation.population < 200000){
          console.log("Country Name    :" ,printpopulation.name.common);
          console.log("population less than 200000:",printpopulation.population);
        }        
      });


//Print the following details name, capital, flag, using forEach function
    let realdetails = data.forEach((information) => {
        let realcapital = information.capital !== undefined? information.capital: "";
          console.log("Country Name      :" ,information.name.common);
          console.log("Capital Name      :" , ...realcapital);
          console.log("Flags Name        : ", information.flag);
    });

//Print the total population of countries using reduce function
    let totalpopulate = data.reduce((accum, Value) => {
        return accum + Value.population;
    }, 0);
          console.log("Total Population of countries : ", totalpopulate);


// Print the country that uses US dollars as currency.
    let realcountry = data.filter((printcurrency) =>  {
      for (let key in printcurrency.currencies) {
        if(printcurrency.currencies[key].name === "United States dollar"){
              console.log("Country Name :" ,printcurrency.name.common );
              console.log("Currencies   :",printcurrency.currencies[key].name);
      }
    }
    })        
}


