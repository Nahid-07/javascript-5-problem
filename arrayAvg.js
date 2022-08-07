/* ৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে।*/
function arrayAvarage(array){
    let sum = 0;
    for(i=0;i<array.length;i++){
        let number = array[i];
        sum +=number;
    }
    let average = sum / array.length;
    return average;
}
const array = [2,3,5,9,5,25,56,89,5,6,4,10];
const avg = arrayAvarage(array);
console.log(avg);