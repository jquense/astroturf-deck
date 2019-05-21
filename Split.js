import React from 'react'

const Split = ({ children, align, transition }) => {
  const [a, ...rest] = React.Children.toArray(children)
  return (
    <div
      css={{
        display: 'flex',
        height: '100%',
        alignItems: align || 'center',
        justifyContent: 'space-around',
        '> * + *': {
          paddingLeft: transition ? 40 : 120,
        },
      }}
    >
      <div>{a}</div>
      {transition && <div>{transition}</div>}
      <div>{rest}</div>
    </div>
  )
}

export default Split
