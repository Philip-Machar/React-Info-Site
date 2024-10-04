import { FaReact } from "react-icons/fa";

const Main = () => {
  return (
    <div className="bg-[#282D35] w-full text-white p-6 relative">
      <h1 className="text-4xl font-bold pt-5 pb-7">Fun facts about React</h1>
      <ul className="list-disc pl-10 marker:text-[#61DAFB] marker:text-3xl grid gap-2 pb-28">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li className="w-[400px]">Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <FaReact className="absolute font-bold text-[#33373E] text-[300px] top-1/2 -translate-y-1/2 right-[-150px]" />
    </div>
  )
}

export default Main
