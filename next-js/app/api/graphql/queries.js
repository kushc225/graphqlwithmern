// queries.js
import { gql } from "@apollo/client";

export const GET_TODO_LIST = gql`
  query Query {
    getAllTodo {
      title
      description
      completed
      _id
    }
  }
`;
