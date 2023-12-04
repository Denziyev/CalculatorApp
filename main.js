var numbers= document.querySelectorAll(".number");
var operations= document.querySelectorAll(".operations");
var calculations=document.querySelector(".calculations");
var equal=document.querySelector("input.equal");
var inputs=document.querySelectorAll('input')


numbers.forEach((x)=>{
    x.addEventListener('click',()=>{
      if(calculations.value=="0"){
        calculations.value=x.value;
      }
      else{
        calculations.value+=x.value;
      }
    })
})


operations.forEach((x)=>{
    x.addEventListener('click',()=>{
      if(calculations.value=="0"){
        calculations.value=0;
      }
      else{
        
      }
    })
})



window.addEventListener("keydown",(event)=>{
        inputs.forEach((input)=>{
                if(event.key==input.value){
                    input.click();
                }
            })
            if(event.key=="Enter"){
                equal.click();
            }
            if(event.key=="Backspace"){
                if(calculations.value.length==1){
                    calculations.value="0";
                }
                else{
                    calculations.value=calculations.value.slice(0,-1);
                }
            }
});


//0.0.0 ola bilməz
//