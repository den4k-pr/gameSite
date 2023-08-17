import Image from "next/image"
import game from "../Games.module.scss"

export const Game = () => {
    return(
        <div className={game.game__games}>
            {['', "", "", "","",""].map((index) =>
                <figure key={index} className={game.gamePart}>
                    <Image className={game.gamePart__image} src="/games/game.png" fill alt="game" />
                    <figcaption className={game.gamePart__content}>
                        <div className={game.gamePart__content_top}>
                            <p className={game["gamePart__content_top-time"]}>12 hours</p>
                            <p className={game["gamePart__content_top-category"]}>TBC classic</p>
                        </div>
                        <div className={game.gamePart__content_bottom}>
                            <h3 className={game["gamePart__content_bottom-name"]}>Shadowland Powerleveling</h3>
                            <ul className={game["gamePart__content_bottom-list"]}>
                                <li>
                                    Any KEY level
                                </li>
                                <li>
                                    Best Gear
                                </li>
                                <li>
                                    Fast Boost
                                </li>
                            </ul>
                            <div className={game.gamePart__content_bottom_box}>
                                <p className={game["gamePart__content_bottom_box-price"]}>€ 25</p>
                                <button className={game["gamePart__content_bottom_box-button"]}>Buy now</button>
                            </div>
                        </div>
                    </figcaption>
                </figure>
            )}
        </div>
    )
}