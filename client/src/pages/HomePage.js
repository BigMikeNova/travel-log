import React, { useState, useEffect } from 'react';
import { getUserData } from '../services/userServices';

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
                {/* Display the user's profile picture */}
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
                {/* Display the user's posts */}
                {user.feed.map((post, i) => (
                    <div key={i} className="p-4 border-b-2">
                        {/* Display the author's profile picture */}
                        <img className="w-24 h-24 rounded-full" src={post.authorProfilePicture} alt="Author" />
                        <h2 className="font-bold">{post.author}</h2>
                        {/* Display the post content */}
                        <p>{post.content}</p>
                        {/* Display the post images */}
                        {post.photos.map((photo, j) => (
                            <img key={j} className="w-48 h-48" src={photo} alt={`Post ${j+1}`} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
