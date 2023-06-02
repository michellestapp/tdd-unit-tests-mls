import {sum, divide, subtract, mult,capFirstLetter, concatenate,returnSecondWord} from './mathFunctions.js'


describe('Test sum function using 2+2 equal to 4',() =>{

    const result = sum(2,2)
    it('should equal 4', () => {
        expect(result).toBe(4)
    })
    it('should be greater than 3',() => {
        expect(result).toBeGreaterThan(3)
    })
    it('should be less than 5',()=>{
        expect(result).toBeLessThan(5)
    })
    it('should not be equal to 5',() => {
        expect(result).not.toBe(5)
    })
})

describe('Testfor 6 divided by 3',() =>{

    const result = divide(6,3)
    it('should equal 2', () => {
        expect(result).toBe(2)
    })
    it('should be greater than 1',() => {
        expect(result).toBeGreaterThan(1)
    })
    it('should be less than 3',()=>{
        expect(result).toBeLessThan(3)
    })
    it('should not be equal to 3.5',() => {
        expect(result).not.toBe(3.5)
    })
})

describe('Test for 10 subtracted from 4 equal to 6',() => {
    const result = subtract(10,4)
    it('should be equal to 6', () => {
        expect(result).toBe(6)
    })
    it('should be greater than 2', () =>{
        expect(result).toBeGreaterThan(2)
    })
    it('should be less than 10', () =>{
        expect(result).toBeLessThan(10)
    })
    it('should not be less than or equal to 2', () =>{
        expect(result).not.toBeLessThanOrEqual(2)
    })
})

describe('Test for multplying 6 times 3 equal to 18',() => {
    const result = mult(6,3)
    
    it('should be equal to 18',() => {
        expect(result).toBe(18)
    })
    it('should be less than 50',() => {
        expect(result).toBeLessThan(50)
    })
    it('should be greater than or equal to 17',() => {
        expect(result).toBeGreaterThanOrEqual(17)
    })
    it('should not be less than 5',() => {
        expect(result).not.toBeLessThan(5)
    })
})

describe('This test should capitalize the first letter of the word "happy"', () => {
    const word = 'happy';

    const result = capFirstLetter(word)

    it('should match the string "Happy"', () => {
        expect(result).toMatch('Happy')
    })
    it('should have a length of 5 letters',() =>{
        expect(result).toHaveLength(5)
    })
    it('should equal the string "Happy"',() =>{
        expect(result).toBe("Happy")
    })
    it('should not match the string "happy"',() => {
        expect(result).not.toMatch('happy')
    })

})

describe('This test verfies that two words, "dog" and "house" concatenate to form "doghouse"',() => {

    const word1 = "dog"
    const word2 = "house"

    const result = concatenate(word1, word2)

    it('should match the word "doghouse"', () => {
        expect(result).toMatch("doghouse")
    })
    it('should equal the string "doghouse"',() => {
        expect(result).toBe("doghouse")
    })
    it('should have a length of 8 characters',() => {
        expect(result).toHaveLength(8)
    })
    it('should not be equal to "Chicken"',() => {
        expect(result).not.toBe('Chicken')
    })
})
describe("This test will return the second word,'craving', from the string 'Just craving a chocolate donut'",() => {
    const sentence = "Just craving a chocolate donut"
    const result = returnSecondWord(sentence)

    it('should match the string "craving"', () => {
        expect(result).toMatch('craving')
    })
    it('should have a length of 7', () => {
        expect(result).toHaveLength(7)
    })
    it('should be the same as "craving"',()=>{
        expect(result).toBe('craving')
    })
    it('should not be 10 characters long',() => {
        expect(result).not.toHaveLength(10)
    })
})