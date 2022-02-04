import { useState } from "react";

const UserForm = (props) => {
  const [user, setUser] = useState(props.user);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={(e) => props.submitHandler(e, user)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          onChange={(e) => handleInputChange(e)}
          value={user.name}
          name="name"
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          onChange={(e) => handleInputChange(e)}
          value={user.lastName}
          name="lastName"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          onChange={(e) => handleInputChange(e)}
          value={user.email}
          name="email"
          required
        />
      </div>
      <div>
        <label htmlFor="image">Image URL</label>
        <input
          type="text"
          onChange={(e) => handleInputChange(e)}
          value={user.image}
          name="image"
          required
        />
      </div>
      <div>
        <label htmlFor="isActive">Set user active</label>
        <input
          type="checkbox"
          onChange={(e) => handleInputChange(e)}
          checked={user.isActive}
          name="isActive"
        />
      </div>

      <div className="divFormButton"><button type="submit">{user.id ? 'Update User':'Add User'}</button></div>
    </form>
  );
};

export default UserForm;
