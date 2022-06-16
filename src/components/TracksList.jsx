import React from 'react'
import Track from './Track'

function TracksList({tracks, onNewSort}) {
  const handleClick = (e) => {
    console.log('Requested sort by', e.target.getAttribute('name'))
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
        </tr>
        {tracks.map(track=><Track track={track} key={track.id}/>)}
      </tbody>
    </table>
  )
}

export default TracksList