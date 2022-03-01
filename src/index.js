import react from 'react'
import reactDom from 'react-dom'


function Greeting() 
{
  return (
    <section>
      <HomePg />
    </section>
  );
}
const HomePg =  () =>{
  return (
    <article>
      <Image></Image>
      <Author></Author>
      <Title></Title>
    </article>
  )
}

const Image = () => <img src="https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2020/05/Tesla-charging.jpg?w=2500&quality=82&strip=all&ssl=1" alt="" />
const Author = () => <h1> Olayinka Giwa</h1>
const Title = () => <h3>Home Charging Stations</h3>


reactDom.render(<Greeting/>,document.getElementById('root')); 