
export const Navigation = () => {
  return (
    <nav className="max-w-6xl m-auto flex items-center justify-between px-4 mt-6 sm:text-2xl">
      <div className="logo">
        logo
      </div>
      <ul className="flex items-center gap-3 font-medium list-none">
        <li className=" hover:text-blue-700">Home</li>
        <li className=" hover:text-blue-700">About</li>
        <li className=" hover:text-blue-700">Contact Us</li>
      </ul>
    </nav>
  )
}

export default Navigation