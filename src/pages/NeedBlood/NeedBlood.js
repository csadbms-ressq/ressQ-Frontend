import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'
import './NeedBlood.css'
//import { SlDrop } from 'react-icons/S1';
import Dropdown from '../../components/Dropdown/Dropdown'
import DropdownDis from '../../components/DropdownDis/DropdownDis'
import {useState} from 'react'
import axiosInstance from '../../utils/axios'
import baseUrl from '../../utils/Urls'




const NeedBlood = () => {
   
    const[data,setdata]=useState([])
   

    const handleSignup=(e)=>{
    
       
  axiosInstance.get(`${baseUrl}/donors/`).then((Response)=>{console.log(Response)
   setdata(Response.data)})
}
  return (
    <MainLayout>
    <div className='need_blood_container'>
      <div className="need_blood_title">
        Need Blood?
      </div>      
      <div className="need_blood_searchBox">
        <div className="need_blood_bGroups">
            <div className="need_blood_bgicon">
            {/*<SlDrop/>*/}
            </div>
            {/*<input type="" className="need_blood_bgroup" />*/}
            
            <Dropdown/>
            
            


        </div>
        <div className="need_blood_location">
            <div className="need_blood_locicon">

            </div>
            {/*
            <select value="___"  className="need_blood_loc" placeholder='Select District'>
                <option value="Ernakulam">Ekm</option>
                <option value="Kottayam">Kottayam</option>
                <option value="Edukki">Edukki</option>
                <option value="Kannur">Kannur</option>
                <option value="Wayanad">Vayanad</option>
                <option value="Kollam">Kannur</option>
                <option value="Kozhikkode">Kozhikkode</option>
                <option value="Thrissur">Thrissur</option>
                <option value="Trivandrum">Trivandrum</option>
                <option value="Alappuzha">Alappuzha</option>
                <option value="Kasaragod">Kasaragod</option>
                <option value="Malappuram">Malappuram</option>


            </select>
             */}
            <DropdownDis/>
            
        </div>
        <button className='need_blood_searchbtn' onClick={handleSignup} >Button</button>
      </div>
      
      <div className="need_blood_records">
      <p>name &emsp; branch &emsp; batch &emsp; phoneno </p>
    {
        data.map((data)=>{
            return(
            
                <p>{data.dname}&emsp;&emsp;{data.branch}&emsp;&emsp;{data.batch}&emsp;&emsp;{data.phoneno} </p> 
            )
        })
    }
   
      
      </div>





        
    </div>
    </MainLayout>
  )
}

export default NeedBlood



