import React from 'react'
import defaultVinyl from '../assets/vinyl_PNG111.png'

function Track({track, onDeleteTrack}) {
  const {title, artist, BPM, image, id} = track;
  const handleClick = (e) => {
    console.log('Will delete',title)
    fetch(`http://localhost:8001/tracks/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(()=>onDeleteTrack(track))

  }
  return (
    <tr className="table-row">
        <td className="row-image">
            {/* you can use the default image if no image is given */}
            <img src={image?image:defaultVinyl} alt={title} />
        </td>
        <td className="row-title">{title}</td>
        <td>{artist}</td>
        <td>{BPM}</td>
        <td><button onClick={handleClick}>  X  </button></td>
    </tr>
  )
}

export default Track