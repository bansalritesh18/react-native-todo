import {Keyboard} from 'react-native';
import React from 'react';
import {useMutation} from '@apollo/client';

import CreateUpdateTask from '../components/CreateUpdateTask';
import Layout from '../components/Layout';

import {UPDATE_TASK, GET_TODOS} from '../graphql/tasks';

const UpdateTask = ({navigation, route}) => {
  const {task} = route.params;
  const [updateTask, {loading}] = useMutation(UPDATE_TASK);

  const handleSubmit = async ({title, description}) => {
    try {
      if (title.trim() !== '') {
        await updateTask({
          variables: {
            task_id: task.task_id,
            task_title: title,
            task_description: description,
          },
          refetchQueries: [{query: GET_TODOS}],
        });
        Keyboard.dismiss();
        navigation.goBack();
      } else {
        alert('Title cannot be empty');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Layout>
      <CreateUpdateTask
        onSubmitPress={handleSubmit}
        task={task}
        loading={loading}
      />
    </Layout>
  );
};

export default UpdateTask;
