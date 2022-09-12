import { useState } from 'react'
import { Link } from 'react-router-dom'
// import drop down items
import { dropdownItems } from './NavbarItems'

function DropdownComponent() {
  const [dropdown, setDropdown] = useState(true)

  return (
    <div
      className={
        dropdown
          ? 'bg-gray-200 w-40 pt-4  absolute mx-[-15px] my-[-10px] top-[62px] z-10 '
          : 'hidden'
      }
    >
      <ul className="flex flex-col gap-2  ">
        {dropdownItems.map((item) => {
          return (
            <div>
              <Link to={item.path}> 
              <li
                key={item.id}
                className="hover:bg-primary  p-2 "
                onClick={() => {
                  setDropdown(!dropdown)
                }}
              >
               {item.title}
              </li>
              </Link>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
export default DropdownComponent
