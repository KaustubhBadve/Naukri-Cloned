import React, { useState } from 'react'
import style from './Checkout.module.css'
import { useNavigate } from 'react-router-dom'
import NavbarPayment from './navbarPayment'
import Footer from '../HomePageFooter/Footer'


const CheckoutCardDetails = () => {
const [flag, setflag] = useState(false)
const [flag1, setflag1] = useState(false)
const [flag2, setflag2] = useState(false)
const navigate=useNavigate()

const HandleCardNumber=(e)=>{
  let value=e.target.value
  if(value.length>=12)
  {
    setflag(true)
  }
  else{
    setflag(false)
  }
}

const HandleCardNumber1=(e)=>{
  let value=e.target.value
  if(value.length>5)
  {
    setflag1(true)
  }
  else{
    setflag1(false)
  }
}

const HandleCardNumber2=(e)=>{
  let value=e.target.value
  if(value.length==3)
  {
    setflag2(true)
  }
  else{
    setflag2(false)
  }
}
  

const HandleClick=()=>{
    if(flag && flag1 && flag2)
    {
      navigate("/CaptureOtp")
    }
    else{
      alert("Please filled required fields to proceed")
    }
 
 
}
  
  return (
    <>
    
    <div className={style.maincard}>
    <NavbarPayment/>
        <div className={style.CheckoutMain}>
       

       <div className={style.Checkoutmain1}>
       <h1 className={style.Checkouth11}> <b>Choose payment method</b> </h1>

       <div className={style.paymentcardmain}>
       <div className={style.firesrcardpay}>
        <h1 className={style.firesrcardpay1}>Credit Card/Debit Card</h1>
       </div>


       <div className={style.paymentCard22}>
        
        <label >
          Card Number <br />
          <input type="text" onChange={HandleCardNumber} autocomplete="off" maxLength="12" required/>
        </label>
       {flag ? "" : <div className={style.error}>Please enter valid card number</div>} 
<br /><br />

        <label >
        Card holder name <br />
          <input type="text" onChange={HandleCardNumber1} required/>
        </label>
        {flag1 ? "" : <div className={style.error}>Please enter valid Card Holder Name</div>}
       <br /><br />

        <label >
        Expiry date <br />

          <select name="Month" id="">
            <option>Month</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            </select> 

            <select name="Year">
              <option >2022</option>
              <option >2023</option>
              <option >2024</option>
              <option >2025</option>
              <option >2026</option>
              <option >2027</option>
              <option >2028</option>
              <option >2029</option>
              <option >2030</option>
              <option >2031</option>
              <option >2032</option>
              <option >2033</option>
              <option >2034</option>
              <option >2035</option>
              <option >2036</option>
              <option >2037</option>
              <option >2038</option>
              <option >2039</option>
              <option >2040</option>
              <option >2041</option>
              <option >2042</option>
              <option >2043</option>
              <option >2044</option>
              <option >2045</option>
              <option >2046</option>
              <option >2047</option>
              <option >2048</option>
              <option >2049</option>
              <option >2050</option>
             
            </select>
        </label>
           <br /><br />


        <label >
          CVV <br />
          <div className={style.cvv}>
          <input type="text" autocomplete="off" maxLength="3" onChange={HandleCardNumber2} required></input> <div className={style.cardpayimgdiv}><img src="https://static.naukimg.com/s/7/123/i/cvv.30afa5f9.png" alt="" /></div>   
          <p>3 digits printed on the back of the card</p>
          </div>
          
        </label>
        {flag2 ? "" : <div className={style.error}>Please enter valid CVV</div>}
<br /><br />

          <div className={style.paymentcheckbox}>
            <input type="checkbox" />
            <p>I agree to Terms and Conditions, Privacy Statement. Naukri will automatically continue your subscription and charge the monthly membership fee to your payment method until you cancel. You may cancel your subscription at any time.</p>
          </div>

          <button onClick={()=>HandleClick()} className={style.checkbtn33}>MAKE PAYMENT</button>
          <br />
          <div className={style.cardpaymentbtn}>Don't Have Card?</div>
        </div>      
       </div>
      
       </div>
       
       
       
       
       
       
       
       
       
       <div className={style.Checkoutmain2}>

       <h1>Price Details</h1>

       <div className={style.Checkoutmain3}>
        <div>Total</div>
        <div>₹ 1,495</div>
       </div>
       <div className={style.Checkoutmain5}>
        <div className={style.Checkoutmain6}>Discount (20% OFF) <span><i class="fa-solid fa-circle-info"></i></span></div>
        <div> -₹ 298</div>
       </div>
       <div className={style.Checkoutmain3}>
        <div>Estimated GST</div>
        <div>₹ 215</div>
       </div>

       <div className={style.br}></div>

       <div className={style.Checkoutmain4}>
        <div>Total Payable Amount</div>
        <div>₹ 1,412</div>
       </div>
       </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default CheckoutCardDetails