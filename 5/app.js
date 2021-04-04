const userBox = document.querySelectorAll('.user-box');
const checkBtn = document.querySelectorAll('.check-input');

  for(let i=0; i < userBox.length; i++){
      userBox[i].addEventListener('click', ()=>{
          checkBtn[i].click();
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