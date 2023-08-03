const solution = (surveys) => {
  for (let i = 0; i < surveys.length; i++) {
    for (let j = i + 1; j < surveys.length; j++) {
      if (isFraudulentPair(surveys[i], surveys[j])) {
        return true;
      }
    }
  }
  return false;
}

// loop invariant:
// after one outer loop iteration all possible comparisons for surveys[i] have happened.
// after outer loop completes each survey has been compared to every other survey
// exactly twice and itself once.
// where i = n we have done n * 2 comparisons.
// where i = n we have done all comparisons for surveys[0] - surveys[n].


const isEqual = (objA, objB) => {
  const objAKeys = Object.keys(objA);
  const objBKeys = Object.keys(objB);

  if (objAKeys.length !== objBKeys.length) {
    return false;
  }

  for (let objKey of objAKeys) {
    if (objA[objKey] !== objB[objKey]) {
      return false;
    }
  }
  return true;
}

// compare all surveys

// compare two surveys
// optimize with persisting... something
// duplicates are key sort of?
const isFraudulentPair = (surveyA, surveyB) => {
  if (surveyA.length !== surveyB.length) {
    return false;
  }
  for (let i = 0; i < surveyA.length; i++) {
    if (!isEqual(surveyA[i], surveyB[i])) {
      return false;
    }
  }
  return true;
}


const a = [
  [
    {question: "foo", answer: "bar"},
    {question: "bar", answer: "baz"},
    {question: "fooby", answer: "dooby"}
  ],
  [
    {question: "foo", answer: "bar"},
    {question: "bar", answer: "baz"},
    {question: "fooby", answer: "dooby"}
  ]
]

const b = [
  [
    {question: "foo", answer: "bar"},
    {question: "bar", answer: "baz"},
    {question: "fooby", answer: "dooby"}
  ],
  [
    {question: "foo", answer: "bang"},
    {question: "bar", answer: "zop"},
    {question: "fooby", answer: "anonymous"}
  ],
]

//console.log(isEqual(a[0][0], a[1][0]));
//console.log(isEqual(b[0][0], b[1][0]));

console.log(isFraudulentPair(a[0], a[1]));
console.log(isFraudulentPair(b[0], b[1]));

console.log(solution(b));

