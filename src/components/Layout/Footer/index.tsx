import Link from "next/link"
import footer from "../Layout.module.scss"
import Image from "next/image"
import { ReviewButton } from "@/ui/ReviewButton"

export const Footer = () => {

    const footerList = [
        "FAQ",
        "Reviews",
        "License Agreement",
        "Contact us",
        "Account security",
        "Refunding policy"
    ]

    const footerIcons = [
        "foot_diskord",
        "foot_facebook",
        "foot_insta",
        "foot_skape",
        "foot_telegram"
    ]

    return(
        <footer className={footer.footer}>
            <div className="container">
                <div className={footer.footer__row}>
                    <div className={footer.footer__row_column}>
                        <ul className={footer.footer__row_column_list}>
                            {footerList.map((link, index) => 
                                <li key={index}>
                                    <Link href="" className={footer["footer__row_column_list-link"]}>{link}</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className={footer.footer__row_column}>
                        <div className={footer["footer__row_column-center"]}>
                            <Image src="/footer/footer_logo.png" alt="footerLogo" width={84} height={61} />
                            <ReviewButton />
                        </div>
                    </div>
                    <div className={footer.footer__row_column}>
                        <nav className={footer["footer__row_column-icons"]}>
                            {footerIcons.map((icon, index) =>
                                <Link key={index} href="">
                                    <Image src={"/footer/" + icon + ".png"} alt={icon} width={29} height={29} />
                                </Link>
                            )}
                        </nav>
                        <span className={footer["footer__row_column-email"]}>admin@nice-boost.com</span>
                    </div>
                </div>
                <div className={footer.footer__bottom}>
                    <span>(с) World of Warcraft, WoW, Overwatch, Hearthstone,Heroes of the Storm, Diablo 3 and Blizzard Entertainment are registered trademarks of Blizzard Entertainment Inc DESTINY 2 is registrerd tragemark of BUNGIE INC.</span>
                </div>
            </div>
        </footer>
    )
}