import { TitleContent } from "@/ui/TitleContent"
import orders from "./Orders.module.scss"
import Image from "next/image"
import { Order } from "./Order"

export const Orders = () => {
    return(
        <section className={orders.order}>
            <div className="container">
                <TitleContent text="How to place an order" image="/icons/askt.png" />
                <div className={orders.order__orders}>
                    <Order 
                        transform="rotate(-19.097deg)"
                        name="Select a service" 
                        description="Just press on boost that you would like to use" 
                        image={`<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                        <path d="M28.1968 23.0405V8.43115C28.1968 7.29155 27.7441 6.19862 26.9383 5.3928C26.1325 4.58698 25.0395 4.13428 23.8999 4.13428C22.7603 4.13428 21.6674 4.58698 20.8616 5.3928C20.0558 6.19862 19.6031 7.29155 19.6031 8.43115V34.4844L14.8921 26.3247C14.6102 25.8356 14.2347 25.4067 13.787 25.0628C13.3393 24.7188 12.8282 24.4664 12.2829 24.3201C11.7376 24.1737 11.1689 24.1363 10.6091 24.2098C10.0493 24.2834 9.50957 24.4666 9.02063 24.7489C8.53169 25.0312 8.10318 25.407 7.75958 25.855C7.41598 26.303 7.16403 26.8143 7.01814 27.3597C6.87225 27.9051 6.83526 28.4739 6.90931 29.0336C6.98335 29.5933 7.16697 30.1329 7.44966 30.6216C14.4468 45.3843 18.7044 50.5405 28.1968 50.5405C30.4539 50.5405 32.6889 50.096 34.7742 49.2322C36.8595 48.3685 38.7542 47.1024 40.3502 45.5064C41.9462 43.9104 43.2122 42.0157 44.076 39.9304C44.9397 37.8451 45.3843 35.6101 45.3843 33.353V24.7593C45.3843 23.6197 44.9316 22.5267 44.1258 21.7209C43.32 20.9151 42.227 20.4624 41.0874 20.4624C39.9478 20.4624 38.8549 20.9151 38.0491 21.7209C37.2433 22.5267 36.7906 23.6197 36.7906 24.7593" stroke="url(#paint0_linear_6297_1415)" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M36.7905 24.7593V22.1812C36.7905 21.0416 36.3378 19.9486 35.532 19.1428C34.7262 18.337 33.6333 17.8843 32.4937 17.8843C31.3541 17.8843 30.2611 18.337 29.4553 19.1428C28.6495 19.9486 28.1968 21.0416 28.1968 22.1812V23.0405" stroke="url(#paint1_linear_6297_1415)" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <defs>
                          <linearGradient id="paint0_linear_6297_1415" x1="1.18015" y1="-13.2681" x2="180.782" y2="-13.2681" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#E5453D"/>
                            <stop offset="1" stop-color="#FF7A2E"/>
                          </linearGradient>
                          <linearGradient id="paint1_linear_6297_1415" x1="26.9266" y1="15.3062" x2="67.0038" y2="15.3062" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#E5453D"/>
                            <stop offset="1" stop-color="#FF7A2E"/>
                          </linearGradient>
                        </defs>
                      </svg>`} 
                    />
                    <Order 
                        transform="rotate(6.847deg) translateY(30px)"
                        name="PAY" 
                        description="You can buy our services fast and easy" 
                        image={`<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                        <path d="M48.8218 12.728H7.57178C6.62254 12.728 5.85303 13.4975 5.85303 14.4468V41.9468C5.85303 42.896 6.62254 43.6655 7.57178 43.6655H48.8218C49.771 43.6655 50.5405 42.896 50.5405 41.9468V14.4468C50.5405 13.4975 49.771 12.728 48.8218 12.728Z" stroke="url(#paint0_linear_6297_1441)" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M35.9299 35.9312H42.8049" stroke="url(#paint1_linear_6297_1441)" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M23.8987 35.9312H27.3362" stroke="url(#paint2_linear_6297_1441)" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.85181 21.5049H50.5393" stroke="url(#paint3_linear_6297_1441)" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <defs>
                          <linearGradient id="paint0_linear_6297_1441" x1="-0.751729" y1="1.12646" x2="207.649" y2="1.12647" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#E5453D"/>
                            <stop offset="1" stop-color="#FF7A2E"/>
                          </linearGradient>
                          <linearGradient id="paint1_linear_6297_1441" x1="34.9138" y1="35.5562" x2="66.9755" y2="35.5562" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#E5453D"/>
                            <stop offset="1" stop-color="#FF7A2E"/>
                          </linearGradient>
                          <linearGradient id="paint2_linear_6297_1441" x1="23.3906" y1="35.5562" x2="39.4215" y2="35.5562" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#E5453D"/>
                            <stop offset="1" stop-color="#FF7A2E"/>
                          </linearGradient>
                          <linearGradient id="paint3_linear_6297_1441" x1="-0.752949" y1="21.1299" x2="207.648" y2="21.13" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#E5453D"/>
                            <stop offset="1" stop-color="#FF7A2E"/>
                          </linearGradient>
                        </defs>
                      </svg>`} 
                    />
                    <Order 
                        transform="rotate(0deg)"
                        name="Contact us" 
                        description="Contact us. 
                        We are ready to help" 
                        image={`<svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
                        <path d="M35.5693 9.44678C38.536 10.2446 41.241 11.808 43.4133 13.9803C45.5855 16.1526 47.1489 18.8576 47.9468 21.8242" stroke="url(#paint0_linear_6297_1123)" stroke-width="5.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.926 28.0001C22.7412 31.7113 25.7495 34.7058 29.4689 36.5042C29.741 36.6331 30.042 36.689 30.3423 36.6663C30.6426 36.6436 30.9318 36.5431 31.1814 36.3746L36.658 32.7227C36.9002 32.5612 37.1789 32.4627 37.4688 32.4361C37.7587 32.4094 38.0506 32.4555 38.3182 32.5702L48.5638 36.9612C48.9118 37.109 49.2024 37.366 49.3917 37.6933C49.5811 38.0207 49.6589 38.4007 49.6134 38.7761C49.2896 41.3101 48.0532 43.6392 46.1358 45.3273C44.2184 47.0153 41.7514 47.9466 39.1968 47.9467C31.3066 47.9467 23.7396 44.8124 18.1604 39.2332C12.5811 33.654 9.44678 26.0869 9.44678 18.1967C9.44691 15.6421 10.3782 13.1751 12.0663 11.2577C13.7543 9.34031 16.0834 8.10393 18.6174 7.78009C18.9928 7.73466 19.3728 7.81246 19.7002 8.00178C20.0275 8.19109 20.2845 8.48166 20.4323 8.8297L24.8271 19.0842C24.9408 19.3495 24.9871 19.6387 24.962 19.9262C24.9368 20.2137 24.8409 20.4905 24.6829 20.7319L21.0437 26.2925C20.8781 26.5426 20.7801 26.8315 20.7595 27.1308C20.7389 27.4301 20.7962 27.7296 20.926 28.0001V28.0001Z" stroke="url(#paint1_linear_6297_1123)" stroke-width="5.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M33.3406 17.7643C34.8163 18.2312 36.1581 19.0462 37.2526 20.1407C38.3471 21.2352 39.1622 22.577 39.6291 24.0528" stroke="url(#paint2_linear_6297_1123)" stroke-width="5.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <defs>
                          <linearGradient id="paint0_linear_6297_1123" x1="33.74" y1="4.80524" x2="91.4624" y2="4.80524" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#E5453D"/>
                            <stop offset="1" stop-color="#FF7A2E"/>
                          </linearGradient>
                          <linearGradient id="paint1_linear_6297_1123" x1="3.50833" y1="-7.29978" x2="190.885" y2="-7.29978" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#E5453D"/>
                            <stop offset="1" stop-color="#FF7A2E"/>
                          </linearGradient>
                          <linearGradient id="paint2_linear_6297_1123" x1="32.4111" y1="15.4061" x2="61.7378" y2="15.4061" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#E5453D"/>
                            <stop offset="1" stop-color="#FF7A2E"/>
                          </linearGradient>
                        </defs>
                      </svg>`} 
                    />
                    <Order 
                        transform="rotate(4.427deg) translateY(40px)"
                        name="GEt the service" 
                        description="We will deliver the best service that you have ever seen" 
                        image={`<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                        <path d="M12.3974 43.9962C10.4199 42.0188 11.7315 37.8673 10.725 35.4347C9.68162 32.913 5.85303 30.8834 5.85303 28.1967C5.85303 25.51 9.68164 23.4805 10.725 20.9589C11.7315 18.5263 10.4199 14.3748 12.3974 12.3974C14.3748 10.4199 18.5263 11.7315 20.9589 10.725C23.4806 9.68162 25.5102 5.85303 28.1969 5.85303C30.8835 5.85303 32.913 9.68164 35.4347 10.725C37.8673 11.7315 42.0188 10.4199 43.9962 12.3974C45.9736 14.3748 44.6621 18.5263 45.6686 20.9589C46.7119 23.4806 50.5405 25.5102 50.5405 28.1969C50.5405 30.8835 46.7119 32.913 45.6686 35.4347C44.6621 37.8673 45.9736 42.0188 43.9962 43.9962C42.0188 45.9736 37.8673 44.6621 35.4347 45.6686C32.913 46.7119 30.8834 50.5405 28.1967 50.5405C25.51 50.5405 23.4805 46.7119 20.9589 45.6686C18.5263 44.6621 14.3748 45.9736 12.3974 43.9962Z" stroke="url(#paint0_linear_6297_1131)" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M37.6499 23.0405L25.0457 35.0718L18.7437 29.0562" stroke="url(#paint1_linear_6297_1131)" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <defs>
                          <linearGradient id="paint0_linear_6297_1131" x1="-0.751729" y1="-10.9048" x2="207.649" y2="-10.9048" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#E5453D"/>
                            <stop offset="1" stop-color="#FF7A2E"/>
                          </linearGradient>
                          <linearGradient id="paint1_linear_6297_1131" x1="15.9493" y1="18.5288" x2="104.119" y2="18.5288" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#E5453D"/>
                            <stop offset="1" stop-color="#FF7A2E"/>
                          </linearGradient>
                        </defs>
                      </svg>`} 
                    />
                </div>
            </div>
        </section>
    )
}