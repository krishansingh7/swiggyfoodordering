import Sum from "../components/Sum";

describe('Its my first test case', () => { 
    test('should test sum validation', () => { 
        const result = Sum(3,4);

        expect(result).toBe(7);
     })
 })