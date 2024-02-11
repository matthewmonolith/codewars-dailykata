function unique(arr) {
  return arr.filter((el, i) => {
    return arr.indexOf(el) === i
  })
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O