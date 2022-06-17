import React, { useEffect, useState } from 'react'
import style from "./lslider1.module.css"

const Landingslider1 = () => {
    let arr;
    const [count, setcount] = useState(0);

    let increasecount=()=>{
        setcount(count+1)
    }
    let decreasecount=()=>{
        setcount(count-1)
    }
    
    if(count===0){
        arr=[
            {id:1,img:"https://static.naukimg.com/s/0/0/i/trending-naukri/remote.svg",text1:"Remote >",text2:"6.4k+ Jobs"},
            {id:2,img:"https://static.naukimg.com/s/0/0/i/trending-naukri/mnc.svg",text1:"MNC >",text2:"61.4K+ Jobs"},
            {id:3,img:"https://static.naukimg.com/s/0/0/i/trending-naukri/project-management.svg",text1:"Project Mgmt >",text2:"5.3k+ Jobs"},
            {id:4,img:"https://static.naukimg.com/s/0/0/i/trending-naukri/fortune-500.svg",text1:"Fortune 500 >",text2:"22k+ Jobs"},
            {id:5,img:"https://static.naukimg.com/s/0/0/i/trending-naukri/software.svg",text1:"Software & IT >",text2:"35.2k+ Jobs"}
        ]
        
    }else if(count===1){
        arr=[
            {id:1,img:"https://static.naukimg.com/s/0/0/i/trending-naukri/analytics.svg",text1:"Analytics >",text2:"9.2k+ Jobs"},
            {id:2,img:"https://static.naukimg.com/s/0/0/i/trending-naukri/supplychain.svg",text1:"Supply Chain >",text2:"1.2K+ Jobs"},
            {id:3,img:"https://static.naukimg.com/s/0/0/i/trending-naukri/startup.svg",text1:"StartUp >",text2:"4.3k+ Jobs"},
            {id:4,img:"https://static.naukimg.com/s/0/0/i/trending-naukri/hr.svg",text1:"HR >",text2:"4.9K+ Jobs"},
            {id:5,img:"https://static.naukimg.com/s/0/0/i/trending-naukri/finance.svg",text1:"Banking & Fin..",text2:"5.3K+ Jobs"}
        ]
    }else{
        arr=[
            {id:1,img:"https://static.naukimg.com/s/0/0/i/trending-naukri/temporary-wfh.svg",text1:"Temp WFH >",text2:"13.3K+ Jobs"},
            {id:2,img:"https://static.naukimg.com/s/0/0/i/trending-naukri/sales.svg",text1:"Sales >",text2:"10.1k+ Jobs"},
            {id:3,img:"https://static.naukimg.com/s/0/0/i/trending-naukri/engineering.svg",text1:"Engineering >",text2:"3.7k+ Jobs"},
            {id:4,img:"https://static.naukimg.com/s/0/0/i/trending-naukri/freshers.svg",text1:"Freshers >",text2:"54.7 k+ Jobs"},
            {id:5,img:"https://static.naukimg.com/s/0/0/i/trending-naukri/data-science.svg",text1:"Data Science >",text2:"2.5k+ Jobs"}
        ]
        
    }
    
    
    
    //  onClick={count!=0?decreasecount:setcount(0)}
  return (
    <div className={style.mainslider1}>
        <p className={style.sl1head}>Trending on Naukri Today</p>
    <div className={style.sl1flex}>
        <button onClick={decreasecount} disabled={count===0}  className={count===0?style.hidebtn:style.showbtn}><i class="fa-solid fa-backward"></i></button>
        <div className={style.subsl1flex}>
            {arr.map((elem)=>(
                <div key={elem.id} className={style.sldiv}>
                    <img src={elem.img}/>
                    <p className={style.sl1t1}>{elem.text1}</p>
                    <p className={style.sl1t2}>{elem.text2}</p>
                </div>
            ))}
        </div>
        <button onClick={increasecount} disabled={count===2}  className={count===2?style.hidebtn:style.showbtn}><i class="fa-solid fa-forward"></i></button>
    </div>
    </div>
  )
}

export default Landingslider1