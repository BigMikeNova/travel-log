import React, { useState, useEffect } from 'react';
import { getUserData } from '../services/userService';

const HomePage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const data = await getUserData('userId'); 
            setUser(data);
        };

        fetchUserData();
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex">
            <div className="flex flex-col space-y-8 w-1/3">
                <img className="w-96 h-96 rounded-full" src={user.profilePicture} alt="Profile" />
                <div className="h-96 overflow-y-scroll">
                    {user.following.map((user, i) => (
                        <p key={i} className="border-b-2 p-2">
                            {user}
                        </p>
                    ))}
                </div>
            </div>
            <div className="w-2/3 overflow-y-scroll">
                {user.feed.map((post, i) => (
                    <div key={i} className="p-4 border-b-2">
                        <h2 className="font-bold">{post.author}</h2>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;