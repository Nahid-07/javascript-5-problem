/* ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে।  */

function squareArea(length,width){
    let result = length * width;
    return result;
}
let length = 1200;
let width = 700;
const area = squareArea(length,width);
console.log(area , "Square metere");