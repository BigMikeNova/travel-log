import React from 'react';    
import { useState, useEffect} from 'react';
 

import Card from '../components/profile-page/card';
import Navbar from '../components/profile-page/Navbar';

import { getUserData } from '../services/userService';



const Profile = () => { 
  const [user, setUser] = useState(null);

  useEffect(() => {
      const fetchUserData = async () => {
          const data = await getUserData('userId');
          setUser(data);
      };

      fetchUserData();
  }, []);

  
    // Use React Router's `<Navigate />` component to redirect to personal profile page if username is yours
   if (!user) { 
    return <div>Loading...</div>;
   }
    
    return (
        <div className="flex mt-4 max-w-4x1 mx-auto gap-6"> 
        <div className="w-3/12"> 
            <Navbar />
            </div>
            <div className="w-9/12"> 
            <Card> 
                <div className="h-36 flex justify-center iteams-center">
                <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.independent.co.uk%2Fs3fs-public%2Fthumbnails%2Fimage%2F2021%2F06%2F02%2F20%2Fistock-833264986.jpg&tbnid=23z-vwSa6oDK2M&vet=12ahUKEwiL9ID_r7qAAxUYHN4AHengCJsQMygAegUIARDqAQ..i&imgrefurl=https%3A%2F%2Fwww.independent.co.uk%2Ftravel%2Feurope%2Fgreece%2Fgreece-country-guide-travel-holiday-b2103555.html&docid=HmVY7sPDq3YvPM&w=2500&h=1664&q=greece&ved=2ahUKEwiL9ID_r7qAAxUYHN4AHengCJsQMygAegUIARDqAQ" alt="placeholder"/>
                </div> 
             { //<Avatar /> see 1:15 in video
               }
               <div className="p-4 pb-24">
                <div className="ml-40>">
                 <h1 className="text-3xl font-bold">John Doe</h1> 
                <div className='text-gray-500 leading-4'>info/ bio</div> 
                </div>
                </div>
                </Card> 
            <Card> {//posts card need to add post card (earlier in video this part is @ 1:40)
}
            </Card>

            </div> 
            </div>
    ); 
};

  
  export default Profile;
