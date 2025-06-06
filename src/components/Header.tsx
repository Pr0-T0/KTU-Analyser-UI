import logo from "../assets/user.png";

const Header = () => {
  return (
    <header className='flex justify-between items-center bg-gray-900 text-white py-2 md:px-20 drop-shadow-md'>
        <a href="#">
          <h1 className='font-bold text-lg hover:scale-105 transition-all'>KTU Result Analyser</h1>
        </a>
        <ul className='hidden xl:flex items-center font-semibold gap-12'>
          <li className='p-3 cursor-pointer transition-all duration-200 hover:underline hover:underline-offset-4 '>Home</li>
          <li className='p-3 cursor-pointer transition-all duration-200 hover:underline hover:underline-offset-4 '>Team</li>
          <li className='p-3 cursor-pointer transition-all duration-200 hover:underline hover:underline-offset-4 '>Sign Up</li>
          <li className="w-8 h-8 rounded-full object-cover cursor-pointer"><img src={logo} /></li>
        </ul>

        <div className="block xl:hidden">
          <i className="bx bx-menu text-5xl cursor-pointer"></i>
        </div>
      </header>
  )
}

export default Header;