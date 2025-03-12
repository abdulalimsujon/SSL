import axios from "axios";
import { SSLService } from "../../../../SSL/ssl.service";
import catchAsync from "../../../utilities/catchAsync";
import sendResponse from "../../../utilities/sendResponse/sendResponse";
import { paymentService } from "./payment.service";
import config from "../../../config";


const initPayment = catchAsync(async(req,res)=>{

    const { appointmentId } = req.params;

    const result = await paymentService.initPayment(req.body,appointmentId)
       //res.redirect(result.paymentUrl)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:"payment successfully initiated",
        data: result
    })
})

const validatePayment = catchAsync(async (req,res)=>{


    const query = req.query;
    const result = await paymentService.validatePayment(query)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:"payment successfully validated",
        data: result
    })
   
   
   })

export const paymentController = {
    initPayment,validatePayment
}