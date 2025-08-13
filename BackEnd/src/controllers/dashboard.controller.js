import { DASHBOARD_DATA_FETCH_FAILED_ERROR_MESSAGE, DASHBOARD_DATA_FETCHED_SUCCESS_MESSAGE } from "../common/constants.js";
import DashboardService from "../services/dashboard.service.js";

class DashboardController{
    constructor(){
        this.dashboardService = new DashboardService();
    }
    getDashboardData = async (req, res) =>{
        try{
            console.log(`DahboardController.getDashboardData is called`);
            const dashboardData = await this.dashboardService.getDashboardDataService(req.userId);
            return res.status(200).json({message: DASHBOARD_DATA_FETCHED_SUCCESS_MESSAGE, data: dashboardData});
        }
        catch(err){
            console.log(`DashboardController.getDashboardData produced error: ${err}`);
            return res.status(500).json({message:DASHBOARD_DATA_FETCH_FAILED_ERROR_MESSAGE, error:err})
        }
    }
}

export default DashboardController;