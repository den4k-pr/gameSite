import Link from "next/link"
import navigation from "./Navigation.module.scss"
import { menuList } from "@/templates/list"

export const Navigation = () => {

    return(
        <section className={navigation.navigation}>
            <div className="container">
                <ul className={navigation.navigation__list}>
                    {menuList.map(link => 
                        <li key={link.name} className={navigation.navigation__list_link}>
                            <Link href={link.href}>
                                {link.name}
                            </Link>
                        </li>    
                    )}

                </ul>
            </div>
        </section>
    )
}