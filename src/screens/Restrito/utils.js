const getLabelYearFromArray = (years, yearFromSelect) => {
  const result = years.filter(arrayOfYears => {
    return arrayOfYears.value === yearFromSelect.toString();
  });
  return result[0].label;
};

const getIndexMonthFromArray = (months, fieldMonth) => {
  const result = months.filter(arrayOfYears => {
    return arrayOfYears.label === fieldMonth.toString();
  });
  return result[0].value;
};

const getIndexYearFromArray = (years, selectedYear) => {
  const result = years.filter(arrayOfYears => {
    return arrayOfYears.label === selectedYear.toString();
  });
  console.log(Number(result[0].value));
  return result[0].value;
};

export { getLabelYearFromArray, getIndexMonthFromArray, getIndexYearFromArray };
