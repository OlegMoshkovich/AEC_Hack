import React from 'react'
import SvgIcon from '@mui/material/SvgIcon';
import useStore from './Store';
import {colors} from './colors'


export default function Logo({scale=1.0}){
  const { themeScheme } = useStore()


return(
  <SvgIcon sx={{transform: `scale(${scale})`}}>
  <svg width="104" height="150" viewBox="0 0 104 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.4853 1L1 11.4931V149.403H23.4853V1Z" fill={colors[themeScheme].primary}/>
    <path d="M26.2524 72.9077V149.349L54.9647 149.403L55.0463 65.3628L26.2524 72.9077Z" fill={colors[themeScheme].primary}/>
    <path d="M23.4854 1L71.454 6.17757V67.0566L54.9648 65.4579L26.2524 72.9077V149.403H23.4854V1Z" fill="lightGrey"/>
    <path d="M54.8923 65.3628L54.9648 149.403H102.933V70.1361L54.8923 65.3628Z" fill="lightGrey"/>
    <path d="M55.0463 65.3628L102.779 70.2901" stroke="grey" strokeLinecap="round"/>
    <path d="M55.0463 65.3628V149.127" stroke="grey" strokeLinecap="round"/>
    <path d="M55.0463 65.3628L26.2524 72.9077V149.281H102.78" stroke="grey" strokeLinecap="round"/>
    <path d="M102.779 70.2901V149.281" stroke="grey" strokeLinecap="round"/>
    <path d="M26.2524 149.281H1.15393" stroke="grey" strokeLinecap="round"/>
    <path d="M1.15393 149.281V11.6245" stroke="grey" strokeLinecap="round"/>
    <path d="M1.15393 11.6245L23.4807 1.15396" stroke="grey" strokeLinecap="round"/>
    <path d="M23.4807 1.15396L71.3679 6.23524" stroke="grey" strokeLinecap="round"/>
    <path d="M71.3679 6.23523V66.9026" stroke="grey" strokeLinecap="round"/>
    <path d="M23.4807 1.30795V149.127" stroke="grey" strokeLinecap="round"/>
  </svg>
  </SvgIcon>

)
}
