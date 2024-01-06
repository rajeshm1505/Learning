
//https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
//Class - Movie

class Movie {

  constructor(title,studio,rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    if (this.rating === undefined){
      this.rating = "PG";
    }

  }

  displayMovie() {
    console.log(`
                 title : ${this.title},
                 studio :${this.studio},
                 rating : ${this.rating} 
               `)
  }

  getMovie() {
    return ({
             title :this.title,
             studio:this.studio,
             rating:this.rating
            })

   }
   
   getPG(arr) {
        
      let filminfo = arr.filter( (film) => film.rating === "PG" ) 
      let newArray = filminfo.map( filminfo=> filminfo.title);
      console.log("NewArray",newArray);  
             
    }

}
 
    const movie1 = new Movie("Pathaan","RRRRR","PG");
    const movie2 = new Movie("Spider Man"," VVVVV","PG");
    const movie3 = new Movie("Evil dead","TTTTT","PG");
    const movie4 = new Movie("Casino Royale","Eon Productions","PG­13");
    const movie5 = new Movie("CCC","KKKK");
    movie1.displayMovie();
    movie5.displayMovie();

    let arr=[]
    arr.push(movie1.getMovie());
    arr.push(movie2.getMovie());
    arr.push(movie3.getMovie());
    arr.push(movie4.getMovie());
    console.log(arr);
    movie4.getPG(arr);
   
   

//https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
//Write a “person” class to hold all the details.
class person {

  constructor(fname,age,height,weight,qualification,address,state){
    this.fname = fname;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.qualification= qualification;
    this.address = address;
    this.state = state;
  }


  getPersonalinfo(){
    
    console.log(`
                 Name           : ${this.fname}    
                 Age            : ${this.age}    
                 Height         : ${this.height} feet 
                 Weight         : ${this.weight} kg
                 Qualification  : ${this.qualification}  
                 Address        : ${this.address}
                 State          : ${this.state}
                `);
  }
}


 const pers = new person ("Shiva",26,6,50, "BE","4th Street","TamilNadu");
 pers.getPersonalinfo();



 //Write a “person” class to hold all the details.
 // Print the class circle

 class circle {

  constructor() {
    this.radius = 1.0;
    this.color = "red";
  }

  circle(radius){
    this.radius = radius;
  }

  circle(radius,color) {
    this.radius = radius
    this.color  = color;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(radius) {
   this.radius  = radius;
  }

  getColor() {
    return this.color;
  }
  setColor(color) {
    this.color = color;
  }

  toString() {
    let str =  `[ radius = ${this.getRadius()} , color = ${this.getColor()}]`;
    return str;
  }

  getArea() {
    let area=(3.14*this.getRadius()*this.getRadius()).toFixed(2)
    return `"Area of circle is" ${area}`
  }

  getCircumference(){
   let circum=(2*3.14*this.getRadius()).toFixed(2)
   return `"Circumference of circle is" ${circum}`  
  }
   
}

const circle1 = new circle();
const circle2 = new circle(5,"Pink");
circle1.setRadius(8);
circle1.setColor("Green");
circle2.setRadius(10);
console.log(circle2.getArea());
console.log(circle2.getCircumference());
console.log(circle1.toString());
console.log(circle2.toString());


 
//write a class to calculate the Uber price.

 class UberPrice {
  constructor(distance) {
    this.distance = distance;
    
  }
  getPrice() {
    return (this.distance ) * 15;  
  }
}

let uber = new UberPrice(25);
let totalprice = uber.getPrice();
console.log("Total Price for the travel ::", totalprice);

