import React, { Children, ReactNode } from 'react'

const Rootlayout = ({hildren}:ReactNode) => {
  return (
    <main>
      {children}
    </main>
  )
}

export default Rootlayout
