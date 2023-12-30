

// JSON object
const JsonDataEmployees = [
                  {"name":"John", "age":22, "phone":343434},
                  { "name": "Prem", "age": 28 , "phone":234543 }, 
                  { "name": "Ramesh", "age": 30,  "phone":343434 },
                  { "name": "Shiva", "age": 24 ,  "phone":567643},
                 ];

                 
                 // for statement
                 
                 for (let i=0;i<JsonDataEmployees.length;i++) {
                    
                    console.log( "Name" + ": " + JsonDataEmployees[i].name);
                    console.log( "Age"  + ": " + JsonDataEmployees[i].age);
                    console.log("Phone" + ": " + JsonDataEmployees[i].phone);
                 }
                 
                 
                 // for in statement
                 for (let j in JsonDataEmployees) {
                    console.log( "Name" + ": " + JsonDataEmployees[j].name);
                    console.log( "Age"  + ": " + JsonDataEmployees[j].age);
                    console.log("Phone" + ": " + JsonDataEmployees[j].phone);
                 }  
                 
                // for of statement 
                 for (let x of JsonDataEmployees) {
                    console.log( "Name"  + ": "  + x.name);
                    console.log( "Age"   + ": "  + x.age);
                    console.log( "Phone" + ": "  +  x.phone);
                    
                 }

                // for each statement
                JsonDataEmployees.forEach(function(value) { 
                    console.log("Name for each"  + ":" + value.name );
                    console.log("Age for each"   + ":" + value.age );
                    console.log("Phone for each" + ":" + value.phone );
                });

                Object.entries(JsonDataEmployees).forEach(([key, value]) => {
                    console.log("Name"  + ":" + value.name );
                    console.log("Age"   + ":" + value.age );
                    console.log("Phone" + ":" + value.phone );
                  });

