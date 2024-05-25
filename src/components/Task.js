import React from 'react';
import {Button, Card, Text} from 'react-native-paper';

const Task = ({task, onEditPress, onDeletePress}) => {
  return (
    <Card>
      <Card.Content>
        <Text variant="titleLarge">{task.task_title}</Text>
        <Text variant="bodyMedium">{task.task_description}</Text>
      </Card.Content>
      <Card.Actions>
        <Button mode="outlined" onPress={() => onEditPress(task)}>
          Edit
        </Button>
        <Button mode="contained" onPress={() => onDeletePress(task)}>
          Delete
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default Task;
