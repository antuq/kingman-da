import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AllRecords from './pages/AllRecords';
import Settings from './pages/Settings';
import { Routes, Route, NavLink } from 'react-router-dom';
import NewDA from './pages/NewDA';

function App() {
  const navItems = [
    { to: '/', label: 'Home', end: true },
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/all-records', label: 'All Records' },
    { to: '/settings', label: 'Settings' },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-800">
      {/* Sidebar */}
      <aside className="w-60 shrink-0 bg-slate-900 px-5 py-7 text-white">
        <h2 className="pb-8 text-xl font-bold tracking-wide">
          Kingman Marine
        </h2>

        <nav>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main workspace */}
      <main className="min-w-0 flex-1 p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/all-records" element={<AllRecords />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/new-da" element={<NewDA/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
