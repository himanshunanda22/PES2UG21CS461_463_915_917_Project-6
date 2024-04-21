
interface User {
  name: string;
  email: string;
  id:  number;
  phone : string;
}
async function getUsers() : Promise<User[]> {
  // const res = await fetch("http://localhost:3000/api/User",{ cache: 'no-store' });
 
  const users = [
    {
      id: 1,
      email: 'guglu000@gmail.com',
      name: 'Saksham Alok',
      password: 'admin',
      phone: '7905260207',
      createdAt: '2023-11-22T05:07:21.461Z',
      updatedAt: '2023-11-22T05:06:40.776Z',
      deletedAt: null
    },
    {
      id: 2,
      email: 'samanthasusanjohn20@gmail.com',
      name: 'Samantha John',
      password: 'Samantha',
      phone: '7905260208',
      createdAt: '2023-11-22T05:41:37.865Z',
      updatedAt: '2023-11-22T05:41:37.865Z',
      deletedAt: null
    },
    {
      id: 3,
      email: 'nishthap981@gmail.com',
      name: 'Nishtha P',
      password: 'Nishtha',
      phone: '9844902272',
      createdAt: '2023-11-22T05:43:31.400Z',
      updatedAt: '2023-11-22T05:43:31.400Z',
      deletedAt: null
    }
  ]
  console.log(users);
  return users;
  
}

export default async function Home() {
  const users = await getUsers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        users.map((user: User, index:number) => {
          return (
            <div key={index} className="flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <p className="text-xl">{user.email}</p>
              {/* <p className="text-xl">{user.id}</p> */}
              <p className="text-xl">{user.phone}</p>

            </div>
          );
        })
      }
    </main>
  );
}
