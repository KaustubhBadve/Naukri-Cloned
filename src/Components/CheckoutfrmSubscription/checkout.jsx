import React from 'react'
import Navbar from './navbar'
import style from './Checkout.module.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../HomePageFooter/Footer'

const Checkout = () => {
  const navigate=useNavigate()
  return (
    <>
    <div>
        <Navbar/>
        <div className={style.CheckoutMain}>
       

       <div className={style.Checkoutmain1}>
       <h1 className={style.Checkouth1}> <b>My Cart</b> </h1>
       <div className={style.Checkoutsub1}>
        <div > <b>Premium Monthly Plan</b> </div>
        <div><b>₹ 1,495</b> </div>
       </div>

        <p>Resume Display 1 month</p>
        <p>Jobs on Mail for 1 month - Premium Monthly Plan</p>
        <p>RecruiterConnection 2 Credits</p>
        <p>Jobs on SMS for 1 month - Premium Monthly Plan</p>
        <button className={style.checkbtn1}>Delete</button>
        <br />
        <button className={style.checkbtn2} onClick={()=>navigate("/resume")}>CONTINUE SHOPPING</button>
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

    <button onClick={()=>navigate("/payment")} className={style.checkbtn3}>CONTINUE</button>
       </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Checkout