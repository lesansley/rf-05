import * as React from 'react'
import '.styles/box-styles.css'

const Box = ({size, className = '', style, ...otherProps}) => {
  const sizeClassName = size ? `box--${size}` : ''

  return (
    <div
      className={`box ${sizeClassName} ${className}`}
      style={{
        fontStyle: 'italic',
        ...style,
      }}
      {...otherProps}
    />
  )
}

const smallBox = (
  <div
    style={{fontStyle: 'italic', backgroundColor: 'lightblue'}}
    className={`box box--small`}
  >
    small lightblue box
  </div>
)
const mediumBox = (
  <div style={{backgroundColor: 'pink'}} className={`box box--medium`}>
    medium pink box
  </div>
)
const largeBox = (
  <div style={{backgroundColor: 'orange'}} className={`box box--large`}>
    large orange box
  </div>
)

function App() {
  return (
    <div>
      <Box
        style={{backgroundColor: 'lightblue'}}
        className="box box--small"
        children="small lightblue box"
      />
      <Box
        style={{backgroundColor: 'lightblue'}}
        size="small"
        children="small lightblue box"
      />
      {smallBox}
      <Box
        style={{backgroundColor: 'pink'}}
        size="medium"
        children="medium pink box"
      />
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
