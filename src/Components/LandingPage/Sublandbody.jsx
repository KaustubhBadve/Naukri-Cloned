import React from 'react'
import style from "./sublandbody.module.css"

const Sublandbody = () => {
    let arr=[
        {img:"https://static.naukimg.com/s/0/0/i/ambitionbox-comp/flipkart.png",company:"Flipkart >",text:"488 Interviews"},
        {img:"https://static.naukimg.com/s/0/0/i/ambitionbox-comp/byjus.png",company:"Byjus >",text:"712 Interviews"},
        {img:"https://static.naukimg.com/s/0/0/i/ambitionbox-comp/tcs.png",company:"TCS >",text:"2.5k Interviews"},
        {img:"https://static.naukimg.com/s/0/0/i/ambitionbox-comp/accenture.png",company:"Accenture >",text:"3.2k Interviews"},
        {img:"https://static.naukimg.com/s/0/0/i/ambitionbox-comp/cognizant.png",company:"Cognizant >",text:"1.7k Interviews"},
        {img:"https://static.naukimg.com/s/0/0/i/ambitionbox-comp/amazon.png",company:"Amazon >",text:"1.9k Interviews"}

    ]
    let arr1=[
        {text1:"Software Engineer ",text2:"(7.2K+ questions)"},
        {text1:"Business Analyst ",text2:"(2.8K+ questions)"},
        {text1:"Consultant ",text2:"(2.4K+ questions)"},
        {text1:"Financial Analyst ",text2:"(894 questions)"},
        {text1:"Sales & Marketing ",text2:"(991 questions)"},
        {text1:"Quality Engineer ",text2:"(1.3K+ questions)"}
    ]
  return (
    <div>
    <div className={style.subbody}>
        <div className={style.subdiv1}>
            <span className={style.inbox}>by Ambition Box</span>
            <p className={style.larger}>Prepare for your next interview</p>
            <img src="https://static.naukimg.com/s/0/0/i/ab-interview.png" alt="" />
        </div>
        <div className={style.center}>
            <p className={style.medium}>Interview questions by company</p>
            <div className={style.grid}>
                {arr.map((elem)=>(
                    <div className={style.flex}>
                        <img src={elem.img} alt="" />
                        <div>
                            <p className={style.med}>{elem.company}</p>
                            <p>{elem.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <p className={style.blue}>View all companies :- </p>
        </div>

        <div className={style.center}>
            <p className={style.medium}>Interview questions by role</p>
            <div className={style.subtdiv}>
                {arr1.map((elem)=>(
                    <p className={style.tdivp}>{elem.text1}<span>{elem.text2}</span></p>
                ))}
            </div>
            <p className={style.blue}>View all Roles :-</p>
        </div>
    </div>
    </div>
    
    
  )
}

export default Sublandbody