import './Customer.css'

const Customer = (props) =>{

    return(
        <div className='Customer' >
            <h3> Name is {props.name} Age is {props.age}</h3>
        </div>
        
    )
}


export default Customer;