const smallCups=document.querySelectorAll('.cup-small')

const listers=document.getElementById('liters')
const percenatge=document.getElementById('percentage')
const remained=document.getElementById('remained')

updateBigCup();

smallCups.forEach((cup,idx)=>{
    cup.addEventListener('click',()=>highlightCups(idx))
})

function highlightCups(idx){
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }
    smallCups.forEach((cup,idx2)=>{
     if(idx2<=idx){
       cup.classList.add('full')
     }else{
        cup.classList.remove('full')
     }
    })

    updateBigCup();
}

function updateBigCup(){
 const fullCups=document.querySelectorAll('.cup-small.full').length

 const totalCup=smallCups.length

 if(fullCups==0){
     percenatge.style.visibility='hidden'
     percenatge.style.height=0;
 }else{
     percenatge.style.visibility='visible'
     percenatge.style.height=`${fullCups/totalCup*330}px`

     percenatge.innerText=`${fullCups/totalCup*100}%`
 }

 if(fullCups==totalCup){
     remained.style.visibility='hidden'
     remained.style.height=0;
 }else{
     remained.style.visibility='visible'
     listers.innerText=`${2-(250*fullCups/1000)}L`
 }

}