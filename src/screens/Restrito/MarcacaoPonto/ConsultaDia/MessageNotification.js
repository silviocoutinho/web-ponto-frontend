const setMessage = (
  setTypeOfErrorMessage,
  setErrorMessage,
  typeOfError,
  errorMessage,
) => {
  setTypeOfErrorMessage(typeOfError);
  setErrorMessage(errorMessage);
};

export { setMessage };
