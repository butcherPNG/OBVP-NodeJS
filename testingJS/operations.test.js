// 1

// var operations = require("./operations");
 
// it("should multiply two numbers", function(){
     
//     var expectedResult = 15;
//     var result = operations.multiply(3, 5);
//     if(result!==expectedResult){
//         throw new Error(`Expected ${expectedResult}, but got ${result}`);
//     }
// });


//2

// var operations = require("./operations");
 
// it("should multiply two numbers", function(){
     
//     var expectedResult = 15;
//     var result = operations.multiply(3, 5);
//     if(result!==expectedResult){
//         throw new Error(`Expected ${expectedResult}, but got ${result}`);
//     }
// });
// it("should add two numbers", function(){
     
//     var expectedResult = 16;
//     var result = operations.add(9, 7);
//     if(result!==expectedResult){
//         throw new Error(`Expected ${expectedResult}, but got ${result}`);
//     }
// });


// 3

// var operations = require("./operations");
 
// it("should multiply two numbers", function(){
     
//     var expectedResult = 15;
//     var result = operations.multiply(3, 5);
//     if(result!==expectedResult){
//         throw new Error(`Expected ${expectedResult}, but got ${result}`);
//     }
// });
// it("should add two numbers", function(){
     
//     var expectedResult = 16;
//     var result = operations.add(9, 7);
//     if(result!==expectedResult){
//         throw new Error(`Expected ${expectedResult}, but got ${result}`);
//     }
// });
 
// it("shoud async multiply two numbers", function(done){
     
//     var expectedResult = 12;
//     operations.multiplyAsync(4, 3, function(result){
//         if(result!==expectedResult){
//             throw new Error(`Expected ${expectedResult}, but got ${result}`);
//         }
//         done();
//     });
// });


// 4

// var assert = require("assert");
// var operations = require("./operations");
 
// it("should multiply two numbers", function(){
     
//     var expected = 15;
//     var result = operations.multiply(3, 5);
//     assert.equal(result, expected);
// });


// 5

// it("should multiply two numbers", function(){
     
//     var expected = 15;
//     var result = operations.multiply(3, 5);
//     assert.notEqual(result, expected);
// });


// 6

var assert = require("assert");
var operations = require("./operations");
 
describe("Operation Tests", function(){
    it("should multiply two numbers", function(){
         
        var expected = 15;
        var result = operations.multiply(3, 5);
        assert.equal(result, expected);
    });
    it("should add two numbers", function(){
         
        var expected = 16;
        var result = operations.add(9, 7);
        assert.equal(result, expected);
    });
});