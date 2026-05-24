import React from 'react'

const ExtraInfoContext = React.createContext({
  extraInfo: [],
  setExtraInfo: () => {},
})

export default ExtraInfoContext