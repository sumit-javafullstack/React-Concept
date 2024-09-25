import './Employee.css'
import USEmployee from './USEmployee';
import OtherEmployee from './OtherEmployee';
import HighestPaidEmployee from './HighestPaidEmployee';
//  if we have lsit in props , should be enclosed with in {}
const Employee = ({empList}) => {


    return(
        <div>
            <table className='EmpTable' >
                <caption className='tableCaption' > Monthly savings </caption>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Age</th>
                    <th>Country</th>
                </tr>
                {empList.map((emp) => (
                    <tr>
                        <td key={emp.id}> {emp.id} </td>
                        <td key={emp.id}> {emp.empName} </td>
                        <td key={emp.id}> {emp.empSalary} </td>
                        <td key={emp.id}> {emp.empAge} </td>
                        <td key={emp.id}> {emp.country} </td>
                    </tr> 
                )) }
            </table>

            { empList.map((emp) => (
                <div>
                    {
                    emp.country=='US' ? <USEmployee id={emp.id} empName={emp.empNam} empSalary={emp.empSalary} empAge={emp.empAge} country={emp.country}/> 
                                       : <OtherEmployee id={emp.id} empName1={emp.empNam} empSalary1={emp.empSalary} empAge1={emp.empAge} country1={emp.country}/>
                    }
                    {
                     emp.empSalary>25000 && <HighestPaidEmployee empSalary={emp.empSalary}/>
                    }
                </div>
                ))}  
        </div>
    );
}

export default Employee;