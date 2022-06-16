import React, {useState, useEffect} from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {
const [tracks, setTracks] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [sortType, setSortType] = useState("");


useEffect(()=> {
  fetch("http://localhost:8001/tracks")
  .then(r=>r.json())
  .then(tracks=>setTracks(tracks))
},[])


const updateSearchTerm = (newSearch) => {
  setSearchTerm(newSearch);
}
const updateSortType = (newSort) => {
  setSortType(newSort);
}

const handleAddTrack = (newTrack) => {
  setTracks([...tracks, newTrack]);
}
 
    
const filteredTracks = tracks.filter(
  track=>track.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
track.artist.toLowerCase().includes(searchTerm.toLowerCase()) || 
track.BPM.toString().includes(searchTerm));


if (sortType==="bpm") {
filteredTracks.sort(function (a,b) {return a.BPM - b.BPM})
} else if (sortType) {
  filteredTracks.sort(function(a,b) {
    const valA = a[sortType].toUpperCase();
    const valB = b[sortType].toUpperCase();
    if (valA < valB) {
      return -1;
    }
    if (valA > valB) {
      return 1;
    }
    return 0;
  }

  )
}

  return (
    <div>
      <Search onUpdateSearch={updateSearchTerm} searchTerm={searchTerm}/>
      <AddTrackForm onAddTrack={handleAddTrack}/>
      <TracksList tracks={filteredTracks} onNewSort={updateSortType}/>
    </div>
  )
}

export default TracksPage