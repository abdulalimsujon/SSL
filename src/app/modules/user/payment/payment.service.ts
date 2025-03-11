import { SSLService } from "../../../../SSL/ssl.service"


const validatePayment = async (payload:any)=>{
    if(!payload || !payload.status || !(payload.status=== "VALID")){

        return {message : "invalid payment"

    }
  }

 const response = await paymentService.validatePayment(payload)

  // should update where it is need

//     if(response.status !== "VALID"){
    
//         return {message : "payment failed"
    
//         }

// }
}

const initPayment = async ()=>{

    const result = await SSLService.initPayment()

}

export const paymentService = {
    initPayment,
    validatePayment
}