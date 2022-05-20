const findFriend = (contacts, name, contact_prop) => {
  let friend = "";
  let contact_detail = "";
  let result = "Not found!";
  console.log(contact_prop);
  contacts.map((item) => {
    if (name !== item.name) {
      return result;
    }
    if (name === item.name) {
      friend = item.friends[0];
    }
    contacts.map((item) => {
      if (item.name === friend) {
        if (!item[contact_prop]) {
          return result;
        }
        console.log(item[contact_prop]);
        contact_detail = item[contact_prop];
        result = { name: friend, contact_prop: contact_detail };
      }
    });
  });

  return result;
};

const contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"],
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"],
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"],
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"],
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"],
  },
];

console.log(findFriend(contacts, "Abbott", "phone"));
console.log(findFriend(contacts, "Buster", "email"));
console.log(findFriend(contacts, "Bob", "phone"));
console.log(findFriend(contacts, "Costello", "birthday"));
