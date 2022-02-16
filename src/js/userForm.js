import { createUser } from './api/mockUsersApi';

export const addUserForm = onSubmit => {
  const userFormRef = document.querySelector('.user-form');
  let isDataLoading = false;

  const handleSubmit = async event => {
    event.preventDefault();
    const { currentTarget: formRef } = event;

    if (isDataLoading) return;

    isDataLoading = true;

    /** Form elements */
    // const { name, description } = currentTarget.elements;
    // const body = {
    //   name: name.value,
    //   description: description.value,
    // };

    /** Form data */
    const formData = new FormData(formRef);
    const body = {};

    formData.forEach((value, key) => {
      body[key] = value;
    });

    onSubmit(body);

    // try {
    //   await createUser(body);
    //   formRef.reset();
    // } catch (error) {
    //   isDataLoading = false;
    // }
  };

  userFormRef.addEventListener('submit', handleSubmit);
  
  return reset
};
