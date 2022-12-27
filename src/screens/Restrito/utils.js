const getLabelYearFromArray = (years, yearFromSelect) => {
  try {
    const result = years.filter(arrayOfYears => {
      return arrayOfYears.value === yearFromSelect.toString();
    });
    return result[0].label;
  } catch (error) {
    return [];
  }
};

const getIndexMonthFromArray = (months, fieldMonth) => {
  const result = months.filter(arrayOfYears => {
    return arrayOfYears.label === fieldMonth.toString();
  });
  return result[0].value;
};

const getIndexYearFromArray = (years, selectedYear) => {
  try {
    const result = years.filter(arrayOfYears => {
      return arrayOfYears.label === selectedYear.toString();
    });
    return result[0].value;
  } catch (error) {
    return [];
  }
};

export { getLabelYearFromArray, getIndexMonthFromArray, getIndexYearFromArray };
