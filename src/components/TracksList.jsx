import React from 'react'
import Track from './Track'

function TracksList({tracks, onNewSort, onDeleteTrack}) {
  const handleClick = (e) => {    
    onNewSort(e.target.getAttribute('name'))
  }
  return (
    <table>
      <tbody>
        <tr>
          <th>
          <h3 className="row-image">Img</h3>

          </th>
          <th>
            <h3 name="title" onClick={handleClick} className="row-title">Title</h3>
          </th>
          <th>
            <h3 name="artist" onClick={handleClick}  className="">Artist</h3>
          </th>
          <th>
            <h3 name="bpm" onClick={handleClick}  className="">BPM</h3>
          </th>
          <th>
            <h3 name="delete" className="">Delete</h3>
          </th>
        </tr>
        {tracks.map(track=><Track track={track} key={track.id} onDeleteTrack={onDeleteTrack}/>)}
      </tbody>
    </table>
  )
}

export default TracksList