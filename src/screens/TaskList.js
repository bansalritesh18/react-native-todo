import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useMutation, useQuery} from '@apollo/client';
import {ActivityIndicator, Text, FAB} from 'react-native-paper';

import TaskList from '../components/TaskList';
import Layout from '../components/Layout';

import {GET_TODOS, DELETE_TASK} from '../graphql/tasks';

const TodoList = ({navigation}) => {
  const {loading, error, data, refetch} = useQuery(GET_TODOS);
  const [deleteTask] = useMutation(DELETE_TASK);

  const onDeletePress = async task => {
    try {
      await deleteTask({variables: {task_id: task.task_id}});
      refetch();
    } catch (error) {
      console.error('Error deleting task:', error.message);
    }
  };

  const onEditPress = task => {
    navigation.navigate('UpdateTask', {task});
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error)
    return (
      <View style={styles.container}>
        <Text>{error.message}</Text>
      </View>
    );

  return (
    <Layout>
      {data.tasks.length === 0 ? (
        <View style={styles.container}>
          <Text variant="titleLarge">No Task Pending!</Text>
          <Text variant="titleSmall">Create a new Task</Text>
        </View>
      ) : (
        <TaskList
          tasks={data.tasks}
          onDeletePress={onDeletePress}
          onEditPress={onEditPress}
        />
      )}
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => {
          navigation.navigate('CreateTask');
        }}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default TodoList;
