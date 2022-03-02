import react from 'react'
import reactDom from 'react-dom'
// importing CSS file . 
// if the file is a level up then use '../'     depending on how many levels means u have ///to add the dots 
import './index.css';
function Greeting() 
{
  return (
    <section className='pageDsign'>
      <HomePg />
      <HomePg />
      <HomePg />
      <HomePg />
      <HomePg />
      <HomePg />
    </section>
  );
}
const HomePg =  () =>{
  return (
    <article className='chargeShow'>
      <Image></Image>
      <Author></Author>
      <Title></Title>
    </article>
  )
}

const Image = () => <img src="https://cdn.jdpower.com/JDP_Tesla%20Home%20Charging%201.jpg" alt="" />
const Author = () => <h1> Olayinka Giwa</h1>
const Title = () => <h3>Home Charging Stations</h3>


reactDom.render(<Greeting/>,document.getElementById('root')); 