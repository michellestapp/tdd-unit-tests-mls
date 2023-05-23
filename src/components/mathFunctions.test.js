import {sum, divide, subtract} from './mathFunctions.js'


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

describe('Test for 10 - 4 equal to 6',() => {
    const result = subtract(10,4)
    it('should be equal to 6', () => {
        expect(result).toBe(6)
    })
    it('should be greater than 2', () =>{
        expect(result).toBeGreaterThan(2)
    })
    it('should be close to (+/- 2) 6', () =>{
        expect(result).toBeCloseTo(6,2)
    })
    it('should not be less than or equal to 2', () =>{
        expect(result).not.toBeLessThanOrEqual(2)
    })
})

