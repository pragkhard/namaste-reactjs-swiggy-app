import UserFunctional from "./UserFunctional";
import UserClass from "./UserClass";
import React from "react";
// import { Component } from "react";
import UserContext from "../utils/UserContext";

// Class Component 
// class About extends Component {}
// OR 
class About extends React.Component {
    constructor(props) {
        super(props);

        // console.log("Parents Constructor")
    }
    componentDidMount() {
        // console.log("Parent componentDidMount")
    }
    // componentDidMount() {
    //     this.timer = setInterval(() => {
    //         console.log("NAMASTE REACT OP")
    //     }, 1000)
    //     console.log("Parent componentDidMount")
    // }
    // componentDidMount(prevProps, prevState) {
    //     if (
    //         this.state.count == !prevState.count ||
    //         this.state.count == !prevState.count
    //     )
    //      console.log("Parent componentDidMount")
    // }
    // componentWillUnmount() {
    //     clearInterval(this.timer)
    //     console.log(componentWillUnmount)
    // }
    render() {
        // console.log("Parents Render")
        return (
            // <div>
            //     <h1>About</h1>
            // {({ loggedInUser }) => (
            //     <h1 className="text-xl font-bold">{loggedInUser}</h1>
            // )}
            //     <h2>This is the Namaste React Web Series</h2>
            //     <UserFunctional name={"Pragati khard"} />
            //     <UserClass name={"First Class"} location={"U.P"} />
            //     <UserClass name={"Second Class2"} location={"U.P"} />
            // </div>

            <div>
                <h1>About</h1>
                <div>
                    LoggedIn User - CallContext
                    <UserContext.Consumer>
                        {/* {
                            (data) => console.log("data", data)
                        } */}
                        {({ loggedInUser }) => (
                            <h1 className="text-xl font-bold">{loggedInUser}</h1>
                        )}
                    </UserContext.Consumer>
                </div>


                <h2>This is the Namaste React Web Series</h2>
                <UserFunctional name={"Pragati khard"} />
                <UserClass name={"First Class"} location={"U.P"} />
                <UserClass name={"Second Class2"} location={"U.P"} />
            </div>
        )
    }
}

// Functional Component 
// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is the Namaste React Web Series</h2>
//             <UserFunctional name={"Pragati khard"}/>
//             <UserClass name={"Pragati khard Class"} location={"M.P"}/>
//         </div>
//     )
// }

export default About;


// -Parent Constructor
// -Parent Render

// This is the render phase for both the cildrens

//     -First (Class)Child Constructor
//     -First (Class)Child Render
//     -
//     -Second(Class)Child Constructor
//     -Second(Class)Child Render

// <DOM UPDATED - IN SINGLE BATCH>

// This is the commit phase for both the cildrens

// -First (Class)Child componentDidMount
// -Second (Class)Child componentDidMount

// -Parent componentDidMount