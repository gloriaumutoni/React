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