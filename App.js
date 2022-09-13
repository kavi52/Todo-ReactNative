import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Todo from './src/components/Todo';
import { ToastProvider } from 'react-native-toast-notifications'

export default function App() {
  LogBox.ignoreAllLogs(); return (
    <Provider store={store}>
      <ToastProvider>
        <Todo />
      </ToastProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
