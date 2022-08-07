/* (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।  */
function findingLargest(numbers){
    let largest = numbers[0];
    let secondLargest = 0;
    for(i=0; i <numbers.length ;i++){
        let index = i;
        let element = numbers[index];
        if(element > largest){
            largest = element
        }else if(element>secondLargest && element !== largest){
            secondLargest = element;
        }
    }
    return [secondLargest,largest];
}
let array = [25,23,56,89,78];
const largestNumber = findingLargest(array);
console.log(largestNumber);