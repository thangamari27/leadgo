import React from 'react';

const Input = React.forwardRef(({
  content, 
  label, 
  error, 
  type = 'text',
  className = '',
  styles,
  ...props
}, ref) => {
  return (
    <div className={styles.inputContainer}>
      {label && (
        <label className={styles.label}>
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        className={`${styles.input}
          ${error ? styles.errorBorder : styles.border}
          ${className}
        `}
        {...props}
      />
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';
export default Input;