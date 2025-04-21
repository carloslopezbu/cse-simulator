
interface User {
  id: string;
  name: string;
  email: string;
}

interface UserWithPassword extends User {
  password: string;
}

const user: UserWithPassword = {
  id: "1",
  name: "John Doe",
  email: "jd@gmail.es",
  password: "sdfsdvasdfv"
}

export default user;