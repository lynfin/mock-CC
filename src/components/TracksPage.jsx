import React, {useState, useEffect} from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {
const [tracks, setTracks] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
// filteredTracks = [];

useEffect(()=> {
  fetch("http://localhost:8001/tracks")
  .then(r=>r.json())
  .then(tracks=>setTracks(tracks))
},[])

// useEffect(() => {
// filteredTracks = tracks.filter(track=>track.title.contains(searchTerm))
// },[searchTerm, tracks])

const updateSearchTerm = (newSearch) => {
  setSearchTerm(newSearch);
}

const handleAddTrack = (newTrack) => {
  setTracks([...tracks, newTrack]);
}
    console.log('Search',searchTerm)
    //console.log('Filtered tracks',filteredTracks)
const filteredTracks = tracks.filter(track=>track.title.includes(searchTerm));

  return (
    <div>
      <Search onUpdateSearch={updateSearchTerm} searchTerm={searchTerm}/>
      <AddTrackForm onAddTrack={handleAddTrack}/>
      <TracksList tracks={filteredTracks}/>
    </div>
  )
}

export default TracksPage