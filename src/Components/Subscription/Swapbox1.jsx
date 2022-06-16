import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './Subscription.module.css'


const Swapbox1 = () => {
 const navigate=useNavigate()
  return (
    <div >

   <div className={style.Swapbox11}>
    <div className={style.price}>
    <b>₹ 655*</b> 
    </div>
    <p className={style.Cutprice}>₹ 819*</p>
    <p className={style.Offprice}> 20% Off</p>
   </div>
   
   <p className={style.belowprice}>*Per Month + Taxes</p>
   <button onClick={()=>navigate("/checkout")} className={style.buynow}>BUY NOW</button>


   </div>
  )
}

export default Swapbox1