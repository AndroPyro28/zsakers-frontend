import React, { useState } from 'react'
import { EmployeeContainer, Header, EmployeeList, SearchBarContainer, Filters } from './components'
import EmployeeListHeader from '../../../components/employees/EmployeeListHeader'
import EmployeeData from '../../../components/employees/EmployeeData'
import { useGetStaffsQuery } from '../../../app/services'
import CreateEmployee from '../../../components/modals/admin/employee/CreateEmployee'
import { useGetAdminsQuery } from '../../../app/services/admin'
import AdminData from '../../../components/employees/AdminData'

function Admins() {
  const [search, setSearch] = useState<string>('')
  const [toggleCreate, setToggleCreate] = useState(false);
  const { data: admins, error, isLoading } = useGetAdminsQuery();
  let content;

  if (isLoading) {
    content = <h3>loading...</h3>
  }
  else {
    const filteredAdmin = admins?.filter(admin =>
      admin.email.includes(search) ||
      `${admin.profile.firstname} ${admin.profile.lastname}`.toLocaleLowerCase().includes(search) ||
      admin.profile.contact.includes(search)
    )
    if(filteredAdmin?.length === 0) content = <h3>No employees found!</h3> 
    else content = 
      <EmployeeList>
      { filteredAdmin
      ?.filter(admin => !Boolean(admin.super_admin) )
      ?.map((admin) => <AdminData data={admin} />) }
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
        <h2>Admins</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consectetur mollitia nihil delectus incidunt non quis veritatis voluptatum repellat doloribus?</p>
      </Header>
      <Filters>

        <button onClick={handleToggle}> <i className="fa-solid fa-user"></i> Add new admin </button>

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

export default Admins