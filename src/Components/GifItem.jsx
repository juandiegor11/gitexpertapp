import React from 'react'

export const GifItem = ({title,url}) => {
  return (
      <>
        <div className='movie-container'>
            <img src={url} alt={title} />
        </div>
      </>
  )
}
