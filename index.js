ReactDOM.render(<h1>Hello,everyone!</h1>,document.querySelector('#root'))

// recreating the above code using vanilla js
let elm=document.createElement('h1')
elm.textContent='Hello everyone, This is an imperative way to program'
elm.className='header'
parent=document.querySelector('#root')
parent.appendChild(elm)


ReactDOM.render(<ul><li>item1</li><li>item2</li><li>item3</li></ul>,document.querySelector('#root'))


function MainContent(){
    return(
        <h1>I'm learning React!</h1>
    )
}
ReactDOM.render(
     <div>
    <MainContent/>
    </div>
   ,
    document.querySelector('#root')
)

// JSX

const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)
ReactDOM.render(
    page,
    document.getElementById("root")
)

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

// const navbar = (
//     <nav>
//         <h1>Bob's Bistro</h1>
//         <ul>
//             <li>Menu</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

ReactDOM.render(navbar, document.getElementById("root"))

