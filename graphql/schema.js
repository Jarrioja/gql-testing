const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Transaction {
        _id: ID!
        operation: String!
        result: String!
        createdAt: String!
    }
    input TransactionInputData {
        operation: String!
        result: String!
    }
    type RootQuery{
        getTransaction (id: ID!): Transaction!
    }
    type RootMutation {
        createTransaction(transactionInput:TransactionInputData): Transaction!
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);

// const graphql = require("graphql");
// const _ = require("lodash");

// const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

// const users = [
//   { id: "23", firstName: "Bill", age: 20 },
//   { id: "47", firstName: "Jhon", age: 22 },
//   { id: "13", firstName: "Andy", age: 11 },
//   { id: "76", firstName: "Kerio", age: 33 },
// ];

// const UserType = new graphql.GraphQLObjectType({
//   name: "User",
//   fields: {
//     id: { type: graphql.GraphQLString },
//     firstName: { type: graphql.GraphQLString },
//     age: { type: graphql.GraphQLInt },
//   },
// });

// const RootQuery = new graphql.GraphQLObjectType({
//   name: "RootQueryType",
//   fields: {
//     user: {
//       type: UserType,
//       args: { id: { type: GraphQLString } },
//       resolve(parentValue, args) {
//         return _.find(users, { id: args.id });
//       },
//     },
//   },
// });

// module.exports = new graphql.GraphQLSchema({
//   query: RootQuery,
// });
