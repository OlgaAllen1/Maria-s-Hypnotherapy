import {ApolloClient, createNetworkInterface } from 'react-apollo'

const networkInterface = createNetworkInterface ({
  uri:
})

const client = new ApolloClient ({
  networtInterface
})

export default client
