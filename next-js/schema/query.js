export const query = `
    type Query {
        getAllTodo : [Todo]
    },

    type Todo {
        _id : ID!
        title : String!
        description : String!
        completed : Boolean
    }
`;
