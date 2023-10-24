'use strict';

// ---------- ARRAY SECTION ------------

// ------- chunk-------
// Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
const myArr = [1, 2, 3, 4, 5, 6, 7];

console.log(_.chunk(myArr, 3));
console.log(_.chunk(myArr, 2));
console.log(_.chunk(myArr, 4));

// ----- compact ------
// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

const myCom = [1, 2, 0, 4, '', 5, 0, 7];

console.log(_.compact(myCom));

// ------ concat -------
// Creates a new array concatenating array with any additional arrays and/or values.

const myCon = [1, 2];
const other = _.concat(myCon, [3], [4], [5], [[6]]);

console.log(other);

// ------ difference ------
// Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

const myDiff = [1, 2, 0, 4, 5, 0, 7];

console.log(_.difference(myDiff, [1, 0, 7]));

// ----- differenceBy -----
// This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:

console.log(_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));

// ----- differenceWith -----
// This method is like _.difference except that it accepts comparator which is invoked to compare elements of array to values. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).

const diffWith = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
];

console.log(diffWith, [{ x: 1, y: 2 }], _.isEqual);

// ----- drop -----
// Creates a slice of array with n elements dropped from the beginning.

const myDrop = [1, 2, 0, 4, 5, 0, 7];
console.log(_.drop(myDrop, 2));

// ----- dropRight -----
// Creates a slice of array with n elements dropped from the end.

console.log(_.dropRight(myDrop, 2));

// ----- dropRightWhile -----
// Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

const users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false },
  { user: 'pebbles', active: false },
];

console.log(
  _.dropRightWhile(users, function (o) {
    return !o.active;
  })
);
console.log(_.dropRightWhile(users, { user: 'pebbles', active: false }));

// ----- dropWhile -----
// Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

console.log(
  _.dropWhile(users, function (o) {
    return !o.active;
  })
);

// ----- fill -----
// Fills elements of array with value from start up to, but not including, end.

const myFill = [1, 2, 3, 4, 5, 6, 7];

console.log(_.fill(myFill, 'a'));
console.log(_.fill(myFill, 'Alex', 0, myFill.length));

// ----- findIndex -----
// This method is like _.find except that it returns the index of the first element predicate returns truthy for instead of the element itself.

const userIndex = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true },
];

console.log(
  _.findIndex(users, function (o) {
    return o.user == 'barney';
  })
);
console.log(_.findIndex(users, { user: 'fred', active: false }));

const userIn = [1, 2, 0, 4, 5, 0, 7];

console.log(_.findIndex(userIn, value => value === 0));

console.log(_.findLastIndex(userIn, value => value === 0));

// ----- head -----
// Gets the first element of array.
console.log(_.head(userIn));

// ----- indexOf -----
// Gets the index at which the first occurrence of value is found in array using SameValueZero for equality comparisons. If fromIndex is negative, it's used as the offset from the end of array.
console.log(_.indexOf(userIn, 4));
console.log(userIn.indexOf(4));

// ----- flatten -----
// Flattens array a single level deep.
console.log(_.flatten([[1, 2, [3, 4]], 5, [5, 6]]));
console.log(_.flattenDeep([[1, 2], [3, 4], 5, [5, 6]]));

// ------ fromPairs -----
// The inverse of _.toPairs; this method returns an object composed from key-value pairs.

// const pairs = ([['a',1],['b',2]]);
const pairs = [
  ['Name', 'Alex'],
  ['Age', 34],
];

console.log(_.fromPairs(pairs));
console.log(Object.fromEntries(pairs));

// ----- initial -----
// Gets all but the last element of array.

const init = [1, 2, 3, 4, 5, 6, 7];
console.log(_.initial(init));

// ----- intersection -----
// Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

const inter = ([2, 1], [2, 3]);
console.log(_.intersection(inter));

// ----- join -----
// Converts all elements in array into a string separated by separator.

const myJoin = [1, 2, 3, 4, 5, 6, 7];
console.log(_.join(myJoin, ' '));

// ----- last ------
// Gets the last element of array.
console.log(_.last(myJoin));

// ----- nth -----
// Gets the element at index n of array. If n is negative, the nth element from the end is returned.

const array = ['a', 'b', 'c', 'd'];
console.log(_.nth(array, 1));

// ----- pull -----
// Removes all given values from array using SameValueZero for equality comparisons.

const myPull = [1, 2, 0, 4, 5, 0, 7];
console.log(_.pull(myPull, 0));

// ------ pullAll ----------
// This method is like _.pull except that it accepts an array of values to remove.

console.log(_.pullAll(myPull, [0, 7]));

// -------- pullAllBy ---------
// This method is like _.pullAll except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The iteratee is invoked with one argument: (value).
const myPullBy = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];

console.log(_.pullAllBy(myPullBy, [{ x: 1 }, { x: 3 }], 'x'));

// ----------- remove --------
// Removes all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with three arguments: (value, index, array).

const myRem = [1, 2, 3, 4, 5, 6, 7];
const evens = _.remove(myRem, function (n) {
  return n % 2 == 0;
});

console.log(myRem);
console.log(evens);

//------- reverse ---------
// Reverses array so that the first element becomes the last, the second element becomes the second to last, and so ons

console.log(_.reverse(myRem));

// ------- slice ------------
// Creates a slice of array from start up to, but not including, end.
const sli = [1, 2, 0, 4, 5, 0, 7];
console.log(sli.slice(1, 6));
console.log(_.slice(sli, 1, 6));

// -------sortedIndex ----------
// Uses a binary search to determine the lowest index at which value should be inserted into array in order to maintain its sort order.

const sorArr = [1, 2, 3, 6, 7, 8];
console.log(_.sortedIndex(sorArr, 4));

// -------- union ---------
// Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.

console.log(_.union(sorArr, myRem));

// ------------- COLLECTION SECTION ---------------

//----- countBy ----
// Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the number of times the key was returned by iteratee. The iteratee is invoked with one argument: (value).

console.log(_.countBy(sorArr));

// ---------- forEach -----------
// Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.

const myObj = {
  name: 'Alex',
  age: 34,
  location: 'Brooklyn',
  favBand: 'Coheed and Cambria',
};
console.log(_.forEach(myObj, (value, key) => console.log(value, key)));

// ---------- every -----------
// Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).

console.log(_.every(sorArr, (value, index) => sorArr[index] === value));

//-------- flatMap ----------
// Creates a flattened array of values by running each element in collection thru iteratee and flattening the mapped results. The iteratee is invoked with three arguments: (value, index|key, collection).

console.log(_.flatMap(sorArr, (value, index) => [1, 2]));
console.log(_.map(sorArr, (value, index) => [1, 2]));

// ---------- groupBy ---------
// Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The order of grouped values is determined by the order they occur in collection. The corresponding value of each key is an array of elements responsible for generating the key. The iteratee is invoked with one argument: (value).

console.log(_.groupBy(sorArr, value => value % 2 === 0));
console.log(_.groupBy(sorArr, value => value % 2));
console.log(_.groupBy(sorArr, value => value % 3));

// ------ include -------
// Checks if value is in collection. If collection is a string, it's checked for a substring of value, otherwise SameValueZero is used for equality comparisons. If fromIndex is negative, it's used as the offset from the end of collection.
console.log(_.includes(sorArr, 5));
console.log(_.includes(sorArr, 8));

// ------------ invokeMap ----------
// Invokes the method at path of each element in collection, returning an array of the results of each invoked method. Any additional arguments are provided to each invoked method. If path is a function, it's invoked for, and this bound to, each element in collection.

const invok = [
  [5, 1, 7],
  [3, 2, 1],
];
console.log(_.invokeMap(invok, 'sort'));

// -------- keyby ---------
// Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the last element responsible for generating the key. The iteratee is invoked with one argument: (value).

console.log(_.keyBy(sorArr, value => String(value)));

// ---------- orderBy -------
// This method is like _.sortBy except that it allows specifying the sort orders of the iteratees to sort by. If orders is unspecified, all values are sorted in ascending order. Otherwise, specify an order of "desc" for descending or "asc" for ascending sort order of corresponding values.

const order = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 34 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 36 },
];
console.log(_.orderBy(order, ['user', 'age'], ['asc', 'desc']));

//------- reduce ----------
// Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not given, the first element of collection is used as the initial value. The iteratee is invoked with four arguments:(accumulator, value, index|key, collection).
console.log(
  _.reduce(
    sorArr,
    (acc, val) => {
      return acc + val;
    },
    0
  )
);

// -------- reject ----------
// The opposite of _.filter; this method returns the elements of collection that predicate does not return truthy for.

console.log(_.reject(myDiff, value => value === 0));

// ----- sample --------
// Gets a random element from collection.

console.log(_.sample(sorArr));

// --------- samapleSize ------
// Gets n random elements at unique keys from collection up to the size of collection.

console.log(_.sampleSize(sorArr, 2));

// ------- shuffle --------
// Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.

console.log(_.shuffle(sorArr));

// ------- some --------
// Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate returns truthy. The predicate is invoked with three arguments: (value, index|key, collection).

console.log(_.some(sorArr, value => value === 5));
console.log(_.some(sorArr, value => value === 6));

//------DATE---------
//--------now------------
// Gets the timestamp of the number of milliseconds that have elapsed since the Unix epoch (1 January 1970 00:00:00 UTC).

console.log(_.now());

//-------FUNCTION-------
//------after--------
//The opposite of _.before; this method creates a function that invokes func once it's called n or more times.
const beetlejuice = _.after(3, () => {
  console.log('Itsssss Showtime');
});
beetlejuice();
beetlejuice();
beetlejuice();

//------bind-----
// Creates a function that invokes func with the this binding of thisArg and partials prepended to the arguments it receives.
function greet(greeting, punctuation) {
  return greeting + ' ' + this.user + punctuation;
}
const object = { user: 'fred' };
const bound = _.bind(greet, object, 'hi');
console.log(bound('!'));

// ------- curry --------
//  Creates a function that accepts arguments of func and either invokes func returning its result, if at least arity number of arguments have been provided, or returns a function that accepts the remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.

const abc = function (a, b, c) {
  return [a, b, c];
};
const curried = _.curry(abc);
console.log(curried(1, 2, 3));

const curr = _.curryRight(abc);
console.log(curr(3)(2)(1));

// --------- defer -------
// Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to func when it's invoked.

_.defer(function (text) {
  console.log(text);
}, 'deferred');

// ----- delay -----
// Invokes func after wait milliseconds. Any additional arguments are provided to func when it's invoked.

_.delay(
  function (text) {
    console.log(text);
  },
  1000,
  'deferred'
);

// ----- overArgs ------
// Creates a function that invokes func with its arguments transformed.

function double(n) {
  return n * 3;
}

function square(n) {
  return n * n;
}
const func = _.overArgs(
  function (x, y) {
    return [x, y];
  },
  [double, square]
);
console.log(func(2, 3));

//------- rearg -------
// Creates a function that invokes func with arguments arranged according to the specified indexes where the argument value at the first index is provided as the first argument, the argument value at the second index is provided as the second argument, and so on.

const rearged = _.rearg(
  function (a, b, c) {
    return [a, b, c];
  },
  [2, 0, 1]
);
console.log(rearged('b', 'c', 'a'));

//----- spread -----
// Creates a function that invokes func with the this binding of the create function and an array of arguments much like

//------LANG METHOD--------
//-------castArray-----
// Casts value as an array if it's not one.

const arrayed = [1, 2, 3];
console.log(_.castArray(arrayed) === arrayed);

//---- clone ----
// Creates a shallow clone of value.
const cloned = [{ a: 1 }, { b: 2 }];

const shallow = _.clone(cloned);
console.log(shallow[0] === cloned[0]);

//---- confirmsTo-------
// Checks if object conforms to source by invoking the predicate properties of source with the corresponding property values of object.
const conf = { a: 1, b: 2 };
console.log(
  _.conformsTo(conf, {
    b: n => {
      return n > 1;
    },
  })
);

//---eq-----
// Performs a SameValueZero comparison between two values to determine if they are equivalent.

const equi = { a: 1 };
const otherEqu = { a: 1 };
console.log(_.eq(equi, equi));
console.log(_.eq(equi, otherEqu));

//-------isBoolean
// Checks if value is classified as a boolean primitive or object.
console.log(_.isBoolean(false));
console.log(_.isBoolean(null));

//---- isFinite-----
// Checks if value is a finite primitive number.
console.log(_.isFinite(3));

//----integer-----
// Checks if value is an integer.
console.log(_.isInteger(3));

//--------it--------
// Checks if value is less than other.
console.log(_.lt(1, 3));
console.log(_.lt(3, 3));
console.log(_.lt(3, 1));

// --------toArray-------
// Converts value to an array.
const arr = { a: 1, b: 2 };
console.log(_.toArray(arr));
console.log(_.toArray('abc'));

//-----toInteger----
// Converts value to an integer.

console.log(_.toInteger(3.2));

// -------- toString-----
// Converts value to a string. An empty string is returned for null and undefined values. The sign of -0 is preserved.

console.log(_.toString(null));
console.log(_.toString([1, 2, 3]));

//-------MATH METHOD---------
// ----ceil----
//Computes number rounded up to precision.
console.log(_.ceil(4.006));
console.log(_.ceil(6.004, 2));

//---floor---
// Computes number rounded down to precision.
console.log(_.floor(4.006));
console.log(_.floor(0.046, 2));

//----max------
// Computes the maximum value of array. If array is empty or falsey, undefined is returned.
console.log(_.max([4, 2, 8, 6]));

//-----mean----
// Computes the mean of the values in array.
console.log(_.mean([4, 2, 8, 6]));

//----min------
// Computes the minimum value of array. If array is empty or falsey, undefined is returned.

console.log(_.min([4, 2, 8, 6]));

// --------round------
// Computes number rounded to precision.

//-------sum--------
// Computes the sum of the values in array.

console.log(_.sum([4, 2, 8, 6]));

// OBJECT
// assign
// Assigns own enumerable string keyed properties of source objects to the destination object. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.

function Foo() {
  this.a = 1;
}

function Bar() {
  this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

console.log(_.assign({ a: 0 }, new Foo(), new Bar()));
console.log(_.assignIn({ a: 0 }, new Foo(), new Bar()));

// at
// Creates an array of values corresponding to paths of object.
const objec = { a: [{ b: { c: 3 } }, 4] };
console.log(_.at(objec, ['a[0].b.c', 'a[1]']));

// default
//Assigns own and inherited enumerable string keyed properties of source objects to the destination object for all destination properties that resolve to undefined. Source objects are applied from left to right. Once a property is set, additional values of the same property are ignored.
// const defaulted = ({ a: 1 }, { b: 2 }, { a: 3 });
console.log(_.defaults({ a: 1 }, { b: 2 }, { a: 3 }));

// forIn
// Iterates over own and inherited enumerable string keyed properties of an object and invokes iteratee for each property. The iteratee is invoked with three arguments: (value, key, object). Iteratee functions may exit iteration early by explicitly returning false.

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.forIn(new Foo(), function (value, key) {
  console.log(key);
});

// forOwn
// Iterates over own enumerable string keyed properties of an object and invokes iteratee for each property. The iteratee is invoked with three arguments: (value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
function Foor() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.forOwn(new Foo(), function (value, key) {
  console.log(key);
});

// invert
// Creates an object composed of the inverted keys and values of object. If object contains duplicate values, subsequent values overwrite property assignments of previous values.
const inver = { a: 1, b: 2, c: 1 };
console.log(_.invert(inver));

// camelCase
// Converts string to camel case.

const camel = 'Foo Bar';
console.log(_.camelCase(camel));

console.log(_.capitalize('FOO BAR'));

//kebabCase
// Converts string to kebab case.
console.log(_.kebabCase(camel));

// reapeat
// Repeats the given string n times.
console.log(_.repeat('*', 3));
console.log(_.repeat('abc', 2));
console.log(_.repeat('abc', 0));

// snakeCase
// Converts string to snake case.
console.log(_.snakeCase(camel));

//trim
//  Removes leading and trailing whitespace or specified characters from string.

console.log(_.trim('  abc  '));

//trimEnd
console.log(_.trimEnd('  abc  '));
