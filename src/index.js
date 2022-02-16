import './sass/main.scss';
import { getUsers, deleteUser } from './js/api/mockUsersApi';
import { UserCard } from './js/components/UserCard';
import { userListFactory } from './js/userList';
import { addUserForm } from './js/userForm';
import './js/userForm';

const usersListRef = document.querySelector('.users-list');

const renderUsersList = usersList => {
  usersListRef.innerHTML = '';
  const usersNodeList = usersList.map(user => UserCard(user));
  usersListRef.append(...usersNodeList);
};

const userListManager = userListFactory({ onChange: renderUsersList });

const handleUserDelete = async event => {
  const { target } = event;

  if (target.closest('.delete-user-btn')) {
    const { id } = target.dataset;

    await deleteUser(id);
    userListManager.deleteUser(id);
  }
};

const render = async () => {
  const { data: usersList } = await getUsers();
  userListManager.setUsers(usersList);
};

const handleSubmit = async( body)=> {
  
    try {
      const { data: newUser } = await createUser(body);
      userListManager.addUsers(newUser);
      resetForm();
    } catch (error) {
      isDataLoading = false;
    }
  
}

const { resetForm } = addUserForm({
  onSubmit: handleSubmit,
});

usersListRef.addEventListener('click', handleUserDelete);

render();
