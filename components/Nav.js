import requests from "../utils/requests"
function Nav() {
    return (
        <nav className='relative'>
        <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll '>
            {Object.entries(requests).map(([key , {title,url}])=>(
                <h2>{title}</h2>
            ))}
            </div>
            <div className=" absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"/>
        </nav>
    )
}

export default Nav
