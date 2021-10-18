
const getYearsSelect = (years, seletectedYear) => years.filter(arrayOfYears => {
    return arrayOfYears.value === seletectedYear.toString();
  });

const getYearFromSelect = (getYearsSelect) => {
     return getYearsSelect[0].label;
};
 

  export { getYearFromSelect  }