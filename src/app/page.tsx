import { Games } from "@/components/Home/Games";
import { Greeting } from "@/components/Home/Greeting";
import { Navigation } from "@/components/Home/Navigation";
import { Orders } from "@/components/Home/Orders";
import { Reviews } from "@/components/Home/Reviews";

export default function HomePage() {
  return (
    <main>
      <Greeting />
      <Navigation />
      <Games />
      <Reviews />
      <Orders />
    </main>
  )
}
