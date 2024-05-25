import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TextInput, Button} from 'react-native-paper';

const CreateUpdateTask = ({task, onSubmitPress, loading}) => {
  const [title, setTitle] = useState(task?.task_title);
  const [description, setDescription] = useState(task?.task_description);

  const handleSubmit = () => {
    onSubmitPress({title, description});
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Enter Title"
        />
        <TextInput
          value={description}
          onChangeText={setDescription}
          multiline={true}
          placeholder="Enter Description"
        />
      </View>
      <Button
        mode="contained"
        onPress={!loading && handleSubmit}
        loading={loading}>
        {task ? 'Update Task' : 'Create Task'}
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    flex: 1,
    gap: 10,
  },
});

export default CreateUpdateTask;
