import {Keyboard} from 'react-native';
import React from 'react';
import {useMutation} from '@apollo/client';

import CreateUpdateTask from '../components/CreateUpdateTask';
import Layout from '../components/Layout';

import {CREATE_TODO, GET_TODOS} from '../graphql/tasks';

const CreateTask = ({navigation}) => {
  const [createTask, {loading}] = useMutation(CREATE_TODO);

  const handleSubmit = async ({title, description}) => {
    try {
      if (title.trim() !== '') {
        await createTask({
          variables: {
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
      <CreateUpdateTask onSubmitPress={handleSubmit} loading={loading} />
    </Layout>
  );
};

export default CreateTask;
