/* ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।   */

let a = 1000;
let b = 200;
let c = 100;
if(a<b && a < c){
    console.log(a);
}else if (b<a && b<c){
    console.log(b);
}else{
    console.log(c);
}