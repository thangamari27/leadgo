import { useState } from "react";
import LeadForm from "../form/LeadForm"
import Toast from '../ui/Toast'
import { ui } from "../../utils/styles/LeadStyles";

function LeadFormSection() {
  const [toast, setToast] = useState(null);

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <section className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="border-l-4 pl-2 rounded-md bg-blue-100 py-3 border-blue-500 mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Lead Capture & Automation
        </h1>
        <p className="mt-2 text-gray-600">
          Collect new leads and trigger automation workflows via webhook integration
        </p>
      </header>

      <div className="">
        <LeadForm showToast={showToast} />
      </div>

      {toast && <Toast styles={ui.Toast}  message={toast.message} type={toast.type} />}
    </section>
  )
}

export default LeadFormSection