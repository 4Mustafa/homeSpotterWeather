const { 
    checkRoute,
    // checkCity,
    // checkDate
} = require('../src/components/locationSearch/validation');

describe('validation', () => {

    describe('check the route', () => {
        test('it returns true if information is returned when passed a city', (done) => {
           const input = 'london'
            expect(checkRoute(input)).toBe(true);
            done();
        });
        test('it returns false if a city is not passed', (done) => {
            const input= ' '
            expect(checkRoute(input)).toBe(false);
            done();
        });
    
    });
    // describe('check the city', () => {
    //     test('it returns the city that is passed through the function', (done) => {
    //        const  expectedOutput= 'London'
    //        const input='London'
    //         expect(checkCity(input)).toBe(expectedOutput);
    //         done();
    //     });
    //     // YOUR CODE HERE
    //     test('it returns the city passed even if abbreviations are used', (done) => {
    //         const input = 'Ny'
    //         const expectedOutput = 'New York';
    //         expect(closestDate(inputTime)).toBe(expectedOutput);
    //         done();
    //     });
    // });
    // describe('check the date', () => {
    //     test('it returns today, tomorrow and the day after when passed a city', (done) => {
    //        const input='London'
    //        var tomCheck = moment().add(1,'days').format('dddd')
    //        var dayAfterCheck= moment().add(2,'days').format('dddd')
    //        var twoDaysLaterCheck= moment().add(3,'days').format('dddd')

    //         expect(checkDate(input)).toBe(`${tomCheck,dayAfterCheck,twoDaysLaterCheck}`);
    //         done();
    //     });
    // });
});
