import review from "../Reviews.module.scss"
import Image from "next/image"

export const Review = () => {

    const repeatImg = ["","","","",""]

    const repeat = ["","","","","",""]
    
    return(
        <>
            {repeat.map((index) => 
            <figure key={index} className={review.reviewPart}>
                <figcaption className={review.reviewPart__content}>
                    <div className={review.reviewPart__content_top}>
                        <nav className={review["reviewPart__content_top-stars"]}>
                            {repeatImg.map((index) =>
                                <Image key={index} src="/icons/iconStar.png" alt="star" width={12.5} height={12.5} />
                            )}
                        </nav>
                        <p className={review["reviewPart__content_top-time"]}>2 hours ago</p>
                    </div>
                    <div className={review.reviewPart__content_bottom}>
                        <h3 className={review["reviewPart__content_bottom-name"]}>Incredible</h3>
                        <p className={review["reviewPart__content_bottom-description"]}>Everything is perfect. Made by pro, the boost was fast and the steam was available...</p>
                        <span className={review["reviewPart__content_bottom-text"]}>Paul Hookway</span>
                    </div>
                </figcaption>
            </figure>
            )}
        </>
    )
}