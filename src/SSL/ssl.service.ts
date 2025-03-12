import axios from "axios";
import config from "../app/config";

const initPayment = async (initPaymentData:any) => {

    try{
    
        const data = {
            store_id: "progr67cf9fbc5422c",
            store_passwd: "progr67cf9fbc5422c@ssl",
            total_amount: initPaymentData.amount, // Ensure amount exists
            currency: "BDT",
            tran_id: "REF123",
            success_url: "http://localhost:3030/success",
            fail_url: "http://localhost:3030/fail",
            cancel_url: "http://localhost:3030/cancel",
            ipn_url: "http://localhost:3030/ipn",
            shipping_method: "Courier",
            product_name: "Computer.",
            product_category: "Electronic",
            product_profile: "general",
            cus_name: initPaymentData.name,
            cus_email: initPaymentData.email,
            cus_add1: "Dhaka",
            cus_add2: "Dhaka",
            cus_city: "Dhaka",
            cus_state: "Dhaka",
            cus_postcode: "1000",
            cus_country: "Bangladesh",
            cus_phone: initPaymentData.phoneNumber,
            cus_fax: "01711111111",
            ship_name: "Customer Name",
            ship_add1: "Dhaka",
            ship_add2: "Dhaka",
            ship_city: "Dhaka",
            ship_state: "Dhaka",
            ship_postcode: 1000,
            ship_country: "Bangladesh",
        };
    
        const response = await axios({
            method: "POST",
            url: "https://sandbox.sslcommerz.com/gwprocess/v3/api.php",
            data: data,
            headers: { "Content-type": "application/x-www-form-urlencoded" },
        });
    
        return response.data;

    }catch(error){
        throw new Error("something went wrong")
    }
    
  
};

const validatePaymentIpn = async (payload:any)=>{

    try{
        const response = await axios({
            method:"GET",
            url: `${config.ssl.ssl_validation_api}?val_id=${payload.val_id} & store_id = ${config.ssl.store_id} & store_passwd= ${config.ssl.store_id} & format= json`
          })
      
          return response.data
     }catch(error){
    
        throw new Error("payment validation failed")
    
     }

}



export const SSLService = {
    initPayment,validatePaymentIpn
}