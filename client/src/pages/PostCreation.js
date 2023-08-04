import React, { useState } from 'react';

const PostCreation = () => {
  const [itinerary, setItinerary] = useState('');
  const [budget, setBudget] = useState('');
  const [description, setDescription] = useState('');
  const [photos, setPhotos] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform form validation (e.g., check for empty fields)
    if (!itinerary || !budget || !description) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      // Assuming you have a server endpoint for creating posts
      const formData = new FormData();
      formData.append('itinerary', itinerary);
      formData.append('budget', budget);
      formData.append('description', description);

      // Append multiple photos (if any)
      for (let i = 0; i < photos.length; i++) {
        formData.append('photos', photos[i]);
      }

      const response = await fetch('/api/createpost', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        // Post creation successful, redirect to the homepage or other page
        // For example, if you have a homepage component, you can redirect to '/home'
        // history.push('/home');
      } else {
        // Post creation failed, display an error message
        alert(data.message);
      }
    } catch (error) {
      // Handle any network or server-side errors
      console.error('Error occurred:', error);
    }
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    setPhotos(files);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="itinerary">Itinerary:</label>
        <input
          type="text"
          name="itinerary"
          id="itinerary"
          value={itinerary}
          onChange={(e) => setItinerary(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="budget">Budget:</label>
        <input
          type="number"
          name="budget"
          id="budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="photos">Photos:</label>
        <input
          type="file"
          name="photos"
          multiple
          onChange={(e) => handleImageChange(e)}
        />
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default PostCreation;
