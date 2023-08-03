import card from "./card"

export default function Navbar() {
  
    return (
                <card> 
                  <div className="px-4 py-2">
                    <h2 className="text-gray-500 mb-3">navigation</h2> 
                    <a href="./../../pages/home.js" className="flex gap-2 py-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                   Home</a>
                    <a href="" className="flex gap-2 py-3">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" />
                       </svg>
                     Friends</a>   
                    <a href="" className="flex gap-2 py-3" >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round"  />
                      </svg>
                   Saved Posts</a>
                    <a href="./../../pages/login.js" className="flex gap-2 py-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round"  />
                      </svg>
                   Logout</a> 
                  </div>
                </card>
               
    );
};