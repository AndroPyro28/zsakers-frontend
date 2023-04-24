import React, { useState } from 'react'
import DateTimeFormatter from '../../helpers/DateTimeFormatter';
import { User } from '../../model';
import { useDeleteStaffMutation, useUpdateStaffMutation } from '../../app/services';
import { ActionContent, EmployeeDataContainer, TD } from './components';
import { useDeleteAdminMutation, useUpdateAdminMutation } from '../../app/services/admin';
interface Props {
  data: User
}
function AdminData({data}: Props) {

  const {dateAndTimeParser} = DateTimeFormatter()
  const {time, date} = dateAndTimeParser(data?.createdAt)

  const [toggleAction, setToggleAction] = useState(false);

  const [updateAdmin] = useUpdateAdminMutation()
  const [deleteAdmin] = useDeleteAdminMutation()

  const handleUpdate = async (status: "INACTIVE" | "ACTIVE") => {
    try {
      const res: any = await updateAdmin({
        status,
        id: data.id
      })
    } catch (error) {
      console.error(error)
    }
  }

  const handleDelete = async (id: number) => {
    try {
      const res: any = await deleteAdmin(id);
      setToggleAction(prev => false)
    } catch (error) {
      console.error(error)
    }
  }
    
  return (
    <EmployeeDataContainer>
      <TD className='fullname'> <span> {data?.profile?.firstname} {data?.profile?.lastname} </span> </TD>
      <TD className='email'> <span>{data?.email}</span> </TD>
      <TD className='contact'> <span>{data?.profile?.contact}</span> </TD>
      <TD className='status'> <span className={data?.status.toLocaleLowerCase()}> • {data?.status.toLocaleLowerCase()} </span> </TD>
      <TD className='created'> <span> {date} : {time} </span> </TD>
      <TD className='action'> 
      <span className='i' onClick={() => setToggleAction(prev => !prev)}><i className="fa-solid fa-ellipsis "></i>  </span>
      {
        toggleAction && <ActionContent>
        {
          data.status === 'ACTIVE' ? 
          <span onClick={() => handleUpdate('INACTIVE')}>Inactive</span> :
          <span onClick={() => handleUpdate('ACTIVE')}>Active</span>
        }
      </ActionContent>
      }
        
      </TD>
    </EmployeeDataContainer>
  )
}

export default AdminData