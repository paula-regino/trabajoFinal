import Dashboard from '../components/Dashboard';

const DashboardPage = () => {
  return (
    <div className='dashboard-page' style={{ minHeight: '100%', display: 'flex', flexDirection: 'column', flex: 1 }}>
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
