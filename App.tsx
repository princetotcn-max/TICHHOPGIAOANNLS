
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CompetencyList from './components/CompetencyList';
import IntegratorTool from './components/IntegratorTool';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'framework': return <CompetencyList />;
      case 'integrator': return <IntegratorTool />;
      case 'assistant': return <AIAssistant />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 flex flex-col">
        {/* Header bar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-slate-600">☰</button>
            <h2 className="text-lg font-bold text-slate-800">
              {activeTab === 'dashboard' && 'Tổng quan hệ thống'}
              {activeTab === 'framework' && 'Thư viện Năng lực số'}
              {activeTab === 'integrator' && 'Công cụ Tích hợp'}
              {activeTab === 'assistant' && 'Trợ lý AI'}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors">
              🔔
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900">Giáo viên Demo</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Tài khoản Premium</p>
              </div>
              <img 
                src="https://picsum.photos/seed/user123/40/40" 
                alt="Avatar" 
                className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
              />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8 flex-1 overflow-y-auto max-w-7xl mx-auto w-full">
          {renderContent()}
        </div>

        {/* Footer */}
        <footer className="p-8 border-t border-slate-200 bg-white">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© 2024 HOC8.com - Nền tảng học tập & phát triển năng lực số.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-600">Điều khoản</a>
              <a href="#" className="hover:text-blue-600">Bảo mật</a>
              <a href="#" className="hover:text-blue-600">Trợ giúp</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
