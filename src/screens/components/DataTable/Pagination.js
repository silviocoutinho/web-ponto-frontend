import React, {useState, useEffect} from 'react';
import {  Col } from 'react-bootstrap';
import { activeItem } from './activeItem';



const linkPagination = (pagesAmount, setCurrentPage, currentPage) => {
    let result = []; 
    for (let pagina=1; pagina <= pagesAmount; pagina++) {
      result.push(<li id={'item'+ pagina} key={pagina} className={pagina === currentPage ? 'active' : 'normal'} >  
                    <button id={'button' + pagina} className='pagination-button' onClick={() => setCurrentPage(pagina)}>{pagina}</button>
                  </li>
                );
    }
    return result;
  }
  
const Pagination = ({pagesAmount}) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    
    if (currentPage < 1) {
      setCurrentPage(1);
    }
    if (currentPage > pagesAmount) {
      setCurrentPage(pagesAmount);
    }
    activeItem(currentPage, pagesAmount);
    
  }, [currentPage]);

  return (   
      <Col>
        <ul className="pagination mx-auto float-right" id="pagination">
          <li key='prev1' ><button id='prev' className='pagination-button' onClick={() => setCurrentPage(currentPage-1)}>{'<<'}</button></li>  
            {linkPagination(pagesAmount, setCurrentPage, currentPage)}    
            <li key='next1' ><button id='next' className='pagination-button' onClick={() => setCurrentPage(currentPage+1)}>{'>>'}</button></li>
        </ul>
      </Col>   
  )
};
  
 
  export default Pagination;