
export const validateEmail = (email) => {
  let regExForEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regExForEmail.test(email);
};

export const getInitials = (fullName) =>{
   const intialSplitted = fullName.trim().split(" ");
   const intial = ((intialSplitted[0]?.[0].toUpperCase() || '') + (intialSplitted[1]?.[0].toUpperCase() || '')) || '';
   const color = intial ?`hsl(${(intial.charCodeAt(0) - 65) * 360 / 26}, 30%, 60%)` : "#d1d5db";

   return {intial:intial, color:color};
}

export const addThousandsSeperator = (amount) =>{
  if(!amount || isNaN(amount)) return '';
  const regex=/\B(?=(\d{3})+(?!\d))/g;
  const [integerPart, fraction] = amount.toString().split(".");
  const formattedInteger = integerPart.replace(regex,',');

  return fraction
  ? `${formattedInteger}.${fraction}`
  : formattedInteger;

}


