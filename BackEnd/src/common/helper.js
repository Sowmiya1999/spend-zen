export const convertToExcel = async (jsonData, workSheetName, workBookName) =>{
  const wb = xlsx.utils.book_new(); // creates new excel workbook
  const ws = xlsx.utils.json_to_sheet(jsonData); // converts json data into worksheet
  xlsx.utils.book_append_sheet(wb,ws,workSheetName); // it appends the newly created worksheet to the workbook
  xlsx.writeFile(wb, workBookName); // saves the excel file in the provided name
  return;
}