import './OtherEmployee.css'

const OtherEmployee = (props) => {

    return(
        <div className="OtherEmployee">
           
            <h5> {props.id} {props.empName1} {props.empSalary1} {props.empAge1} {props.country1}</h5>
        </div>
    );
    
}

export default OtherEmployee;