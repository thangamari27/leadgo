import React from 'react';

const Select = React.forwardRef(({ 
  content,
  label, 
  error, 
  options = [],
  className = '',
  styles,
  ...props 
}, ref) => {
  return (
    <div className={styles.selectContainer}>
      {label && (
        <label className={styles.label}>
          {label}
        </label>
      )}
      <select
        ref={ref}
        className={`${styles.select}
          ${error ? styles.errorBorder : styles.border}
          ${className}
        `}
        {...props}
      >
        <option value="">Select a source</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
});

Select.displayName = 'Select';
export default Select;