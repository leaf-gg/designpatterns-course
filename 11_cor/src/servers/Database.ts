import PermissionType from "./PermissionType";

interface DataBaseItem {
  email: string;
  password: string;
  permission: PermissionType;
}

const DataBase: DataBaseItem[] = [
  {
    email: "master@gmail.com",
    password: "123456",
    permission: PermissionType.ADMIN,
  },

  {
    email: "user@gmail.com",
    password: "654321",
    permission: PermissionType.USER,
  },
];

export default DataBase;