import NewTodoForm from '@/components/NewTodoForm';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="font-bold my-8 text-2xl">My Todos</h1>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
