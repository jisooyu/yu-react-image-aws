import { useState } from "react";
import axios from "axios";
function App() {
  const [imageFile, setImageFile] = useState("");
  const handleImage = async (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imageFile", imageFile);
    await axios.post("/uploadPhoto", formData);
  };
  return (
    <div>
      <div>
        <form>
          <label htmlFor='imageFile'>Upload Images</label>
          <input
            type='file'
            name='imageFile'
            accept='image/jpeg, image/jp, image/png'
            onChange={handleImage}
          />
          <button onClick={onSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
