// // function func_name(var1: string){
// // console.log(var1)


// //  return var1.length;
 
// // }


// let func_name= (x:string): number|string => {
//     return "Karachi"
// }     

// let func_name2 = () => console.log()        //no need of curly brackets


// (function(){                 //anonymous function
// var x = "Hello";
// console.log(x)
// })
// ()

// let name0  =function() {     //anonymous function
//     var x = "dfdfdfd"
//     console.log(x)
// }
// ()
// //Multiple return types 

// // function func_name(num: number, txt: string){

// //     if( num > 5){
// //     return 1;
// //     }
// //     return "Hello World"
// // }
// // let var_new = func_name(7, "")
// // console.log(var_new)

// //Function types

// // let var_new = (a:string) => console.log()
// // var_new("Haroon")

// // //Callback
// // function func1(Callback:Function){
    

// //     console.log("Please wait")
// //     Callback();
// // }
// // function func2 (){
// //     console.log("I have done")
// //    //return ;
// // }
// // func1(func2);

// // //parethesis type inference
// // let var1 = ['tex2', 'tex3', 'text4']

// // var1.forEach((var1, index)=>{
// //     console.log(var1, index)
// // })
// //function type-alias
// // type var1= (abc:number)=> string

// // function func_name(var2: var1){
// //     console.log(var2(1235)) //input var1
// // }
// // func_name((abc)=>"Pakistan"); //ouput // function call

// // //void return
// // function func_name (message: string) : void{
// //     console.log(message)
    
// // }
// // let var_new: string | number
// // var_new = func_name()


// // function never_name(): never{
// // throw new console.error("meessge");

// // }

// // function func1(var1:string){          ///withouit overloading, the same name of fucntion are not allowed. 

// //     }
// // function func1 (var1: number){

// // }


// //function overloading
// // function func_name(var1:string){

// // }
// // function func_name(var1: null){
    
// // }
// // function add(a:string, b:string): string;
// // function add(a:number, b:number): number;
// // function add(a:number, b:number): number;
// // function add(a:number, b:number): number;

// // function add(a:any, b:any): any{
// //     return a + b;
// // }

// // console.log(add("Hello", "world"));
// // console.log(add (1, 2));

// //arrays JS 
// //let var1 = ["text", 123, null, undefined]

// // //ARRAYS TS
// // let new_array = ["text", "text2", 12, 34, true]
// // //new_array.push("pakistan")
// // new_array.pop()
// // console.log(new_array)
// // //new_array.push(true)

// //TS arrays
// // let new_array : (string|number) [];


// // new_array = [123, "Karachi", 1947, "Lahore"]
// // //new_array = [undefined]
// //let new_array = ["", 123, true]
// //********************* */
// // let new_var : string | number[]|boolean[];

// //new_var = "Pakistan"
// //new_var= [1, 2, 3,4 ]
// // new_var=[false, true];
// // console.log(new_var)


// //multidimentioanl arrays ***********************************

// // let var_array :(string | number)[][]
// // var_array =[["MOn", "Tues","Wed" , "th", "fri", "sat"],[1, 2, 3, 4, 5, 6,],
// // [7, 8, 9, 10, 11, 12],[7, 8, 9, 10, 11, 12] ]

// // for (let calender in var_array){
// // console.log(var_array[calender])
// // }

// // accessing members of arrays *********************************

// // let fruits : string[]= ["Apple", "oranges", "mango"]

// // // for(let  i in fruits)
// // console.log(fruits[2])

// //incorrect type ********************************
// // function fun_name (var1: string[]){
// //     console.log(var1[45454545].length)
// // }

// //rest parameter in arrays***********************

// // let var1 = ["text1", "text2"]
// // let var2 = [1, 2, 3]
// // let var3 = [true, false]

// // let joining_vars = [...var1, ...var2,...var3] 

// // for( let i in joining_vars){
// //     console.log(joining_vars[i])
// //  }


// //spread********************************************
// function new_fuc(var1: string, ...var2: string[]){
//     for(let i of var2){
//         console.log(var1, i)
//     }
// }
// // let new_variable = ["text one", "text two"];
// // new_fuc("Karachi", ...new_variable);

// // let another_variable = [1, 2, 3];
// // new_fuc("text", ...another_variable)



// // tuple*******************************************************
// // let var1 = 1;
// // let var2 = "string data"
// // // //Array defintion
// // let array_type: (string|number)[]
// // array_type =[1, 3, 4]
// // //tuple definition
// // let employee: [number, number, number, string]=[1, 2, 3, "Karachi"];



// // let new_type: [boolean,boolean, number, number]=[true, false,123, 321]
// // ///
// // function func_name(var1: string, var2: number){
// //     console.log(`variable 1 ${var1} `)
// //     console.log(`Variable 2 ${var2}`)
// // }
// // let data1 : [number, string]=[ 1947, "pakistan"]
// // func_name(...data1)

// function first(input: string[]){
//     return [input[0], input.length]
// }
// let new_var1:[string]=["Lahore"]
// first(new_var1)
