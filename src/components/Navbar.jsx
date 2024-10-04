import { FaReact } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-[#21222A] w-full text-[#00D8FF] flex items-center gap-3 p-6"> 
        <FaReact className="text-4xl" />
        <div className="text-3xl font-bold">ReacFacts</div>
    </nav>
  )
}

export default Navbar
