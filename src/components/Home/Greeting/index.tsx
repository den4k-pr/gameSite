import greeting from "./Greeting.module.scss"
import { SliderGreeting } from "./SliderGreeting"

export const Greeting = () => {
    
    return(
        <section className={greeting.greeting}>
            <SliderGreeting />
            <div className="container">
                <h1 className={greeting.greeting_title}>NICE AND FRIENDLY WORLD OF WARCRAFT BOOSTING SERVICE</h1>
                <p className={greeting.greeting_subTitle}>
                    <span>Join nice-boost</span>, upgrade your account and enjoy the game with us.
                    Simple, fast and safe
                </p>
                <button className={greeting.greeting_button}>Get services now</button>
            </div>
        </section>
    )
}