import { useEffect } from "react"

export const Navbar = ({ menuOpen, setMenuOpen}) => {

    // useEffect is a hook that allows you to perform side effects in function components 
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : "" // This line of code will disable scrolling when the menu is open
    }, [menuOpen]); // This array is called the dependency array, it tells React to run the effect when the value of menuOpen changes

    return (
        <nav className="fixed top-0 w-full z-40 bg-[hsla(0,0%,4%,1)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white">Asha<span className="text-emerald-500">.dev</span></a>

                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
                        <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                        <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
                        <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
