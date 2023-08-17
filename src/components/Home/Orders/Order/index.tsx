import Image from "next/image"
import orders from "../Orders.module.scss"

interface OrderProps {
    name: string,
    description: string,
    image: string,
    transform: string
}

export const Order = ({ name, description, image, transform } : OrderProps) => {
    return(
        <figure className={orders.orderPart}>
            <Image style={{transform: transform}} src="/icons/pk.svg" alt="order" fill />
            <figcaption className={orders.orderPart__content}>
                <div dangerouslySetInnerHTML={{ __html: image }} />
                <h3 className={orders["orderPart__content-name"]}>{name}</h3>
                <span className={orders["orderPart__content-description"]}>{description}</span>
            </figcaption>
        </figure>
    )
}