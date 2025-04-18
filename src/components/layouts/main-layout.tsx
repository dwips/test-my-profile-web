import { Menu, Home, User2, Edit3, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { removeAccessToken } from '@/utils/storage';
import Logo from '../elements/logo';

function MainLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white p-4">
      <header className="flex justify-between items-center">
        <div>
          <Logo />
        </div>

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu className="h-10 w-10 cursor-pointer" />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => {
                  navigate('/');
                }}
              >
                <Home />
                <span>Home</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => {
                  navigate('/profile');
                }}
              >
                <User2 />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => {
                  navigate('/profile?isEdit=true');
                }}
              >
                <Edit3 />
                <span>Edit Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => {
                  removeAccessToken();
                  navigate('/login');
                }}
              >
                <LogOut />
                <span>Log Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div>{children}</div>
    </div>
  );
}

export default MainLayout;
