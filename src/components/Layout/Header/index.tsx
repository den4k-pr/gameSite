"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import header from "../Layout.module.scss"
import Image from "next/image"
import cn from "classnames"
import { Search } from "@/ui/Search"
import { useOutside } from "@/hooks/useOutside"
import { MenuLi } from "@/ui/MenuLi"
import { useParams } from "next/navigation"

export const Header = () => {
    const [scrollClass, setScrollClass] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition >= 70) {
          setScrollClass(true);
        } else {
          setScrollClass(false);
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    const list = [
        {
            name: "Blog",
            href: "/"
        },
        {
            name: "FAQ",
            href: "/"
        },
        {
            name: "Reviews",
            href: "/"
        },
        {
            name: "Contact us",
            href: "/"
        }
    ]

    const peram = useParams()

    const { ref, isShow, setIsShow } = useOutside(false)

    return(
        <header style={{backgroundColor: scrollClass ? "#181818" : "rgba(20, 20, 20, 0.12)"}} className={header.header}>
            <div className={cn("container", header.wrapper)}>
                <nav className={header.header__left}>
                    <Link href="/" className={header.header__left_logo}>
                        <Image src="/header/logo.png" alt="logo" width={54} height={39} />
                    </Link>
                    <ul className={header.header__left_list}>
                        {list.map(li => 
                            <li key={li.name}>
                                <Link href={li.href} className={header.header__left_list_link}>
                                    {li.name}
                                </Link>
                            </li>  
                        )}
                    </ul>
                </nav>
                <div className={header.header__right}>
                    <Link href="" className={header.header__right_curtLink}>
                        <Image src="/header/basket.svg" alt="cart" height={20} width={20}/>
                    </Link>
                    <Search />
                    <nav className={header.header__right_languages}>
                        <Link href="" className={header.header__right_languages_lang}>
                            EN
                        </Link>
                        <Link href="" className={header.header__right_languages_lang}>
                            UA
                        </Link>
                    </nav>
                    <nav onClick={() => setIsShow(!isShow)} className={header.header__right_burger}>
                        <div className={header["header__right_burger-line"]}></div>
                        <div className={header["header__right_burger-line"]}></div>
                        <div className={header["header__right_burger-line"]}></div>
                        <div className={header["header__right_burger-line"]}></div>
                    </nav>
                </div>
                <div style={{opacity: isShow ? "1" : "0", visibility: isShow ? "visible" : "hidden"}} className={cn(header.header__menu, "header__menu")}>
                    <div style={{transform: isShow ? "translateX(0)" : "translateX(100%)"}} ref={ref} className={header.header__menu_body}>
                        <Link href="/" className={header["header__menu_body-logo"]}>
                            <Image src="/header/logo.png" alt="logo" width={54} height={39} />
                        </Link>
                        <button className={header["header__menu_body-button"]}>Get services now</button>
                        <div className={header["header__menu_body-search"]}>
                            <Search />
                        </div>
                        <nav className={header["header__menu_body_content"]}>
                            <ul className={header["header__menu_body_content-list"]}>
                                <MenuLi />
                            </ul>
                            <ul className={header["header__menu_body_content-listBottom"]}>
                                <li>
                                    <Link href="" className={header["header__menu_body_content-listBottom-link"]}>
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" className={header["header__menu_body_content-listBottom-link"]}>
                                        FAQ
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" className={header["header__menu_body_content-listBottom-link"]}>
                                        Reviews
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" className={header["header__menu_body_content-listBottom-link"]}>
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}