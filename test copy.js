// a.js
const b = require("./b");
console.log(exports.x);
exports.x = "x";
require("./c");

// b.js
const a = require("./a");
console.log(a);
a.x = "y";

// c.js
const a = require("./a");
console.log(a.x);

interface Todo {
	title: string;
	description: string;
	completed: boolean;
}
// type Pick<T, P> = { xxx}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
	title: "a",
	completed: false,
};
