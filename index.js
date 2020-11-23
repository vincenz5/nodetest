const testMod = require('testModule');
//Test file for trying out Node JS

console.log("Index.js file works")

const testFunction = () => {

    console.log("Test function is working");
    
    testMod.testModFunc();
};

testFunction();
