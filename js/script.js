
// heart button functionality 

 const heartCounter = document.getElementById('heart-counter')

 const heartBtns = document.querySelectorAll('.heart-btn')
 let count = 0;

 for(const btn of heartBtns){
    btn.addEventListener('click', function(){
           count++
        heartCounter.innerText = count;
    })
 
 }

   // call button functionality 
 let coin = 100;
 const coinBtn = document.getElementById('coin-button');
 const historyDiv = document.getElementById('history-div');
 const clearBtn = document.getElementById('clear-button');

 const callButtons = document.getElementsByClassName('call-button');
 const names = document.getElementsByClassName('name');
 const numbers = document.getElementsByClassName('number');
 

 for(const btn of callButtons){
    const index = Array.from(callButtons).indexOf(btn);
   btn.addEventListener('click', function(){
      if(coin <= 0){
         alert('❌ Not enough coins you need at least 20 coins to call.');
         return
      }
      const alertMessage = `📞 Calling ${names[index].innerText} ${numbers[index].innerText}...`;
     alert(alertMessage);
      coin -= 20
      coinBtn.innerText = coin

      const now = new Date().toLocaleTimeString()
      const addDiv = document.createElement('div');
      addDiv.innerHTML = `
      <div class="flex justify-between items-center bg-[#FAFAFA] p-2 m-3 rounded-lg">
         <div>
            <p class="font-bold">  ${names[index].innerText} </p>
            <p class="text-gray-500">  ${numbers[index].innerText} </p>
         </div>
         <p>  ${now} </p>
      </div>

      `
        historyDiv.appendChild(addDiv);  
})
}

document.getElementById('clear-button').addEventListener('click',function(){
   historyDiv.innerHTML = '';
})
 
//   copy button 

const copyCount = document.getElementById('copy-count');
const copyBtns = document.getElementsByClassName('copy-btn')
let counter = 0
  for(const copyBtn of copyBtns){
    const index = Array.from(copyBtns).indexOf(copyBtn);
  copyBtn.addEventListener('click', function(){
   counter++
   copyCount.innerText = counter
   alert(`❌ ${names[index].innerText}, ${numbers[index].innerText}`);

   const link =document.createElement('a');
   link.href = 'https://example.com';
   link.innerText = `Link ${counter}`;
   link.target = '_blank';
   document.body.appendChild(link);

})
}

