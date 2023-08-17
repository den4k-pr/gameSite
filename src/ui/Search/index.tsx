import Image from "next/image"



export const Search = () => {
    return(
        <nav className="header__right_search">
            <input type="text" placeholder="Search" />
            <Image src="/header/search.png" alt="search" height={16} width={16} />
        </nav>
    )
}