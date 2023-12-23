
// Print odd numbers in an array
var arr = [1,6,7,8,10,15];

let annousOddFunc = function () {
    for (let i=0;i< arr.length;i++)
    {
        if(arr[i]%2 !=0) {
            console.log("The numbers is odd ", arr[i] );
        }
    }

}
annousOddFunc();

// Print odd numbers in an array
(function(){
    
    for (let i=0;i< arr.length;i++)
       {
           if(arr[i]%2 !=0) {
               console.log("The numbers is odd ", arr[i] );
           }
       }
   })();

// Convert all the strings to title caps in a string array
var title = ["have a nice day", "welcome to full stack development","good morning"];
let CheckTitleFunc = function (str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}


let annoyTitleCaseFunc = function (){
var titlecase = [] ;
for (var index = 0; index < title.length; index++) {
      titlecase.push(CheckTitleFunc(title[index])) ;
     }
console.log("Converted first letter case is ", titlecase);   
}
annoyTitleCaseFunc();


// Convert all the strings to title caps in a string array
var titlecase = [] ;
(function(){
    
     for (var index = 0; index < title.length; index++) {
      titlecase.push(CheckTitleFunc(title[index])) ;
      }

    function CheckTitleFunc(str) {
        str = str.toLowerCase().split(' ');
        for (let i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(' ');   
        
    }
    console.log("Converted first letter case ", titlecase);   
})();    
   

//Sum of all numbers in an array
var sumArr = [4,78,89,45,6];
let sum = 0;

let anonySumFunc = function() {
    for (let i=0;i<sumArr.length;i++)    {
        sum = sum + sumArr[i];
    }
    console.log("Total sum of numbers is :::",sum);
}
anonySumFunc();

//Sum of all numbers in an array
(function(){
    sum =0 ; 
    for (let i=0;i<sumArr.length;i++){
        sum = sum + sumArr[i];
    }
    console.log("Total sum of numbers is :::",sum);
    
   })();



//Return all the prime numbers in an array
var a = [5, 9, 63, 29, 35, 6, 55, 23];
var prime = [];

var CheckPrime = function(item) {
    var identifier = item / 2;
   
      for (var j = 2; j <= identifier; j++) {
       if ((item % j) == 0) { 
        return false;
       } 
     }
     return true;
}
var annoyPrimeFunc = function (){
 for (var index = 0; index < a.length; index++) {
     if (CheckPrime(a[index])) {
         prime.push(a[index])
     }
   }
console.log("The prime number is ", prime);   
}
annoyPrimeFunc();

//Return all the prime numbers in an array
var prime = [];
(function (){
 for (var index = 0; index < a.length; index++) {
     if (CheckIsPrime(a[index])) {
         prime.push(a[index])
     }
   }
   function CheckIsPrime(item){
    var identifier = item / 2;
   
    for (var j = 2; j <= identifier; j++) {
     if ((item % j) == 0) { 
      return false;
     } 
   }
   return true;
   }
  console.log("The prime number is ", prime);   
})();



//Return all the palindromes in an array
var str = ["Madam","123","1221"];
var palindrome = [];

let checkPalindrome = function(arrayValues){
    
     const OriginalString = arrayValues.split('');
     const reverseArrayValues = OriginalString.reverse();
     const reverseString = reverseArrayValues.join('');

    if(arrayValues.toLowerCase() == reverseString.toLowerCase()) {
        return true;
    } else {
        return false;
    }

};

let palindromeanonyFunc = function(){
    for(let i=0;i<str.length;i++){

        if (checkPalindrome(str[i])){
            palindrome.push(str[i]);
        }

    }
  console.log("The Palindrome in the array is  ", palindrome);  
}
  palindromeanonyFunc(); 

  //Return all the palindromes in an array
  var palindrome = [];
  (function(){

    for(let i=0;i<str.length;i++){

        if (checkIsPalindrome(str[i])){
            palindrome.push(str[i]);
        }

  }
    function checkIsPalindrome(arrayValues){
     const OriginalString = arrayValues.split('');
     const reverseArrayValues = OriginalString.reverse();
     const reverseString = reverseArrayValues.join('');

    if(arrayValues.toLowerCase() == reverseString.toLowerCase()) {
        return true;
    } else {
        return false;
    }
        
    }
   console.log("The Palindrome in the array is ", palindrome);
  })();

// Remove the duplicate elements from the Array
let dupliArr = [10,5,99,10,"Ram","Arun","Arun","Ram"];
let anonydupvalFunc = function() {
    let val = new Set(dupliArr);
    console.log("Original array is :" , dupliArr);
    console.log("Removed after duplicate array is :" , val);

};
anonydupvalFunc();

// Remove the duplicate elements from the array   
(function(){
    
    let val = new Set(dupliArr);
    console.log("Original array is :" , dupliArr);
    console.log("Removed after duplicate array is :" , val);
    
   })();

// Right rotate in the array
var arrrotate = [0,5,7,8,9];
var rot =2;

let rotateAnonyFunc = function() {
     for (let k=0;k< rot;k++){
        arrrotate.unshift(arrrotate.pop());

    }
    console.log("After the right rotate", arrrotate)
}
rotateAnonyFunc();

// Right rotate in the array
var arrrotate = [0,5,7,8,9];
(function(){
    for (let k=0;k< rot;k++){
        arrrotate.unshift(arrrotate.pop());

    }
    console.log("After the right rotate", arrrotate)

})();


// Using Arrow function
// Print odd numbers in an array
var arr = [1,6,7,8,10,15];

const arrOdd = () => {
    for (let i=0;i< arr.length;i++)
    {
        if(arr[i]%2 !=0) {
            console.log("The numbers is odd ", arr[i] );
        }
    } 
}; 
arrOdd();       

//Convert all the strings to title caps in a string array
var title = ["have a nice day", "welcome to full stack development","good morning"];

let arrCheckTitleFunc = (str) => {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}


let arrowTitleCaseFunc = () => {
var titlecase = [] ;
 for (var index = 0; index < title.length; index++) {
      titlecase.push(arrCheckTitleFunc(title[index])) ;
     }
console.log("Converted first letter case is ", titlecase);   
}
arrowTitleCaseFunc();

// Sum of all numbers in an array
var sumArr = [4,78,89,45,6];
const arrSum = () =>{
    sum =0 ; 
    for (let i=0;i<sumArr.length;i++){
        sum = sum + sumArr[i];
    }
    console.log("Total sum of numbers is :::",sum);
    
   };

// Return all the prime numbers in an array   
var a = [5, 9, 63, 29, 35, 6, 55, 23];
var prime = [];
   
   var CheckPrime = (item) => {
       var identifier = item / 2;
      
         for (var j = 2; j <= identifier; j++) {
          if ((item % j) == 0) { 
           return false;
          } 
        }
        return true;
   }
   var arrowPrimeFunc = () => {
    for (var index = 0; index < a.length; index++) {
        if (CheckPrime(a[index])) {
            prime.push(a[index])
        }
      }
   console.log("The prime number is ", prime);   
   }
   arrowPrimeFunc();  

//Return all the palindromes in an array
var str = ["Madam","123","1221"];  
var palindrome = [];

let arrcheckPalindrome = (arrayValues) =>{
    
     const OriginalString = arrayValues.split('');
     const reverseArrayValues = OriginalString.reverse();
     const reverseString = reverseArrayValues.join('');

    if(arrayValues.toLowerCase() == reverseString.toLowerCase()) {
        return true;
    } else {
        return false;
    }

};

let arrpalindromeFunc = () => {
    for(let i=0;i<str.length;i++){
        if (arrcheckPalindrome(str[i])){
            palindrome.push(str[i]);
        }

    }
    console.log("The Palindrome in the array is  ", palindrome);     
}
arrpalindromeFunc();   