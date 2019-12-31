import checkPassword from './checkPassword'

test('1 point for lowercase', () => {
  expect( checkPassword('pudding') ).toEqual({ 
    score: 1,
    hasLowerCase: true, 
    hasUpperCase: false,
    hasNumber: false,
    hasNonAlphaNumeric: false,
    isOver8Char: false,
    isOver12Char: false
  })
}) 

test('2 point for lowercase & uppercase', () => {
  expect( checkPassword('Pudding') ).toEqual({ 
    score: 2,
    hasLowerCase: true, 
    hasUpperCase: true,
    hasNumber: false,
    hasNonAlphaNumeric: false,
    isOver8Char: false,
    isOver12Char: false
  })
})

test('3 point for lowercase,uppercase &number', () => {
  expect( checkPassword('Pudd1ng') ).toEqual({ 
    score: 3,
    hasLowerCase: true, 
    hasUpperCase: true,
    hasNumber: true,
    hasNonAlphaNumeric: false,
    isOver8Char: false,
    isOver12Char: false
  })
})

test('4 point for lowercase,uppercase,number & nonNumeric', () => {
  expect( checkPassword('Pudd1ng&') ).toEqual({ 
    score: 4,
    hasLowerCase: true, 
    hasUpperCase: true,
    hasNumber: true,
    hasNonAlphaNumeric: true,
    isOver8Char: false,
    isOver12Char: false
  })
})

test('5 point for lowercase,uppercase,number, nonNumeric & over 8', () => {
  expect( checkPassword('Pudd1ng&?') ).toEqual({ 
    score: 5,
    hasLowerCase: true, 
    hasUpperCase: true,
    hasNumber: true,
    hasNonAlphaNumeric: true,
    isOver8Char: true,
    isOver12Char: false
  })
})

test('6 point for lowercase,uppercase,number, nonNumeric, over 8 & over 12', () => {
  expect( checkPassword('Pudd1ng&?ibwjl') ).toEqual({ 
    score: 6,
    hasLowerCase: true, 
    hasUpperCase: true,
    hasNumber: true,
    hasNonAlphaNumeric: true,
    isOver8Char: true,
    isOver12Char: true
  })
})