import { Text } from '@radix-ui/themes'
import React, { PropsWithChildren } from 'react'

function ErrorMessage({children}:PropsWithChildren) {
    if(!children) return;
  return (
    <Text as='p' color='red'>{children}</Text>
  )
}

export default ErrorMessage