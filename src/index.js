import react from 'react'
import reactDom from 'react-dom'
// importing CSS file . 
// if the file is a level up then use '../'     depending on how many levels means u have ///to add the dots 
import './index.css';

const books = [
{
    title: 'Seven Husband of Evelyn Hugo',
    author: 'Taylor Jerkind Reid',
    img:'https://images-na.ssl-images-amazon.com/images/I/71pQQ9mk8eL._AC_UL906_SR906,600_.jpg'
},
{
    title: 'Finding Me',
    author: 'Viola Davis',
    img:'https://images-na.ssl-images-amazon.com/images/I/81nPA5jdLvL._AC_UL906_SR906,600_.jpg'
}
];


function Booklist() {
    return (
    <section className='booklst'>
      {books.map((book) => {
        const {img, title,author } = book;
        return (
          <div>
            <h3>{title}</h3>
            <h6>{author}</h6>
          </div>
        );
      })}
    </section>
    ); 
}
const Book =  ({img , title , author, children}) =>{
  //const {img, title, author} = props;
  return (
    <article className='bookl'>
      <img src={img} alt="" />
      <h1> {author}</h1>
      <h4>{title}</h4>
      {children}
    </article>
    
  )
}




reactDom.render(<Booklist/>,document.getElementById('root')); 







// const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/71pQQ9mk8eL._AC_UL906_SR906,600_.jpg" alt="" />
// const Author = () => <h1> Taylor Jerkind Reid</h1>
// //const Title = () => <h3>Seven Wifes of Evelyn Hugo</h3>
// function Title (){
//   return(
//     <h4 style={{color:'#617d98', fontsize:'0.75rem', marginTop:'0.25rem'}}>Seven Husband of Evelyn Hugo</h4>    // this ismore stronger than CSS file . this inline styling 
//   );
// }