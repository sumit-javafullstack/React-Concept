import './USEmployee.css'

const USEmployee = (props) =>{
   
return(
    <div className="USEmployee">
        <h5> {props.id} {props.empName} {props.empSalary} {props.empAge} {props.country}</h5>
    </div>
);


}

export default USEmployee;