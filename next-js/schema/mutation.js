export const mutation = `
    type Mutation {
        addTodo(newTodo : InputTodo) : Todo!
        removeTodo(id : ID!) : Boolean!
        updateTodo(updateTodo : InputUpdateTodo) : Todo!
    }

    input InputTodo {
        title : String!
        description : String!
        completed : Boolean
    }

    input InputUpdateTodo {
        _id : ID!
        title : String
        description : String
        completed : Boolean
    }
`;
