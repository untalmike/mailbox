import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'

const Header = ({isChecked, setIsChecked}) => {
    //console.log(isChecked)
    return (
        <div className='flex'>
            <h1 className="block text-gray-900 font-black text-5xl text-center md:w-2/3 mx-auto uppercase dark:text-white">buzón de quejas y sugerencias</h1>
            <div className="flex items-end justify-end align-middle space-x-4">
                <FontAwesomeIcon icon={faSun} className={isChecked===true ? "text-gray-900": "text-gray-900"}/>
                <input
                    id="btn-dark"
                    type="checkbox"
                    className="appearance-none w-10 focus:outline-none checked:bg-gray-600 h-5 bg-gray-700 rounded-full before:inline-block before:rounded-full before:bg-gray-300 before:h-4 before:w-4 checked:before:translate-x-full shadow-inner transition-all duration-300 before:ml-0.5"
                    onChange={(e) => setIsChecked(e.currentTarget.checked)}
                    checked={isChecked}
                />
                
                <FontAwesomeIcon icon={faMoon} className={isChecked===false ? "text-gray-100": "text-gray-100"}/>
            </div>
        </div>
    )
}

export default Header 