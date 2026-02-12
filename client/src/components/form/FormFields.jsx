import React from 'react';
import Input from '../ui/Input';
import Select from '../ui/Select';

function FormFields({ content, register, errors, styles }) {
  return (
    <>
      <Input
        label="Full Name"
        placeholder="Enter your Name"
        error={errors.name?.message}
        styles={styles.Input}
        {...register('name', { required: 'Name is required' })}
      />
      
      <Input
        label="Email"
        type="email"
        placeholder="Enter your Email"
        error={errors.email?.message}
        styles={styles.Input}
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address'
          }
        })}
      />
      
      <Input
        label="Phone"
        placeholder="Enter your phone no"
        error={errors.phone?.message}
        styles={styles.Input}
        {...register('phone', { required: 'Phone is required' })}
      />
      
      <Input
        label="Company"
        placeholder="Company name"
        error={errors.company?.message}
        styles={styles.Input}
        {...register('company', { required: 'Company is required' })}
      />
      
      <Input
        label="Message"
        placeholder="Tell us about your needs"
        error={errors.message?.message}
        styles={styles.Input}
        {...register('message', { required: 'Message is required' })}
      />
      
      <Select
        label="Source"
        options={content.sourceOptions}
        error={errors.source?.message}
        styles={styles.Select}
        {...register('source', { required: 'Source is required' })}
      />
    </>
  )
}

export default FormFields