
// Resume data for Sample 
var Profile = {
    "Basic Information": {
           "fname"  : "RajeshKumar ",
           "lname"  : "M",
           "email"  : "mrajeshkumar87@gmail.com",
           "phone"  : "94320430302",
           "Address": {
                     "Address#1": "No 1, 5th Street, T Nagar",
                     "postalCode": "600048",
                     "city": "Chennai",
                     "State": "TamilNadu"
           },
       },
       "education": {
        "courses": "Computer Science",
        "Degree" : "BE"
         
      },
      "work": [
      {
       "company": "XYZ",
       "position": "Software Engineer"
      },
      {
       "company": "ABC",
       "position": "Senior Software Engineer"
      }
     ],
     
     "skills": {
       "Name": "C,C++ and Java"
       
     },
    "languages": {
       "language": "English,Tamil",
       "fluency": "Read and Write"
     },
     "interests": 
     {
       "name": "Cricket,Listening Music"
     }
   
 }

 // print user name

 console.log("Resume data ");
 console.log ("Name "       + ":" + Profile["Basic Information"].fname + Profile["Basic Information"].lname);
 console.log ("Email "      + ":" + Profile["Basic Information"].email);
 console.log ("Phone "      + ":" + Profile["Basic Information"].phone);
 console.log ("Address 1"   + ":" + Profile["Basic Information"].Address["Address#1"] + " " + Profile["Basic Information"].Address["postalCode"]);
 console.log(" City"        + ":" + Profile["Basic Information"].Address["city"] + " " + " State"  + ":" + Profile["Basic Information"].Address["State"]);
 console.log(" Courses"     + ":" + Profile["education"].courses);
 console.log(" Degree"      + ":" + Profile["education"].Degree );
 console.log(" Skills"      + ":" + Profile["skills"].Name);
 console.log(" Language"    + ":" + Profile["languages"].language);
 console.log(" Language fluency"  +  ":" + Profile["languages"].fluency );
 console.log(" Interests"  +  ":" + Profile["interests"].name);

    for (let k =0 ; k < Profile.work.length;k++)
    {
    console.log("Company Name " + ":" + Profile.work[k].company + " "  + "Designation " + ":" +Profile.work[k].position );
    }



 