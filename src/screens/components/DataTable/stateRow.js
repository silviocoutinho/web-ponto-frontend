const defineStateRow = (index, itemsPerPage) => {
    const page = Math.ceil((index+1)/itemsPerPage);  
    return page >= 2 ? ` page${page} hidden` : ` page${page}`;
  }

  export { defineStateRow };