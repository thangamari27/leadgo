import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { useLeads } from '../../context/LeadContext';
import FormFields from './FormFields';
import { ui } from '../../utils/styles/LeadStyles';
import { leadsFormContent } from '../../utils/constant/LeadConstant';

function LeadForm({ showToast, styles }) {
  const content = leadsFormContent;
  const [loading, setLoading] = useState(false);
  const { addLead } = useLeads();
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async(data) => {
    setLoading(true);
    try {
        await addLead(data);
        reset();
        showToast('Lead created successfully!', 'success');
    } catch (error) {
        showToast(error.message || 'Failed to create lead', 'error');
    }
    finally{
        setLoading(false);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg shadow-gray-300 border-t-4 border-blue-500 p-6">
      <div className='flex justify-between items-center'>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Create New Lead Entry</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormFields content={content} register={register} errors={errors} styles={ui} />
        <Button type="submit" loading={loading} styles={ui.Button} variant='primary'>
          Create Lead
        </Button>
      </form>
    </div>
  )
}

export default LeadForm;