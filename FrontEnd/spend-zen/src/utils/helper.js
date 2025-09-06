import moment from "moment";

export const validateEmail = (email) => {
  let regExForEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regExForEmail.test(email);
};

export const getInitials = (fullName) => {
  const intialSplitted = fullName?.trim().split(" ") || 'UN';
  const intial =
    (intialSplitted[0]?.[0].toUpperCase() || "") +
      (intialSplitted[1]?.[0].toUpperCase() || "") || "";
  const color = intial
    ? `hsl(${((intial.charCodeAt(0) - 65) * 360) / 26}, 30%, 60%)`
    : "#d1d5db";

  return { intial: intial, color: color };
};

export const addThousandsSeperator = (amount) => {
  if (!amount || isNaN(amount)) return "0";
  const regex = /\B(?=(\d{3})+(?!\d))/g;
  const [integerPart, fraction] = amount.toString().split(".");
  const formattedInteger = integerPart.replace(regex, ",");

  return fraction ? `${formattedInteger}.${fraction}` : formattedInteger;
};

export const prepareExpenseBarChartData = (data = []) => {
  console.log(data);
  const chartData = data.map((item) => ({
    category: item?.category,
    amount: item?.amount,
    month: moment.utc(item?.date).format("MMM")
  }));
  return chartData;
};

export const prepareIncomeBarChartData = (data = []) =>{
  console.log(data);
  const sortData = [...data].sort((a,b) => new Date(a.date) - new Date(b.date));

  const chartData = sortData.map((item)=>({
     month: moment.utc(item?.date).format("MMM"),
    amount: item?.amount,
    category: item?.source
  }));

  console.log(JSON.stringify(chartData));

  return chartData;
}

export const getRandomColor = (index) => {
  const hash = index.split("").reduce((accu,curr)=> accu + Math.pow(curr.charCodeAt(0),2),0);
  return `hsl(${hash % 360}, 60%, 50%)`
}
