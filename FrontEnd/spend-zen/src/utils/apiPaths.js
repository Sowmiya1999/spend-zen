export const BASE_URL = "http://localhost:8080";

export const API_PATHS = {
    AUTH: {
        LOGIN: "/api/v1/auth/login",
        REGISTER: "/api/v1/auth/signUp",
        GET_USER_INFO: "/api/v1/auth/getUserInfo"
    },
    INCOME: {
        ADD_INCOME: "/api/v1/income/addIncome",
        GET_ALL_INCOME: "/api/v1/income/getAllIncome",
        DELETE_INCOME:(incomeId) => `/api/v1/income/${incomeId}`,
        DOWNLOAD_INCOME: "/api/v1/income/downloadIncomeExcel"
    },
    EXPENSE:{
        ADD_EXPENSE: "/api/v1/expense/addExpense",
        GET_ALL_EXPENSE: "/api/v1/expense/getAllExpenses",
        DELETE_EXPENSE:(expenseId) => `/api/v1/expense/${expenseId}`,
        DOWNLOAD_EXPENSE: "/api/v1/expense/downloadExpenseExcel"
    },
    IMAGE: {
        UPLOAD_IMAGE: "/api/v1/auth/upload-image"
    },
    DASHBOARD:{
        GET_DATA: "/api/v1/dashboard"
    }
}