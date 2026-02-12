import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center text-gray-600 text-sm">
          <p>© {currentYear} LeadFlow. All rights reserved.</p>
          <p className="mt-1 text-xs text-gray-500">
            Streamline your lead management process
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;