import { EmployeeListHeaderContainer } from '../../pages/admin/employees/components'
function EmployeeListHeader() {
  return (
    <EmployeeListHeaderContainer>
        <th className='name'>Name</th>
        <th className='email'>Email</th>
        <th className='contact'>Contact</th>
        <th className='status'>Status</th>
        <th className='created'>Created</th>
        <th className='action'>
          {/* <i className="fa-solid fa-ellipsis"></i> */}
          Action
        </th>
      </EmployeeListHeaderContainer>
  )
}

export default EmployeeListHeader