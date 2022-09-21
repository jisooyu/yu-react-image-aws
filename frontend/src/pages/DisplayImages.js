import { useState, useEffect } from "react";
import axios from "axios";
function DisplayImages() {
  const [imageUrl, setImageUrl] = useState([]);
  useEffect(() => {
    async function getImages() {
      let result = await axios.get("/getPhotos");
      setImageUrl(result);
    }
    getImages();
  }, []);
  return (
    <div className='container text-xl md:mx-auto '>
      <div className='grid grid-cols-3 gap-3'>
        <h1>Photos Display</h1>
      </div>
    </div>
  );
}

export default DisplayImages;
