import React from "react";
import * as yup from "yup";
import { UpdateUser } from "../../../model";
import { useGetCurrentUser, useUpdateUserMutation } from "../../../app/services";

interface Props {
  setAllowChanges: React.Dispatch<React.SetStateAction<boolean>>
}
function Logic({setAllowChanges}: Props) {
  const { data: user } = useGetCurrentUser();
  const { id } = user!;
  const { firstname, lastname, address, contact } = user?.profile!;

  const initialValues = {
    id,
    firstname,
    lastname,
    address,
    contact,
  };

  const [updateUser] = useUpdateUserMutation()
  const onSubmit = async (values: UpdateUser) => {
    try {
      const result = await updateUser(values)
      setAllowChanges(false);
    } catch (error) {
      console.error(error);
    }
  };

  const validationSchema = yup.object({
    firstname: yup
      .string()
      .required("Firstname is required")
      .matches(/^[A-Za-z\s]*$/, "Must container letters only")
      .min(3, "Firstname must be at least 3 characters"),
    lastname: yup
      .string()
      .required("Lastname is required")
      .matches(/^[A-Za-z\s]*$/, "Must container letters only")
      .min(3, "Lastname must be at least 3 characters"),
    // email: yup.string()
    // .required('Email is required')
    // .email('This must be a valid email'),
    contact: yup
      .string()
      .required("Contact is required")
      .matches(/^[0-9]*$/, "Digits only"),
  });

  return { initialValues, onSubmit, validationSchema };
}

export default Logic;
