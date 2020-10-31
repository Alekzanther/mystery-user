import UserPicture from "./UserPicture";

export default interface User {
  name: string;
  nationality: string;
  location: string;
  email: string;
  phone: string;
  age: number;
  picture: UserPicture;
}
