const deepCopy = (obj, hash = new WeakMap()) => {
	if (typeof obj !== "object") return obj;
	if (obj === null) return null;
	if (obj instanceof Date) return new Date(obj);
	if (obj instanceof RegExp) return new RegExp(obj);

	if (hash.has(obj)) return hash.get(obj);
	const newObj = Array.isArray(obj) ? [] : {};
	hash.set(obj, newObj);
	for (let k in obj) {
		newObj[k] = deepCopy(obj[k], hash);
	}
	return newObj;
};

const fastSort = function (arr) {
	if (!arr.length) return [];
	const left = [];
	const right = [];
	const mid = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < mid) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return [...fastSort(left), mid, ...fastSort(right)];
};
const testArr = [1, 3, 9, 2, 6];

const p = new Promise((resolve, reject) => {
	setTimeout(() => {
		// resolve("done");
		reject("error");
	}, 1000);
});

p.then(
	(val) => {
		console.log(val);
	},
	(err) => {
		console.log("err", err);
	}
).catch((err) => {
	console.log("catch");
	console.log(err);
});
