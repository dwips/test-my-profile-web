import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Component from '@/features/profile/profile';

function Profile() {
  useEffect(() => {
    document.title = 'Profile - MyApp';
  }, []);

  const [searchParams] = useSearchParams();
  const isEditParam = searchParams.get('isEdit');

  return <Component key={isEditParam} />;
}

export default Profile;
