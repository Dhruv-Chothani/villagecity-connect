import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Navbar from './Navbar';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if current page is not home
  const isNotHomePage = location.pathname !== "/";
  
  // Handle back navigation
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Back Button - Show only on non-home pages */}
        {isNotHomePage && (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-4">
              <Button 
                variant="outline" 
                onClick={handleBack}
                className="flex items-center gap-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </div>
          </div>
        )}
        
        {/* Page Content */}
        {children}
      </main>
    </>
  );
};

export default PageWrapper;
