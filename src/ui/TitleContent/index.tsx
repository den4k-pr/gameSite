import Image from "next/image"

export const TitleContent = ({ image, text } : { image: string, text: string }) => {
    return (
        <div className="_titleContent">
            <Image className="_titleContent-image" src={image} alt="icon" fill/>
            <h3 className="_titleContent-title">{text}</h3>
        </div>
    )
}