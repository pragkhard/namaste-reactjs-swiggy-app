import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);

        this.state = {
            count: 0,
            count2: 2,

            userInfo: {
                name: "Dummy",
                locationTwo: "Default",
                avatar_url: "http://dummy-photo.com"
            }
        }
        // console.log("Child Constructor")
        // console.log(this.props.name + "Child Constructor")
    }
    async componentDidMount() {
        // console.log(this.props.name + "Child componentDidMount")

        const data = await fetch("https://api.github.com/users/pragkhard")
        const json = await data.json();

        this.setState({
            userInfo: json,
        })

        // console.log("componentDidMount", json)
    }
    // componentDidMount() {
    //     console.log(this.props.name + "Child componentDidMount")
    // }
    componentDidUpdate() {
        // console.log("Child componentDidUpdate")
    }
    componentWillUnmount() {
        // console.log("Child componentWillUnmount")
    }
    render() {
        // Destructuring 
        const { name, location } = this.props;
        const { count, count2 } = this.state;
        const { locationTwo } = this.state.userInfo;

        // console.log("Child Render")
        // console.log(this.props.name + "Child Render")
        return (
            <div className="user-card">
                <h1>Count Class:{count}</h1>
                <button onClick={() => {
                    // NEVER UPDATE STATE VARIABLES DIRECTLY 
                    // this.state.count = this.state.count + 1; //Wrong way

                    this.setState({
                        count: this.state.count + 1,
                        count1: this.state.count2 + 1,
                    })
                }}>Count Increase</button>

                <h1>Count2 Class:{count2}</h1>
                {/* <h1>Count Class:{this.state.count}</h1> */}

                <h2>Name:{name}</h2>
                <h3>Location Props: {location}</h3>
                {/* <h2>Name:{this.props.name}</h2>
                <h3>Location Props: {this.props.location}</h3> */}

                <h3>Location: Niwari Class</h3>
                <h4>Contact: Pragatikhard@gmail.com Class</h4>

                {/* Update the api data  */}
                <h3>Dummy Name: {this.state.userInfo.name}</h3>
                <h3>Dummy Location : {locationTwo}</h3>
                {/* <img src={avatar_url} /> */}

            </div>
        )
    }
}

export default UserClass;


/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      ccomponentDid Update
 *
 *
 *
 *
 */