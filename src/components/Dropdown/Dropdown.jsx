import React,{ useState } from 'react'
import './Dropdown.css'

import { useNavigate } from "react-router-dom";

const Dropdown = ({ item, index, deleteItem, editItem }) => {
      const [toggle, setToggle] = useState('none')
      let navigate = useNavigate();
      const toggleDropdown = ( ) =>{
            if(toggle === 'block'){
                  setToggle('none')
            }else{
                  setToggle('block')
            }
      }
      const delItem = (index) =>{
            deleteItem(index)
      }
      const goToEdit = (item) =>{ 
            editItem(item)
            let path = '/edit'; 
            navigate(path);
      }
  return (
      <>
            <div onClick={() => {toggleDropdown()}} class="dropdown" style={{alignSelf: 'center', marginRight: 16, width: '10%',display: 'flex', justifyContent: 'end'}} >
                  <button class="dropbtn" className='dotdotdot' style={{width: 32, height: 32, display: 'flex', alignItems: 'center'}}>
                        <svg  width="16.25" height="3.75"  viewBox="0 0 18 4" fill="#28292E" xmlns="http://www.w3.org/2000/svg">
                              <path className="svg" d="M13.375 2C13.375 0.964844 14.2148 0.125 15.25 0.125C16.2852 0.125 17.125 0.964844 17.125 2C17.125 3.03516 16.2852 3.875 15.25 3.875C14.2148 3.875 13.375 3.03516 13.375 2ZM7.125 2C7.125 0.964844 7.96484 0.125 9 0.125C10.0352 0.125 10.875 0.964844 10.875 2C10.875 3.03516 10.0352 3.875 9 3.875C7.96484 3.875 7.125 3.03516 7.125 2ZM4.625 2C4.625 3.03516 3.78555 3.875 2.75 3.875C1.71445 3.875 0.875 3.03516 0.875 2C0.875 0.964844 1.71445 0.125 2.75 0.125C3.78555 0.125 4.625 0.964844 4.625 2Z" fill="#242424"/>
                        </svg> 
                  </button>
                  <div className="dropdown-content" style={{display: toggle}}>
                        <div onClick={() => {goToEdit(item)}} className='edit-btn' style={{width: '100%', height: 54, padding: '16px, 0px', borderRadius: 8, display: 'flex', alignItems: 'center', margin: '0 auto'}}>
                              <div>
                                    <svg style={{marginRight: 8,  marginLeft: 16}} width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                          <path  d="M2.0591 11.3731L12.7512 0.679268C13.6301 -0.199567 15.0574 -0.199567 15.9363 0.679268L17.3215 2.06548C17.4305 2.17517 17.5254 2.29364 17.6098 2.41845C18.1863 3.29173 18.0914 4.47896 17.3215 5.24888L6.62696 15.9399C6.58125 15.9856 6.53555 15.9997 6.48633 16.0735C6.14883 16.3723 5.74805 16.5622 5.31211 16.7204L1.08176 17.9649C0.785742 18.0528 0.465469 17.9719 0.247148 17.7223C0.0288208 17.536 -0.0528051 17.2161 0.0343122 16.9172L1.27863 12.6879C1.42488 12.1922 1.69313 11.7387 2.0591 11.3731ZM2.89758 13.1625L2.08969 15.9118L4.8375 15.1032C5.03086 15.0364 5.26641 14.9133 5.43516 14.7481L13.4649 6.71489L11.2535 4.50357L3.25231 12.5649C3.23156 12.586 3.21153 12.6071 3.19219 12.6317C3.05649 12.7829 2.95559 12.9657 2.89758 13.1625Z" fill="#242424"/>
                                    </svg>
                              </div>
                              <p style={{fontSize: 20, fontWeight: 700, margin: 0, marginRight: 16}}>Edit</p>
                        </div>
                        <div onClick={() => { delItem(index)}}className='delete-btn' style={{width: '100%', padding: '16px, 0px', height: 54, borderRadius: 8, display: 'flex', alignItems: 'center', maxWidth: 155}}>
                              <div>
                                    <svg style={{marginRight: 8, marginLeft: 16}} width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <g clip-path="url(#clip0_730_522)">
                                                <path d="M5.75 14.0625C5.75 14.3719 5.49687 14.625 5.1875 14.625C4.87813 14.625 4.625 14.3719 4.625 14.0625V6.75C4.625 6.44063 4.87813 6.1875 5.1875 6.1875C5.49687 6.1875 5.75 6.44063 5.75 6.75V14.0625ZM8.5625 14.0625C8.5625 14.3719 8.30937 14.625 8 14.625C7.69063 14.625 7.4375 14.3719 7.4375 14.0625V6.75C7.4375 6.44063 7.69063 6.1875 8 6.1875C8.30937 6.1875 8.5625 6.44063 8.5625 6.75V14.0625ZM11.375 14.0625C11.375 14.3719 11.1219 14.625 10.8125 14.625C10.5031 14.625 10.25 14.3719 10.25 14.0625V6.75C10.25 6.44063 10.5031 6.1875 10.8125 6.1875C11.1219 6.1875 11.375 6.44063 11.375 6.75V14.0625ZM11.2871 0.876797L12.5773 2.8125H15.0312C15.4988 2.8125 15.875 3.19043 15.875 3.65625C15.875 4.12383 15.4988 4.5 15.0312 4.5H14.75V15.1875C14.75 16.7414 13.4914 18 11.9375 18H4.0625C2.5093 18 1.25 16.7414 1.25 15.1875V4.5H0.96875C0.50293 4.5 0.125 4.12383 0.125 3.65625C0.125 3.19043 0.50293 2.8125 0.96875 2.8125H3.42336L4.71289 0.876797C5.07852 0.328957 5.69375 0 6.35117 0H9.64883C10.3062 0 10.9215 0.328992 11.2871 0.876797ZM5.45117 2.8125H10.5488L9.88086 1.81266C9.82812 1.73461 9.74023 1.6875 9.64883 1.6875H6.35117C6.25977 1.6875 6.14023 1.73461 6.11914 1.81266L5.45117 2.8125ZM2.9375 15.1875C2.9375 15.8098 3.44129 16.3125 4.0625 16.3125H11.9375C12.5598 16.3125 13.0625 15.8098 13.0625 15.1875V4.5H2.9375V15.1875Z" fill="black"/>
                                          </g>
                                          <defs>
                                                <clipPath  id="clip0_730_522">
                                                      <rect width="15.75" height="18" fill="white" transform="translate(0.125)"/>
                                                </clipPath>
                                          </defs>
                                    </svg>
                              </div>
                              <p style={{fontSize: 20, fontWeight: 700, margin: 0}}>Delete</p> 
                        </div>
                  </div>
            </div>
      </>
  )
}

export default Dropdown