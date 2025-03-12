

import { SSLService } from "../../../../SSL/ssl.service";



const initPayment = async (data:any,appointmentId:string) => {
  
    // init payment data will be after getting data to search appointment id
    const initPaymentData = {
        amount: 100,
        transactionId: "chalai den", // Fixed typo
        name: "abdul alim",
        email: "alimsujon12@gmail.com",
        address: "mohakhali",
        phoneNumber: "231897683",
    };


    const result = await SSLService.initPayment(initPaymentData);
   
    return {paymentUrl:result.GatewayPageURL}
   };


   
const validatePayment = async (payload: any) => {
    if (!payload || !payload.status || !(payload.status === "VALID")) {
        return { message: "invalid payment" };
    }
    
    const response = await SSLService.validatePaymentIpn(payload)

    // after checking this ,we can edit te database where we d


        if(response.tran_id){
            console.log("mama it working")
        }
          if(response.status !== "VALID"){
        
            return {message : "payment failed"
        
            }   
        
          }
    

   
};


export const paymentService = {
    initPayment,validatePayment

};
