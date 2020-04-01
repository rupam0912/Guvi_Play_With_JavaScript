// // task

// var input = [
//     {
//       name: "p1",
//       mark: {
//         english: 3,
//         maths: 5,
//         social: 2
//       }
//     },
//     {
//       name: "p1",
//       mark: {
//         english: 3,
//         maths: 5,
//         social: 2
//       }
//     },
//     {
//       name: "p1",
//       mark: {
//         english: 3,
//         maths: 5,
//         social: 2
//       }
//     }
// ]

// //   var result = [
// //     {
// //       name: "p1",
// //       total: 10
// //     },
// //     {
// //       name: "p1",
// //       total: 10
// //     },
// //     {
// //       name: "p1",
// //       total: 10
// //     }
// //   ];


// var res = []
// var i
// for(i=0; i<input.length;i++) {
//     //var len = input[i].mark
//     var j
//     var sum = 0
//     var temp = Object.values(input[i].mark)
//     for(j=0;j<temp.length;j++){
//         sum = sum + temp[j]
//     }

//     var a = {
//        'name':input[i].name,
//        'total': sum
//     }

//     res.push(a)
//     temp = []
// }

// console.log(Object.values(res))



function isIntent(word){
    return word[0] === "#"
}

function isEntity(word){
    return word[0] === "$"
}

function 







var input = "#one || $two && #someone || $something";

var spArray = input.split(' ')
