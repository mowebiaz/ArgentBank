import { Card } from '../../components/Card/Card'
import { Hero } from '../../components/Hero/Hero'
import IconChat from '../../assets/icons/icon-chat.webp'
import IconMoney from '../../assets/icons/icon-money.webp'
import IconSecurity from '../../assets/icons/icon-security.webp'
import './Home.scss'

export function Home() {
  return (
    <main>
      <Hero />
      <section className="cards">
        <h2 className="sr-only">Features</h2>
        <Card
          src={IconChat}
          alt="Chat Icon"
          title="You are our #1 priority"
          text="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
        />
        <Card
          src={IconMoney}
          alt="Money Icon"
          title="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be!"
        />
        <Card
          src={IconSecurity}
          alt="Security Icon"
          title="Security you can trust"
          text="We use top of the line encryption to make sure your data and money
            is always safe."
        />
      </section>
    </main>
  )
}
