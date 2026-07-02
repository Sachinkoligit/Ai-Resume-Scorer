import React from 'react';
import './History.css';
import Result from '../ui/Result';
// import "../Dashboard/Dashboard.css";
import { GiProgression } from "react-icons/gi";

export default function History() {
  return (
    <div className='history-container'>
      <div className='history-wrapper'>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
      </div>
    </div>
  )
}
