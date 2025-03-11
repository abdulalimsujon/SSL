import { SSLService } from "../../../../SSL/ssl.service";
import catchAsync from "../../../utilities/catchAsync";
import sendResponse from "../../../utilities/sendResponse/sendResponse";
import { paymentService } from "./payment.service";

const initPayment = catchAsync(async(req,res)=>{
    const result = await SSLService.initPayment()
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:"payment successfully initiated",
        data: result
    })
})
const validatePayment = catchAsync(async(req,res)=>{
    const query = req.query;
    const result = await paymentService.validatePayment(query)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:"successfull get the query",
        data: result
    })
})

export const paymentController = {
    initPayment,validatePayment
}