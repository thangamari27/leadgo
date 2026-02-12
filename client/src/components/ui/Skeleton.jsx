import React from 'react'

function Skeleton({ className = '', styles }) {
  return (
    <div className={`${styles?.container} ${className}`} />
  )
}

export default Skeleton