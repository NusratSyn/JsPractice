const btn= document.getElementById('btn');
const div= document.getElementById('div');
const h1= document.getElementsByClassName('h1tag');
btn.addEventListener('click',()=>{
for (let index=0; index<h1.length; index++){
    const element= h1[index];
    element.innerText= `${index}`
    div.appendChild(element.innerText[index]);
    console.log('btn click');
}
})