import { menuList } from "@/templates/list"
import Image from "next/image"
import Link from "next/link"


export const MenuLi = () => {

    return(
        <>
        {menuList.map(el => 
            <li key={el.name}>
                <Link href={el.href} className="header__menu_body_content-list-link">
                    <Image src={`/header/menu/${el.image}.svg`} width={24} height={24} alt="icon"/>
                    {el.name}
                </Link>
            </li>
        )}
        </>
    )
}