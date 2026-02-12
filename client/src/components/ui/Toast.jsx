import React, { useEffect } from 'react'
import { X, CheckCircle } from 'lucide-react'

function Toast({ content, message, type = 'success', styles }) {
  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  
  return (
    <div className={styles.container}>
      <div className={`${bgColor} ${styles.wrapper}`}>
        <span className={styles?.message}>
          {type === 'success' ? <CheckCircle size={18} className={styles.icon} /> : <X size={18} className={styles.icon} />}
        </span>
        {message}
      </div>
    </div>
  )
}

export default Toast