import UserItem from './UserItem'
import { createContext, useContext } from "react";
import GithubContext from '../../context/github/GithubContext';


function UserResults() {

    const {users, loading} = useContext(GithubContext)


    if(!loading) {
        return  <div className='grid grid-cols-1 gap-8 xl:grid-col-4 lg:grid-cols-3 md:grid-cols-2'>
            { users.map((users) => (
                <UserItem key={users.id} user={users}/>
            ))}
        </div>
    } else {
        return <h3>Loading...</h3>
    }

}

export default UserResults

