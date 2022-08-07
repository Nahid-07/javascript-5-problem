
/* একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। */

function findingSmallestNumber(numbers){
    let smallest = numbers[0];
    for(i=0;i<numbers.length;i++){
        let element = numbers[i];
        if(element<smallest){
            smallest = element;
        }
    }
    return smallest;
}

let array = [78,77,85,22,14,45];
let SmallestNumber = findingSmallestNumber(array);
console.log(SmallestNumber);