interface MenuProps {
  activeMenu: number;
  setActiveMenu: React.Dispatch<React.SetStateAction<number>>;
  isMarried?: boolean;
}

function Menu(props: MenuProps) {
  const { activeMenu, setActiveMenu, isMarried } = props;

  const defaultMenuClass =
    'text-left px-4 py-2 text-lg font-semibold hover:bg-gray-200 rounded-md cursor-pointer transition';

  const activeMenuClass =
    'text-left px-4 py-2 text-lg font-semibold bg-gray-200 rounded-md cursor-pointer transition';

  return (
    <>
      <nav className="flex flex-col gap-2">
        <button
          className={activeMenu === 0 ? activeMenuClass : defaultMenuClass}
          onClick={() => setActiveMenu(0)}
        >
          Basic Details
        </button>
        <button
          className={activeMenu === 1 ? activeMenuClass : defaultMenuClass}
          onClick={() => setActiveMenu(1)}
        >
          Additional Details
        </button>
        {isMarried && (
          <button
            className={activeMenu === 2 ? activeMenuClass : defaultMenuClass}
            onClick={() => setActiveMenu(2)}
          >
            Spouse Details
          </button>
        )}
        <button
          className={activeMenu === 3 ? activeMenuClass : defaultMenuClass}
          onClick={() => setActiveMenu(3)}
        >
          Personal Preferences
        </button>
      </nav>
    </>
  );
}

export default Menu;
