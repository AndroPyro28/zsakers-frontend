import React, { useState } from 'react'
import { EmployeeContainer, Header, EmployeeList, SearchBarContainer, Filters } from './components'
import EmployeeListHeader from '../../../components/employees/EmployeeListHeader'
import EmployeeData from '../../../components/employees/EmployeeData'
import { useGetStaffsQuery } from '../../../services'
import CreateEmployee from '../../../components/modals/admin/employee/CreateEmployee'
function Employees() {

  const [search, setSearch] = useState<string>('')
  const [toggleCreate, setToggleCreate] = useState(false);
  const { data: staffs, error, isLoading } = useGetStaffsQuery();
  let content;
  if (isLoading) {
    content = <h3>loading...</h3>
  }
  else {
    const filteredStaffs = staffs?.filter(staff =>
      staff.email.includes(search) ||
      `${staff.profile.firstname} ${staff.profile.lastname}`.toLocaleLowerCase().includes(search) ||
      staff.profile.contact.includes(search)
    )
    if(filteredStaffs?.length === 0) content = <h3>No employees found!</h3> 
    else content = 
      <EmployeeList>
      { filteredStaffs?.map((staff) => <EmployeeData data={staff} />) }
      </EmployeeList>
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value.toLocaleLowerCase())

  const handleToggle = () => setToggleCreate(prev => true)
  return (
    <EmployeeContainer>

      {
        toggleCreate && <CreateEmployee setToggleCreate={setToggleCreate} />
      }

      <Header>
        <h2>Employee</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consectetur mollitia nihil delectus incidunt non quis veritatis voluptatum repellat doloribus?</p>
      </Header>
      <Filters>

        <button onClick={handleToggle}> <i className="fa-solid fa-user"></i> Add employee </button>

        <SearchBarContainer>
          <i className="fa-solid fa-magnifying-glass i"></i>
          <input type="text" placeholder='Search...' onChange={handleSearch} />
        </SearchBarContainer>
        
      </Filters>
      <EmployeeListHeader />
        {
          content
        }
    </EmployeeContainer>
  )
}

export default Employees