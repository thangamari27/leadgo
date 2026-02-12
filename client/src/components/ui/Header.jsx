import React from 'react';
import { ChartNoAxesCombined } from 'lucide-react'
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { ui } from '../../utils/styles/LeadStyles';

function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center">
            <h1 className="flex items-center gap-1 text-2xl font-bold text-gray-900">
                <ChartNoAxesCombined className='inline-block' size={28} />
                <span>
                    Lead
                    <span className="text-blue-600">GO</span>
                </span>
            </h1>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <Link to="/">
              <Button variant="outline" styles={ui.Button} >
                Add Lead
              </Button>
            </Link>
            <Link to="/leads">
              <Button variant="primary" styles={ui.Button} >
                View Leads
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;