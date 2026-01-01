const Btn=document.getElementById("btn")
const Output=document.getElementById("output")
function rolld(){
const arr=[
    "&#9856","&#9857","&#9858","&#9859","&#9860","&#9861"
];
const out=arr[Math.floor(Math.random()*arr.length)]
Output.innerHTML=`Roll  ${arr.indexOf(out)+1}:${out} <br>`
Output.style.display="block"

}
// here +1 is used to convert index to dice number.
// because index starts from 0.
// Here += is used to append the result of each roll.