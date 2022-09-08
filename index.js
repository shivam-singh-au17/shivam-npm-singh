class ShivamPrintFunc {
    constructor(name, age, address) {
        this.name = name
        this.age = age
        this.address = address
    }

    printData() {
        console.log(`My Name Is:- [${this.name}] And Age Is:- [${this.age}] And My Address Is:- [${this.address}].`);
    }
}

module.exports.shivamPrintFunc = ShivamPrintFunc;