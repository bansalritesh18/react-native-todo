import React, {useCallback} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import Task from './Task';

const TaskList = ({tasks, onEditPress, onDeletePress}) => {
  const renderItem = useCallback(({item}) => {
    const task = item;

    return (
      <Task
        task={task}
        onEditPress={onEditPress}
        onDeletePress={onDeletePress}
      />
    );
  }, []);

  return (
    <FlatList
      data={tasks}
      contentContainerStyle={styles.container}
      renderItem={renderItem}
      keyExtractor={item => item.task_id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
});

export default TaskList;
