document.writeln("<h1 style='text-align:center'> ES Day1 </h1>")


/**
 * Var , let , const
 * rest params
 * destructure
 * primitive DataType vs refrence DataType
 * spread Operator
 * dafault Values
 * arrow function
 * string api
 * array api
 */


// var => 
    /**
     * ReDecleration
     * ReAssign
     * Hoisting
     * window  
     * function scope
     */
// var x=10;
// console.log(x);     // undefined
// var x;
// // var x="ayaat";
// x="React G4"

// console.log(x);    // react g4

// var x=5;
// console.log(window.x);
// var fname="ayaat";
// console.log(window.fname);



// let
/**
 * prefered
 * can't Accept ReDeclaration
 *  Accept Reassign 
 * can't Accept Hoisting (Ascces variable before initialization)
 *  didn't declare on Window
 * block scope {}
 */
// console.log(x);

// let x=5;
// // let x="ayaat";
// // x=10;
// // console.log(window.x);xxxxxxxxxxxxxxx
// console.log(x);


// const   => static
/**
 * can't Accept ReDeclaration
 * can't Accept ReAssign
 * can't Accept Hoisting
 * didn't declare on Window
 * block scope
 */

// console.log(PI);
// const PI=3.14;
// // PI=15;
// // const PI=15;
// console.log(window.PI);



// var x=10;

// var i;  
// function print()
// {
//     // function scope
//     // var i;
//     for( var i=0;i<3;i++)
//     {
//         console.log(i);  // 0,1,2
        
//     }
//    console.log("i out side for : "+i);   // 3
    
// }

// console.log("i out side function : "+i); //Error uncaought i if i is declared only in function
// if i declared out side function  i => undefined if it doesn't have value
// print()



/*****************   destructure  */


// let arr=[1,"ayaat","mahmoud","hanaa",true]

// // let x=arr[0];
// // let y=arr[1];
// // let [x,y]=arr
// // let [,,,x,y]=arr
// // console.log("x : ",x);
// // console.log( "y : ",y);


// function useArr()
// {
//     return [1,"ayaat","mahmoud","hanaa",true]
// }
// let [x,y]=useArr() 
// let [x,y]=[1,"ayaat","mahmoud","hanaa",true]
// console.log("x : ",x);
// console.log( "y : ",y);


// function useArr(temp)
// {
//     return [temp,function (){
//         console.log("welcome")
//     },true]
// }
// let [x,y]=useArr("ayaat")
// console.log("x : ",x);
// console.log( "y : ",y);  
// // y=> function y()
// // {
// //     console.log("welcome");
    
// // }
// y()



//  task => descructure on object  

// let person={
//     fname:"ayaat",
//     lname:"adel",
//     address:"cairo"
// }

// let x=person.fname;
// let y=person.lname;
    // {key:variable}=objectName
// let{fname:x,lname:y}=person
// console.log("x : ",x);
// console.log( "y : ",y); 

//   key:variable()
// let{fname:fname,lname:lname}=person
// let{fname,lname}=person   /***** (syntax sugare)  REACT  */
// console.log("x : ",fname);
// console.log( "y : ",lname); 

// ******************  spread operator
// data type =>  primitive datatype (int ,double , float ) ,  
// refrence datatype => object , array

// let x=5;
// let y=x;
// x=10;
// console.log("x : ",x );  // 10
// console.log("y : ",y );  //  5

// let arr1=[1,2,3]
// let arr2=arr1
// // let arr2=arr1
// arr2.push("ayaat")
// arr1.push("test")
// console.log("arr 1 :",arr1);
// console.log("arr 2 :",arr2);

// let arr1=[1,2,3]
// let arr2=[]

// for (let index = 0; index < arr1.length; index++) {
//     arr2[index] = arr1[index];
    
// }


///  spread operator => ...

// let arr1=[1,2,3]
// let arr2=["adel",...arr1,"hello","react"]
// arr2.push("ayaat")
// arr1.push("test")
// console.log("arr 1 :",arr1);
// console.log("arr 2 :",arr2);

// let p1={
//     name:"ayaat"
// }
// let p2=p1;
// p2.address="cairo"
// p1.age=24
// console.log("p1 : ",p1);
// console.log("p2 : ",p2);
// let p1={
//     name:"ayaat"
// }
// let p2={gender:"female",...p1,id:15};
// p2.address="cairo"
// p1.age=24
// console.log("p1 : ",p1);
// console.log("p2 : ",p2);

/************************************  default values  */

// undefined // undefined
// function sum(a=15,b=15,...w)  // reset params  => reset parameters
// {
//     console.log(w);
    
//    return a+b;
// }
// console.log(sum(20,15,30,24,10));  // a=20 , b=10

/*****************   functions types  
 * statement ,regular function
 * expression function
 * arrow function
 */

// function test()
// {
//     // console.log("regular function");
//     return
// }
// // test()
// console.log(test());



// expression function
// let result=function print()
// {
//     console.log("expression function");
    
// }
// console.log(result());


// arrow function
// let result=()=>{
//     console.log("arrow function");
    

// }
// console.log(result());

// let square=x=>{
//     return x+x
// }
// let square=x=>x+x

// let summation=(x,y)=> x+y


// console.log(summation(5,10));
// console.log(square(5));


// string api
// includes  =>check if string exist or not => return  true , false

// let str1="rect g4 from iti "
// let test="test"

// console.log(str1.includes("Iti"));  
// console.log(str1.indexOf("i"));   => index of character
// console.log(str1.startsWith("hello"));   // return true or false => caseSensitive
// console.log(str1.endsWith("iti"));  // return true or false => caseSensitive
// console.log(str1.charAt(11));   // index of charcter => charcter


// let str2=str1.concat("welcome ")

// let str2="welcome "+str1 +test
// ''
// ""
// ``
// let str2=`wlcome 
// ${test}
// ${str1}
//  `

// console.log(str2);


/***********  array api */

// let arr=["ayaat","ameena","nada","sara"]

// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
    
    
// }

// arr.forEach(element => {
//     console.log(element);
    
// });

// for (let element of arr) {
//     console.log(element);
    
// }

// for (let index in arr) {
//    console.log(index);
   
// }


let arrNum=[10,20,35];

// function findElement(arr)
// {
//     for (let index = 0; index < arr.length; index++) {
//         if(arr[index]>25) return arr[index]
        
//     }
// }

// console.log(findElement(arrNum));
// let arr=[10,20,35]
// arr.find((item,index,arr)=>{
//     // console.log("item",item);
//     // console.log("index",index);
//     // console.log("array",arr);
//     if(item>25) console.log(item);
// });


// map  =>arr=> length =>  array  , filter

let arr=["ayaat","iti","menoufia"]
// let result=arr.map((item,index)=>{
//     console.log(item);
    
//     if(item=="ayaat")
//     {
//         return item // ["ayaat",undefined,undefined]
//     }
   
// })
// console.log(result);
// let result=arr.filter((item,index)=>{
//     // console.log(item);
    
//     // if(item=="ayaat")
//     // {
//     //     return item;
//     // }
//     if(item=="creativa")
//         {
//             return item;
//         }
// })
// console.log(result);


// console.log(this);

let products=[
    {
        name:"lap top dell ram",
        price:30000 ,
        description:"laptop dell core i5 hard ssd 1 tera"
    },
    {
        name:"lap top mac ",
        price:50000 ,
        description:"laptop hp core i5 ram 32"
    },
    {
        name:"lap top hp",
        price:40000 ,
        description:"laptop hp core i7 hard ssd .5 tera"
    }
]

// var data=prompt("Enter your search prosduct")


