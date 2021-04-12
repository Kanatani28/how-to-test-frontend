import { User } from "@/@types";

export function getUsers(): User[] {
  return [
    {
      id: 1,
      name: "John",
      mail: "john@example.com",
      isAdmin: false,
      isDeleted: false,
    },
    {
      id: 2,
      name: "Bob",
      mail: "bob@example.com",
      isAdmin: true,
      isDeleted: false,
    },
    {
      id: 3,
      name: "Kate",
      mail: "kate@example.com",
      isAdmin: false,
      isDeleted: true,
    },
  ];
}
