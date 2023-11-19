import React from 'react'
import wavylines from '../assets/images/background-wavy-lines.svg'
import Button from './generics/Button'

const Newsletter = () => {
  return (
    <section class="newsletter">
    <img className="background-vawy-lines" src={wavylines} alt="backgroundlines"/>
    <div className="container">
        <h2>Get News Updates By SignUp</h2>
        <form>
            <input type="text" placeholder="username@domain.com"/>
            <Button type="yellow" url="" title="Subscribe"/>
        </form>
    </div>
</section>
  )
}

export default Newsletter