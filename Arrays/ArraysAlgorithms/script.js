// parameter is an Array or not

// let is_Array = par =>{
//     if(toString.call(par) === "[object Array]")
//         return true;
//     return false;
// }

// console.log(is_Array("Barcelona"));
// console.log(is_Array(15));
// console.log(is_Array(["USA","Germany","France"]));


// Join

// let colors = ['red','green','yellow','white'];

// let col = colors.toString();
// console.log(typeof col);
// console.log(colors.join());
// console.log(colors.join("+"));




// 025468 the output should be 0-254-6-8.

// let nums = prompt();
// const str = nums.toString();

// const result = [str[0]];

// for(let x = 1;x <str.length;x++){
//     if((str[x-1] % 2 === 0) && (str[x] % 2 === 0)){
//         result.push('-' ,str[x]);
//     }
//     else{
//         result.push(str[x]);
//     }
// }

// console.log(result.join(''));



// Min Item Array

// let nums = [5,-6,12,33,-90,300,0,-155,-88,95];
// let minArray = function(arr){
//     let minNums = nums[0];
//     for(let i = 0; i < arr.length;i++){
//         if(minNums > arr[i]){
//             minNums = arr[i];
//         }
//     }
//     return console.log(minNums);
// }
// minArray(nums);


// // Max item Array

// let maxArray = function(arr){
//     let maxArray = arr[0];
//     for(let i = 0 ; i < arr.length;i++){
//         if(maxArray < arr[i]){
//             maxArray = arr[i];
//         }
//     }
//     return console.log(maxArray);
// }
// maxArray(nums);


// Bubble Sort

// let nums = [5,-6,12,33,-90,300,0,-155,-88,95];

// function bubleSort(arr){
//     let len = arr.length;
//     for(let i = len -1 ; i >= 0;i--){
//         for(let j = 0; j <= i ; j++){
//             if(arr[j-1] > arr[j]){
//                 let temp = arr[j-1];
//                 arr[j-1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubleSort(nums));
