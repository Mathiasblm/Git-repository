class Array {
    
    constructor(data) {
        this.data = data;
    }
    
    reverse() {
        let result = [];
        
        for(let i = this.data.length - 1; i >= 0; i--) {
            result.push(this.data[i])
        }
        return result;
    }

}

let tal = new array([1,2,3,4])

console.log(tal.reverse())