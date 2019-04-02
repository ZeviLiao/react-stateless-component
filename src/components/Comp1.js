import React from 'react'

const withSecretToLife = WrappedComponent => {
  return props => <WrappedComponent {...props} secretToLife={42} />
}

const DisplayTheSecret = props => (
  <div>The secret to life is {props.secretToLife}.</div>
)

const WrappedComponent = withSecretToLife(DisplayTheSecret)

export default WrappedComponent
