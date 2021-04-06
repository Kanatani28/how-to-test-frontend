import { User } from "@/@types";

export default function getUsers(): User[] {
  return [
    {
      id: 1,
      name: "John",
      mail: "john@example.com",
      isAdmin: false,
      enable: true,
    },
    {
      id: 2,
      name: "Bob",
      mail: "bob@example.com",
      isAdmin: true,
      enable: true,
    },
    {
      id: 3,
      name: "Kate",
      mail: "kate@example.com",
      isAdmin: false,
      enable: false,
    },
  ];
}
