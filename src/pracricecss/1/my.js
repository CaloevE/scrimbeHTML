// falsy
/**0 '' NaN null undefined**/

// truthy
/**7 [] {} '123'**/

// 1. Filter all people which are older than 40 years
// 2. Concat their name and surname, result object should contain `fullName` and `age` fields
//
// Result should be: `[{ fullName: "Adam Penson", age: 45 }]`

const people = [
	{ name: "Derrick", surname: "Hamn", age: 15 },
	{ name: "Brad", surname: "Falor", age: 30 },
	{ name: "Alex", surname: "Gapen", age: 27 },
	{ name: "Adam", surname: "Penson", age: 45 },
	{ name: "Dong", surname: "Clow", age: 2 },
];

const a = people.filter(i => i.age > 40);
// [{ name: "Adam" surname: "Penson", age: 45 }]
a.map(result => {
	const obj = {
		fullname: result.name + result.surname,
		age: result.age,
	}
	return obj;
});

//

function myFunc() {
	console.log(this);
}

const myArrowFunc = () => {
	console.log(this);
}

myFunc();
myArrowFunc();

myFunc.call("Hello!");
myArrowFunc.call("Hello!")

// event loop

console.log(1);
setTimeout(() => console.log(2));
Promise.resolve().then(() => console.log(3));
Promise.resolve().then(() => setTimeout(() => console.log(4)));
Promise.resolve().then(() => console.log(5));
setTimeout(() => console.log(6));
console.log(7);


