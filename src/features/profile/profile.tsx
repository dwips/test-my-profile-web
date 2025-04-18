import { Edit3, ChevronLeft } from 'lucide-react';

import Menu from './menu';
import { useProfile } from './useProfile';
import BasicDetails from './basic-details';
import AdditionalDetails from './additional-details';
import SpouseDetails from './spouse-details';
import PersonalPreferences from './personal-preferences';

function Profile() {
  const {
    activeMenu,
    setActiveMenu,
    data,
    isLoading,
    isEdit,
    setIsEdit,
    onSubmit,
    isMarried,
  } = useProfile();

  const renderMenu = () => {
    switch (activeMenu) {
      case 0:
        return (
          <BasicDetails
            onSubmit={onSubmit}
            isLoading={isLoading}
            data={data}
            isEdit={isEdit}
            onCancel={() => {
              setIsEdit(false);
            }}
          />
        );
      case 1:
        return (
          <AdditionalDetails
            onSubmit={onSubmit}
            isLoading={isLoading}
            data={data}
            isEdit={isEdit}
            onCancel={() => {
              setIsEdit(false);
            }}
          />
        );
      case 2:
        return (
          <SpouseDetails
            onSubmit={onSubmit}
            isLoading={isLoading}
            data={data}
            isEdit={isEdit}
            onCancel={() => {
              setIsEdit(false);
            }}
          />
        );
      case 3:
        return (
          <PersonalPreferences
            onSubmit={onSubmit}
            isLoading={isLoading}
            data={data}
            isEdit={isEdit}
            onCancel={() => {
              setIsEdit(false);
            }}
          />
        );
      default:
        return <BasicDetails />;
    }
  };

  return (
    <div className="flex gap-14 mt-14">
      <div className="mt-10">
        <Menu
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          isMarried={isMarried}
        />
      </div>
      <div className="flex-1">
        <div className="flex gap-4 items-end">
          <h1 className="text-3xl">
            My <span className="font-bold">Profile</span>
          </h1>
          <hr className="h-1 flex-1 bg-neutral-500 mb-2" />
        </div>

        <div className="mt-4 mb-10">{renderMenu()}</div>
      </div>
      <div>
        <button
          className="cursor-pointer underline flex gap-2 items-center mt-2"
          onClick={() => setIsEdit((prev) => !prev)}
        >
          {isEdit ? (
            <>
              <ChevronLeft className="h-4 w-4" /> Go back to My Profile
            </>
          ) : (
            <>
              Edit profile <Edit3 className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default Profile;
