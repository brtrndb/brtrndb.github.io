const getUserLocale = () => {
  return navigator.language.toLowerCase().split(/[_-]+/)[0];
};

export default getUserLocale;
