
 const heartCounter = document.getElementById('heart-counter')

 const heartBtns = document.querySelectorAll('.heart-btn')
 let count = 0;

 for(const btn of heartBtns){
    btn.addEventListener('click', function(){
           count++
        heartCounter.innerText = count;
    })
 
 }