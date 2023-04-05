import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Info({ username }) {
    const [user, setUser] = useState({})
    const [repos, setRepos] = useState([])
    const [found, setFound] = useState(false)

    async function getUser(username) {
        try {
            setFound(true)
            const data = await fetch(`https://api.github.com/users/${username}`);
            console.log("DATA",data);
            data.json().then((response) => setUser(response));
            console.log("USER",user);
            const userData = await fetch(`https://api.github.com/users/${username}/repos`);
            console.log("USERDATA", userData)
            userData.json().then((response) => {
                try {
                    console.log("USERDATA RESPONSE", response)
                    // sorts data from "created_at" in descending order
                    response.sort((a, b) => {
                        if (a.created_at < b.created_at) {
                            return 1;
                        }
                        if (a.created_at > b.created_at) {
                            return -1;
                        }
                        return 0;
                    });
                    
                    setRepos(response.slice(0, 4))
                } catch (error) {                    
                    alert("user not found")
                    setFound(false)
                }
            });
        } catch (error) {
            alert("user not found")
        }
    }


    useEffect(() => {
        getUser(username);
    }, [username]);

    function userInfo(user) {
        return (
            <div layout className='user-box'>
                <div className="user-info">
                    <div className='h-[20vh] w-[20vh] relative xs:m-0 m-auto'>
                        <Image src={user.avatar_url} fill className='img-style' unoptimized />
                    </div>
                    <ul className='font-extralight tracking-[0.2px]'>
                        <li>Followers: <span className='font-medium'>{user.followers}</span></li>
                        <li>Repositories: <span className='font-medium'>{user.public_repos}</span></li>
                    </ul>
                </div>
                <div className='space-y-8'>
                    <div>
                        <h2 className='text-[3vh] uppercase tracking-[0.5px]'>{user.name}</h2>
                        <h3 className='text-[2vh] font-extralight'>{user.login}</h3>
                    </div>
                    <div className='text-[1.8vh] font-extralight space-y-2'>
                        <h2>Latest Work:</h2>
                        <ul className='underline'>
                            {repos.map(element => {
                                return (
                                    <li key={element.id}>
                                        <Link href={`https://github.com/${username}/${element.name}`} target="_blank">
                                            {element.name}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {(user !== {} & found === true) ? userInfo(user) : null}
        </>
    )
}

export default Info;