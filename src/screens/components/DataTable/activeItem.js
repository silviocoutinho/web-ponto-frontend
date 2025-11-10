
  const setTrClass = (page, state, type) => {
    Array.from(document.getElementsByClassName(page)).forEach(function(tr) {
        if (type === 'ADD'){
            tr.classList.add(state);
        }
        if (type === 'REMOVE'){
            tr.classList.remove(state);            
        }
      });  
  }
  
  const activeItem = (item, pagesAmount) => {    
    for (let pageNumber = 1; pageNumber <= pagesAmount; pageNumber++) {
      if (pageNumber === item ) { 
        setTrClass('page'+pageNumber, 'hidden', 'REMOVE');       
      } else {
        setTrClass('page'+pageNumber, 'hidden', 'ADD');       
      }
    }  

  }

  export { activeItem }