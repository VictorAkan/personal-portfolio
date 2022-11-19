import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <nav className="px-32 flex items-center mt-7">
                <div className="nav-head">
                    <Link to="/">Personal</Link>
                </div>
                <div className="nav-links ml-auto flex items-center space-x-20">
                    <ul className="flex space-x-10">
                        <li>
                            <Link className="hover:text-yellow-500" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="hover:text-yellow-500" to="/">About Me</Link>
                        </li>
                        <li>
                            <Link className="hover:text-yellow-500" to="/">Services</Link>
                        </li>
                    </ul>
                    <Link className="bg-gradient-to-b shadow-xl shadow-[#fcc300] from-yellow-400 to-yellow-600 rounded-3xl px-6 p-3 text-white" to="/">Contact Me</Link>
                </div>
            </nav>
        </div>
    )
}