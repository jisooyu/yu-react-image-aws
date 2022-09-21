import { useState } from "react";
import axios from "axios";
import DisplayImages from "./pages/DisplayImages";
function App() {
  const [imageFile, setImageFile] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imageFile", imageFile);
    const res = await axios.post("/uploadPhoto", formData);
    setImageUrl(res.data.Location);
  };

  return (
    <div className='container text-xl md:mx-auto '>
      <div className='grid grid-cols-3 gap-3'>
        <div className='mt-10 col-span-3'>
          <form>
            <label className='block mb-2 text-md font-medium text-gray-900 dark:text-gray-300'>
              Upload file to AWS S3
            </label>
            <input
              className='mt-4 block w-full text-gray-500 file:py-2 file:px-6 file:text-indigo-100 file:bg-indigo-700 file:rounded-lg
              hover:file:bg-red-800'
              type='file'
              name='imageFile'
              accept='image/jpeg, image/jp, image/png'
              onChange={handleImage}
            />
            <button
              className='h-10 px-5 mt-4 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-red-800'
              onClick={onSubmit}>
              Submit
            </button>
          </form>
        </div>
        <p className='mt-10 col-span-3'>Photo Uploaded to S3</p>
        <div className='mt-5'>
          <img src={imageUrl} alt='Uploaded to AWS S3' />
        </div>
        <DisplayImages />
      </div>
    </div>
  );
}

export default App;
