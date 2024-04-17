import { DocumentDuplicateIcon } from "@heroicons/react/24/outline"
import { UserIcon } from "@heroicons/react/24/outline"
import { ChartPieIcon, PlusIcon} from "@heroicons/react/24/outline"
import { HomeIcon } from "@heroicons/react/24/solid"

import { useState } from 'react';

export default function BottomNavBar() {
  const [active, setActive] = useState('home');

  const handleClick = (item: string) => {
    setActive(item)
  }

  return (
    <nav className="rounded-t-lg shadow-md relative top-3 p-4">
      <span className="w-20 h-20 pl-10 pr-7 p-6 bg-green-400 rounded-full relative bottom-0"></span>
      <ul className="flex flex-row justify-between space-x-10">
        <li 
          className={active === 'home' ? 'active' : ''}
          onClick={() => handleClick('home')}
        >
          <a href="#" className="text-black relative">
            <HomeIcon className="w-8 h-8" />
          </a>
        </li>

        <li 
          className={active === 'data' ? 'active' : ''}
          onClick={() => handleClick('data')}
        >
          <a href="#" className="text-black relative">
            <ChartPieIcon className="w-8 h-8" />
          </a>
        </li>

        <li 
          className={active === 'add-goal' ? 'active' : ''}
          onClick={() => handleClick('add-goal')}
        >
          <a href="#" className="text-black relative bottom-7">
            <PlusIcon className="w-8 h-8" />
          </a>
        </li>

        <li
          className={active === 'notes' ? 'active' : ''}
          onClick={() => handleClick('notes')}
        >
          <a href="#" className="text-black  relative">
            <DocumentDuplicateIcon className="w-8 h-8" />
          </a>
        </li>

        <li
          className={active === 'profile' ? 'active' : ''}
          onClick={() => handleClick('profile')}
        >
          <a href="#" className="text-black relative">
            <UserIcon className="w-8 h-8" />
          </a>
        </li>
      </ul>
    </nav>
  )
}
