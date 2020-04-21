//-----Implementation of ramda Converge function--------------
// const average = R.converge(R.divide, [R.sum, R.length])
// average([1, 2, 3, 4, 5, 6, 7]) //=> 4
let arr = [1,2,3,4,5,6]

//converge function
divide = (a,b) => x = a/b

//branch function
sum = (arr) => x = arr.reduce((a,b) => a+b,0)
arrLength = (arr) => x = arr.length

const myConverge = (valArr,convergeFun,branchFunArr) => x = convergeFun(branchFunArr[0](arr),branchFunArr[1](arr))

console.log(myConverge(arr,divide,[sum,arrLength]))



//-----Implementation of ramda cond-------
// const fn = R.cond([
// 	[R.equals(0),   R.always('water freezes at 0°C')],
// 	[R.equals(100), R.always('water boils at 100°C')],
// 	[R.T,           temp => 'nothing special happens at ' + temp + '°C']
//   ]);
//   fn(0); //=> 'water freezes at 0°C'
//   fn(50); //=> 'nothing special happens at 50°C'
//   fn(100); //=> 'water boils at 100°C'
const myCond = (val) => {
	if(val === 0) {
		return `water freezes at ${val} degree C`
	} else if(val === 100) {
		return `water boils at ${val} degree C`
	} else {
		return `nothing special happens at ${val} degree C`
	}
}

console.log(myCond(5))

//------Implementation of ramda ifElse----------
// const incCount = R.ifElse(
// 	R.has('count'),
// 	R.over(R.lensProp('count'), R.inc),
// 	R.assoc('count', 1)
//   );
//   incCount({});           //=> { count: 1 }
//   incCount({ count: 1 }); //=> { count: 2 }

const myIfElse = (fun1,fun2,fun3) => {
	if(fun1()){
		return fun2()
	} else {
		return fun3()
	}
}

const hasAccess = () => true
const yes = () => "Access Granted"
const no = () => "Access Denied"

console.log(myIfElse(hasAccess,yes,no))

//implementation of ramda pickAll
//R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}

const myPickAll = (keys,obj) => {
	temp = {}
	keys.forEach((val)=> {
		if(Object.keys(obj).includes(val)){
			temp[val] = obj[val]
		} else {
			temp[val] = undefined
		}
	})
	return temp
}

console.log(myPickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}))
