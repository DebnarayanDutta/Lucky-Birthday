const inputbirth = document.querySelector("#inputdate");
const inputlucky = document.querySelector("#inputnumber");
const button = document.querySelector("#button");
const pdiscription = document.querySelector("#discription");
const luckyImg = document.querySelector(".luckyImg")
const unluckyImg = document.querySelector(".unluckyImg")

luckyImg.style.display = "none"
unluckyImg.style.display = "none"

function sumofdigit(inputvalue){
    let dob=inputvalue.replaceAll("-","")
    let total=0
    for(let i=0;i<dob.length;i++){
        total= total+  Number(dob.charAt(i))
    }
   return total

}

button.addEventListener("click", function inputdate(){
let inputvalue=inputbirth.value
let inputluckyvalue= Number(inputlucky.value)
luckyImg.style.display = "none"
unluckyImg.style.display = "none"

let sum=sumofdigit(inputvalue)
console.log(sum)

if (sum<=0){
   pdiscription.innerText="dob cannot be empty"
}
 else if (inputluckyvalue<=0){
    pdiscription.innerText="lucky number cannot be zero"
}
 else if (sum%inputluckyvalue===0){
    luckyImg.style.display = "block"
    pdiscription.innerText="you are lucky"
}
else {
    unluckyImg.style.display = "block"
    pdiscription.innerText="you are not lucky"
}

})