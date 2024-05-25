import {gql} from '@apollo/client';

export const GET_TODOS = gql`
  query {
    tasks {
      task_id
      task_title
      task_description
      completed
    }
  }
`;

export const CREATE_TODO = gql`
  mutation createTask($task_title: String, $task_description: String) {
    createTask(task_title: $task_title, task_description: $task_description) {
      task_id
      task_title
      task_description
      completed
    }
  }
`;

export const DELETE_TASK = gql`
  mutation deleteTask($task_id: Int) {
    deleteTask(task_id: $task_id)
  }
`;

export const UPDATE_TASK = gql`
  mutation updateTask(
    $task_id: Int
    $task_title: String
    $task_description: String
    $completed: Boolean
  ) {
    updateTask(
      task_id: $task_id
      task_title: $task_title
      task_description: $task_description
      completed: $completed
    ) {
      task_id
      task_title
      task_description
      completed
    }
  }
`;
