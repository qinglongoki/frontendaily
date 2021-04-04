const userBox = document.querySelectorAll('.user-box');
const checkBtn = document.querySelectorAll('.check-input');
const checkSpan = document.querySelectorAll('.check')


  for(let i=0; i < userBox.length; i++){
      userBox[i].addEventListener('click', ()=>{
          checkBtn[i].click();
        //   const result = getComputedStyle(checkSpan[i], ':after').display;
        //   if(result === 'block'){
        //       userBox[i].style.backgroundColor = "#F4F6FA";
        //   }else{
        //     userBox.style.backgroundColor = "none";
        //   }
        //   console.log(result);
      })
  }


 const searchBar = document.querySelector('#searchBar');
 const nameSpan = document.querySelectorAll('.name');

 searchBar.addEventListener('keyup', (e)=>{
     let userSearch = e.target.value.toLowerCase();

     Array.from(nameSpan).forEach((NameFilter) => {
         const Search = NameFilter.outerText.toLowerCase();

         if(Search.includes(userSearch)){
            NameFilter.parentElement.parentElement.style.display = 'flex';
         }else{
            NameFilter.parentElement.parentElement.style.display = 'none';
         }

     })

 })