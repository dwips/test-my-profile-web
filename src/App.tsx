import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';

import Profile from './pages/profile';
import Login from './pages/login';
import ProfileEdit from './pages/profile-edit';
import Register from './pages/register';
import NotFound from './pages/not-found';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<ProfileEdit />} />
          <Route path="/" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>

      <Toaster richColors />
    </>
  );
}

export default App;
