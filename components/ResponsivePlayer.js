import React from 'react'
import ReactPlayer from 'react-player'
import styles from './ResponsivePlayer.module.css'
const ResponsivePlayer = ({ url, controls }) => {
  return (
    <div className={styles.wrapper}>
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="450px"
        controls={controls}
      />
    </div>
  )
}
export default ResponsivePlayer
