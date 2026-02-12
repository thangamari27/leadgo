import React from 'react'

function Button({
  content,
  children, 
  styles,
  variant = 'primary', 
  loading = false, 
  disabled = false,
  ...props 
}) {
  return (
    <button
      className={`${styles.baseClasses} ${styles.variants[variant]}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className={styles.loadingContainer}>
          <div className={styles.loading} />
          Loading...
        </div>
      ) : children}
    </button>
  )
}

export default Button