// every
// filter
// find
// findIndex
// flat
// flatMap
// some


// Implementing every method

function isBig(elem) {
    return elem > 5
}

console.log([1,2,3,4].every(isBig))

function myEvery(arr,isBig){
    flag = true
       if(Array.length === 0){
           return flag
      }
    for(var i=0;i<arr.length;i++) {
        if(!isBig(arr[i])){
            flag = false
            break
        } 
    }
    return flag
}

arr1 = [1,2,3,4]
console.log(myEvery(arr1,isBig))

// Implementing filter method

function isLength(word){
    return word.length>6
}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

const result = words.filter(isLength)

console.log(result)

function myFilter(arr,isLength){
    temp = []
    for(var i=0;i<arr.length;i++){
        if(isLength(arr[i])) {
            temp.push(arr[i])
        }
    }
    return temp
}

console.log(myFilter(words,isLength))


//implement find method

const array1 = [5, 12, 8, 130, 44];

function isElement(val) {
    return val>10
}

const found = array1.find(isElement);

console.log(found);

function myFind(array1,isElement){
    temp = 0
    for(var i=0;i<array1.length;i++){
        if(isElement(array1[i])){
            return array1[i]
        }
    }
}

console.log(myFind(array1,isElement))

// Implementing findIndex method

var newArray = [1,2,3,4]

function isElement(val) {
    return val>2
}
var index = newArray.findIndex(isElement)

function myFindIndex(arr,isElement){

    for(var i=0;i<arr.length;i++){
        if(isElement(arr[i])){
            return i
        }
    }
}
console.log(myFindIndex(newArray,isElement))

// implementing flat method

var arr1 = [1,2,[3,4,[5,6]]]

//console.log(arr1.flat())

function myFlat(arr){
    temp = []
    for(var i=0;i<arr.length;i++){

        if(typeof(arr[i]) == 'number'){
            temp.push(arr[i])
        }
        if(typeof(arr[i]) === 'object'){
            for(var j=0;j<arr[i].length;j++){
                temp.push(arr[i][j])
            }
        }

    }
    return temp
}

console.log(myFlat(arr1))

//implementing flatMap method

var array2 = [1,2,[3,[4,5,6]]]

function change(val){
    return val*2
}

function myMap(arr,fun){
    temp = []
    for(var i=0;i<arr.length;i++){
        temp.push(fun(arr[i]))
    }
    return temp
}

console.log(array2.map(change))
console.log(array2.flatMap(change))

function myFlatMap(arr,fun){
    temp = myMap(arr,fun)
    temp1 = myFlat(temp)
    return temp1
}

console.log(myFlatMap(array2,change))

var someArray = [1,2,3,4]

//implementing some method
console.log(someArray.some(isBig))

function mySome(arr,fun){
    flag = false
    for(var i=0;i<arr.length;i++){
        if(fun(arr[i])){
            flag = true
            break
        }
    }
    return flag
}

console.log(mySome(someArray,isBig))