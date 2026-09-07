import React from 'react'
import "../Admin/Admin.css"

export default function AdminResults({name, email, score, feedback, issueDate}) {
  const date = new Date(issueDate).toLocaleDateString();
  return (
    <div className='admin-result-container'>
        <h2>{name}</h2>
        <h3>{email}</h3>
        <h4>Score : {score}%</h4>
        <p>{feedback}</p>
        <span style={{ alignSelf: "flex-start" }}>Dated: {date}</span>
    </div>
  )
}
