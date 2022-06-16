import React, {useState} from 'react'

function AddTrackForm({onAddTrack}) {
const blankTrack = {
  title: "",
  artist: "",
  bpm: 0,
  image: ""
}
const [formData, setFormData] = useState(blankTrack);
const {title, artist, BPM, image} = formData;

const handleChange = (e) => {
  const {name, value} = e.target;
  setFormData((oldData) => ({...oldData,[{name}]:{value}}))
}
console.log(formData);
  return (
      <form>
        <div>
          <input value={image} onChange={handleChange}  type="text" name="image" placeholder="Image URL"/>
          <input value={title} onChange={handleChange}  type="text" name="title" placeholder="title" />
          <input value={artist} onChange={handleChange}  type="text" name="artist" placeholder="Artist" />
          <input value={BPM} onChange={handleChange} type="number" name="bpm" placeholder="BPM" step="1.00" />
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm