import { Fragment } from "react"

const Product=()=>{

    const paymentHandler= async (e)=>{
        console.log("triggered")
        const response=await fetch('http://localhost:8002/order',{
            method:'POST',
            body:JSON.stringify({
                amount:100,
                currency:'INR',
                receipt:"f;doij",
            }),
            headers:{
                "Content-Type":"application/json"
            },
        })
        const order= await response.json();
        console.log(order)
        
    
    var options = {
        "key": "rzp_test_l0o8MMGgkJwAYC",
        "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "kaif",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler":async function (response){
           const body={
            ...response,
           }
           const validateRes = await fetch("http://localhost:8002/order/validate",{
            method:"POST",
            body:JSON.stringify(body),
            headers:{
                "Content-type":"application/json",
            }
           });
           const jsonRes = await validateRes.json();
           console.log(jsonRes)
        },
        "prefill": {
            "name": "Md kaif",
            "email": "mkaif7736@gmail.com",
            "contact": "9000090000"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }

    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response){
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();}
    return(
        <Fragment>
            <button onClick={paymentHandler}>click here to pay</button>
        </Fragment>
    )
}
export default Product