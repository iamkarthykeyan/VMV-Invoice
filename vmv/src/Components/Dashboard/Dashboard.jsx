import React, { useState } from 'react';
import { FiHome, FiDroplet, FiBarChart2, FiBox, FiClipboard, FiGlobe, FiDollarSign, FiSettings } from 'react-icons/fi';
import { RiTeamLine } from 'react-icons/ri';
import HomeElement from './DashboardElements/HomeElement';
import ThemesElement from './DashboardElements/ThemesElement';
const Dashboard = () => {
    const [activeMenu, setActiveMenu] = useState('home');

    const renderContent = () => {
        switch (activeMenu) {
            case 'home':
                return <Home />;
            case 'invoicethemes':
                return <InvoiceThemes />;
            case 'reports':
                return <Reports />;
            case 'items':
                return <Items />;
            case 'customer-directory':
                return <CustomerDirectory />;
            case 'team':
                return <Team />;
            case 'invoices':
                return <Invoices />;
            case 'online':
                return <Online />;
            case 'banking':
                return <Banking />;
            case 'settings':
                return <Settings />;
            default:
                return <Home />;
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100 text-gray-800">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-lg p-6 flex flex-col justify-between">
                <div>
                    <h1 className="text-2xl font-bold mb-6 text-gray-900">Tools</h1>
                    <ul className="space-y-2">
                        <MenuItem icon={FiHome} label="Home" active={activeMenu === 'home'} onClick={() => setActiveMenu('home')} />
                        <MenuItem icon={FiDroplet} label="InvoiceThemes" active={activeMenu === 'invoicethemes'} onClick={() => setActiveMenu('invoicethemes')} />
                        <MenuItem icon={FiBarChart2} label="Reports" active={activeMenu === 'reports'} onClick={() => setActiveMenu('reports')} />
                        <MenuItem icon={FiBox} label="Items" active={activeMenu === 'items'} onClick={() => setActiveMenu('items')} />
                        <MenuItem icon={RiTeamLine} label="Team" active={activeMenu === 'team'} onClick={() => setActiveMenu('team')} />
                        <MenuItem icon={FiClipboard} label="Invoices" active={activeMenu === 'invoices'} onClick={() => setActiveMenu('invoices')} />
                        <MenuItem icon={FiGlobe} label="Online" active={activeMenu === 'online'} onClick={() => setActiveMenu('online')} />
                        <MenuItem icon={FiDollarSign} label="Banking" active={activeMenu === 'banking'} onClick={() => setActiveMenu('banking')} />
                        <MenuItem icon={FiSettings} label="Settings" active={activeMenu === 'settings'} onClick={() => setActiveMenu('settings')} />
                    </ul>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 bg-gray-50">
                {renderContent()}
            </main>
        </div>
    );
};

const MenuItem = ({ icon: Icon, label, active, onClick }) => {
    return (
        <li
            className={`flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-all 
      ${active ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
            onClick={onClick}
        >
            <Icon size={20} />
            <span className="font-medium">{label}</span>
        </li>
    );
};

const Home = () => <HomeElement />;
const InvoiceThemes = () => <ThemesElement />;
const Reports = () => <h2 className="text-3xl font-semibold">Reports</h2>;
const Items = () => <h2 className="text-3xl font-semibold">Items</h2>;
const Team = () => <h2 className="text-3xl font-semibold">Team</h2>;
const Invoices = () => <h2 className="text-3xl font-semibold">Invoices</h2>;
const Online = () => <h2 className="text-3xl font-semibold">Online</h2>;
const Banking = () => <h2 className="text-3xl font-semibold">Banking</h2>;
const Settings = () => <h2 className="text-3xl font-semibold">Settings</h2>;

export default Dashboard;
