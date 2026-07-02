import React from 'react';
import './History.css';
import Result from '../ui/Result';
import "../Dashboard/Dashboard.css";
import { GiProgression } from "react-icons/gi";

export default function History() {
  return (
    <div className='history-container'>
      <div className='history-wrapper'>
        <Result/>
        <Result/>
        <Result/>
        <div className="profile-container">
              <h3>Result</h3>
              <h2>
                75% <GiProgression color="orange" />
              </h2>
              <h5>Feedback</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste architecto
                quo aperiam ad porro recusandae, enim veniam debitis, perferendis omnis
                velit dolores consequuntur temporibus maxime deserunt, reiciendis ullam
                nihil dicta laboriosam sint
              </p>
            </div>
      </div>
    </div>
  )
}
