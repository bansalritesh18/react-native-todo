import {AppRegistry} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ApolloProvider} from '@apollo/client';

import TaskList from './src/screens/TaskList';
import CreateTask from './src/screens/CreateTask';
import UpdateTask from './src/screens/UpdateTask';

import client from './src/graphql/client';
import {name as appName} from './app.json';

const Main = () => {
  const Stack = createNativeStackNavigator();
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerTitle: 'Tasks'}}
            name="Tasks"
            component={TaskList}
          />
          <Stack.Screen
            options={{headerTitle: 'Create Task'}}
            name="CreateTask"
            component={CreateTask}
          />
          <Stack.Screen
            options={{headerTitle: 'Update Task'}}
            name="UpdateTask"
            component={UpdateTask}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
