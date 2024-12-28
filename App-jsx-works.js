import React from 'react';
import ReactDOM from 'react-dom/client';


// =================================================================================================

//React Element
//React.createElement => ReactElement-JS Object => HTMLElement(render)

// const heading = React.createElement("h1", { id: "heading", xyz: "xyz" }, "Hello World From React !    // External File")

// console.log(heading)
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)


// ==============================================================================================


//JSX - HTMl like or XML like syntax
//JSX(transpiled before it reaches the JS Engine) - PARCEL - Babel
//JSX => React.createElemet => ReactElement-JS Object => HTMLElement(render)

// const jsxheading = <h1 id="heading">Namaste Reactjs!!!</h1>
// console.log(jsxheading)
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(jsxheading)


// ==============================================================================================


// There are of 2 types of components – 
// Class – Old way of writing the code  
// Function – New way of writing the code. 


// ==================================================================================================


// React Function Component 

// const HeadingComponent1 = () => {
//     return <h1 className='heading'>Hello1</h1>
// }

// const HeadingComponent2 = () => (
//     <h1 className='heading'>Hello2</h1>
// )

// const HeadingComponent3 = () => (
//     <div id="container">
//         <h1 className='heading'>Hello3</h1>
//     </div>

// )

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<HeadingComponent3 />)



// ================================================================================================


// Put one component to another component - Component composition

// const Title = () => (
//     <div id="head">
//         <h1>Title Component</h1>
//     </div>
// )

// OR 

// Instead of using Arrow function we can use normal function like this way  



// const Title2 = function () {
//     return (
//         <div id="head">
//             <h1>Title Component2</h1>
//         </div>
//     )
// }


// const HeadingComponent = () => (
//     <div id="container">
//         <Title2 />
//         <h1 className='heading'>Hello Component</h1>
//     </div>

// )

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<HeadingComponent />)


// ====================================================================================================


// Inside of the {} of the jsx we can write any piece of JavaScript- 


// const number = 1000;
// const HeadingComponent = () => (
//     <div id="container">
//         {
//             console.log("javascript")
//         }
//         {number}
//         <h1 className='heading'>Hello Component</h1>
//     </div>

// )

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<HeadingComponent />)



// ==========================================================================================================



// Put react element in react component- 

// const Title = (
//     <div id="container">
//         <h1>Title Component2</h1>
//     </div>
// )


// const HeadingComponent = () => (
//     <div id="container">
//         {Title}
//         <h1 className='heading'>Hello Component</h1>
//     </div>

// )

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<HeadingComponent />)




// ====================================================================================================



// Put react element into react element 



// const elem = <span>React Element</span>

// const Title = (
//     <div id="container">
//         {elem}
//         <h1>Title Component2</h1>
//     </div>
// )


// const HeadingComponent = () => (
//     <div id="container">
//         {Title}
//         <h1 className='heading'>Hello Component</h1>
//     </div>

// )

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<HeadingComponent />)



// =================================================================================================================


// Exception Case- Will get the error , so need to change the order



// const Title = (
//     <div id="head">
//         <h1>Title Component Order</h1>
//         <HeadingComponent/>
//     </div>
// )

// const HeadingComponent = () => (
//     <div id="container">
//         <h1 className='heading'>Hello Component</h1>
//     </div>

// )


// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<HeadingComponent />)


// ========================================================================================================

// Change the order then will get the output

// const HeadingComponent = () => (
//     <div id="container">
//         <h1 className='heading'>Hello Component Order</h1>
//     </div>

// )

// const Title = (
//     <div id="head">
//         <h1>Title Component Order</h1>
//         <HeadingComponent/>
//     </div>
// )


// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(Title)







