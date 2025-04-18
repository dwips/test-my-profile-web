import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';

import Profile from './pages/profile';
import Login from './pages/login';
import Register from './pages/register';
import NotFound from './pages/not-found';
import { getAccessToken } from './utils/storage';
import MainLayout from './components/layouts/main-layout';

import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<AuthorizedRoutes />}>
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/"
              element={
                <div>
                  <h1>Home</h1>
                </div>
              }
            />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>

      <Toaster richColors />
    </>
  );
}

export default App;

export const AuthorizedRoutes = () => {
  const isAuth = getAccessToken() !== null;

  return (
    <>
      {isAuth ? (
        <MainLayout>
          <Outlet />
        </MainLayout>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};
