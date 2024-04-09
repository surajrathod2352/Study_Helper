import React from 'react'

export default function VideoPlayer(Id) {    
  return (
    <div>
      <iframe
          // Width of the iframe
        height={500}// Height of the iframe
        
        style={{ width: '100%' }}
        src={`https://www.youtube.com/embed/${Id.link}`} // URL of the YouTube video to embed
        title="YouTube Video"  // Accessible name for the iframe (for screen readers)
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  // Permissions for the iframe
        allowFullScreen  // Allow fullscreen mode for the embedded video
      ></iframe>
    </div>
  )
}
