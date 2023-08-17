import game from "./Games.module.scss"
import { TitleContent } from "@/ui/TitleContent"
import { Game } from "./Game/Index"

export const Games = () => {
    return(
        <section className={game.game}>
            <div className="container">
                <TitleContent text="Most popular services" image="/icons/flame.png" />
                <Game />
            </div>
        </section>
    )
}