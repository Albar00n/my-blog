import classes from './hero.module.css'
import Image from 'next/image'
import Albaron from '../../public/images/albaron1.png'
function Hero(){
    return(
        <section className={classes.hero}>
            <div className={classes.image}>
               <Image src={Albaron} alt="albaron image" width={300} height={300} />
            </div>
            <h1>Hi, I`m Mohamed</h1>
            <p>I blog about web development - especially frontend frameworks like React</p>
        </section>
    )
}

export default Hero;