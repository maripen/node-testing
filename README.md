# Node test play

## Tech Stack Used

- `NodeJS`
- `Mocha`
- `Chai`
- `Sinon - to be introduced for mocking`
- `Nock - to be introduced for http mocking`


## Test commands

```
npm run test
```
```
npm run test test/math.test.js
```
```
npm run test -- --grep "math.add()"
```
```
npm run test -- --grep "should equal 2"
```
```
npm run test -- --grep "should throw an error"
```
