import ApolloClient from "apollo-boost"

const client = new ApolloClient({ uri: "https://us1.prisma.sh/public-hurricaneknight-387/App/dev" })

export { client }