import React, {useState} from 'react'

function AddTrackForm({onAddTrack}) {
const blankTrack = {
  title: "",
  artist: "",
  bpm: 0,
  image: ""
}
const [formData, setFormData] = useState(blankTrack);
const {title, artist, bpm, image} = formData;

const handleChange = (e) => {
  const {name, value} = e.target;
  //setFormData((oldData) => ({...oldData,[{name}]:{value}}))
  setFormData({...formData,[name]:value})
}
const handleSubmit = (e) => {
  e.preventDefault();
  // save the new track to the db and then update DOM
  fetch("http://localhost:8001/tracks", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(r=>r.json())
  .then(newTrack=>onAddTrack(newTrack))
  
}
console.log(formData);
  return (
      <form onSubmit = {handleSubmit}>
        <div>
          <input value={image} onChange={handleChange}  type="text" name="image" placeholder="Image URL"/>
          <input value={title} onChange={handleChange}  type="text" name="title" placeholder="title" />
          <input value={artist} onChange={handleChange}  type="text" name="artist" placeholder="Artist" />
          <input value={bpm} onChange={handleChange} type="number" name="bpm" placeholder="BPM" step="1.00" />
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm