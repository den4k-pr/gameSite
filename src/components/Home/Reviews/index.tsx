import { TitleContent } from "@/ui/TitleContent"
import review from "./Reviews.module.scss"
import Image from "next/image"
import { Review } from "./Review"
import { ReviewButton } from "@/ui/ReviewButton"


export const Reviews = () => {


    return(
        <section className={review.review}>
            <div className="container">
                <TitleContent text="Only trusted reviews" image="/icons/star.png"/>
                <div className={review.review__reviews}>
                <Review />
                </div>
                <nav className={review.review__buttons}>
                    <ReviewButton />
                    <button className={review["review__buttons-createReview"]}>Create review</button>
                </nav>
            </div>
        </section>
    )
}