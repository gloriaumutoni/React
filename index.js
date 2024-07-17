ReactDOM.render(<h1>Hello,everyone!</h1>,document.querySelector('#root'))
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