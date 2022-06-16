import React, {useState, useEffect} from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {
const [tracks, setTracks] = useState([]);
const [searchTerm, setSearchTerm] = useState("");

useEffect(()=> {
  fetch("http://localhost:8001/tracks")
  .then(r=>r.json())
  .then(tracks=>setTracks(tracks))
},[])

const updateSearchTerm = (newSearch) => {
  setSearchTerm(newSearch);
}

const handleAddTrack = (newTrack) => {
  setTracks([...tracks, newTrack]);
}
    console.log('Search',searchTerm)

  return (
    <div>
      <Search onUpdateSearch={updateSearchTerm}/>
      <AddTrackForm onAddTrack={handleAddTrack}/>
      <TracksList tracks={tracks}/>
    </div>
  )
}

export default TracksPage