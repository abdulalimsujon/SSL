import axios from "axios"
import config from "../app/config"


const initPayment = async()=>{
    const data = {
        store_id :"progr67cf9fbc5422c",
        store_passwd:"progr67cf9fbc5422c@ssl",
        total_amount: 100,
        currency: 'BDT',
        tran_id: 'REF123', // use unique tran_id for each api call
        success_url: 'http://localhost:3030/success',
        fail_url: 'http://localhost:3030/fail',
        cancel_url: 'http://localhost:3030/cancel',
        ipn_url: 'http://localhost:3030/ipn',
        shipping_method: 'Courier',
        product_name: 'Computer.',
        product_category: 'Electronic',
        product_profile: 'general',
        cus_name: 'Customer Name',
        cus_email: 'customer@example.com',
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: '01711111111',
        cus_fax: '01711111111',
        ship_name: 'Customer Name',
        ship_add1: 'Dhaka',
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: 'Bangladesh',
    };

    const response = await axios({
        method:"POST",
        url:"https://sandbox.sslcommerz.com/gwprocess/v3/api.php",
        data:data,
        headers: {"Content-type":"application/x-www-form-urlencoded"}

    })

    console.log(response.data)
}

const validatePayment = async (payload: any)=>{

 try{
    const response = await axios({
        method:"GET",
        url: `${config.ssl.ssl_validation_api}?val_id=${payload.val_id} & store_id = ${config.ssl.store_id} & store_passwd= ${config.ssl.store_id} & format= json`
      })
    
    //   if(response.status !== "VALID"){
    
    //     return {message : "payment failed"
    
    //     }
    
    //     if(response.tran_id){
    //         console.log("mama it working")
    //     }
    
    
    
    //   }

      return response.data
 }catch(error){

    throw new Error("payment validation failed")

 }

}

export const SSLService = {
    initPayment,validatePayment
}