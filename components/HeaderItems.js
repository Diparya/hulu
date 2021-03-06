function HeaderItems({title,Icon}) {
    return (
        <div className="flex flex-col w-12 group items-center cursor-pointer sm:w-20 hover:text-white">
            <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
            <p className='opacity-0 group-hover:opacity-100 tracking-widest'>{title}</p>
        </div>
    )
}

export default HeaderItems
