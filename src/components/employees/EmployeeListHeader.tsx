import { EmployeeListHeaderContainer } from '../../pages/admin/employees/components'
function EmployeeListHeader() {
  return (
    <EmployeeListHeaderContainer>
        <th>Name</th>
        <th>Email</th>
        <th>Contact</th>
        <th>Status</th>
        <th>Created</th>
        <th className='action'>
          {/* <i className="fa-solid fa-ellipsis"></i> */}
          Action
        </th>
      </EmployeeListHeaderContainer>
  )
}

export default EmployeeListHeader