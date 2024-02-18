import { Component } from "react";
class Students extends Component{
    render(){
        const{name,mark}=this.props; 
        return(
            <>
           
            <h1>Hello {name}</h1>
            <h1>You have {mark} marks</h1>
            </>
        )

    }
   
}
export default Students;