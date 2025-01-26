import useReturn from "./components/hooks/useReturn.ts";
import {IUsers} from "./models/IUsers.ts";

const App=() => {
  const users = useReturn<IUsers[]>('https://jsonplaceholder.typicode.com/users');
  return (
    <div>
      {
        // провіряємо users
        users &&
        users.map(user => (
          <div key={user.id} className="m-6 border-2 ">

            {user.id} {user.username} {user.email}

          </div>

      ))
      }
    </div>
  );
};

export default App
