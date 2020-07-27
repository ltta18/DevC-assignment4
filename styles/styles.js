import { StyleSheet } from "react-native";

export const AppStyles = StyleSheet.create({
  safeView: {
    flex: 1
  }, 
  container: {
    flex: 1,
  },
  navigator: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  }
});

export const AllStyles = StyleSheet.create({
  safeView: {
    flex: 1
  }, 
  keyboard: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  todoItem: {
    margin: 5,
    padding: 10,
    width: '95%',
    minHeight: 20,
    color: 'white',
    borderRadius: 5,
    flexWrap: 'nowrap',
  },
  todoText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  todoInput: {
    width: '95%',
    minHeight: 30,
    color: 'white',
    borderWidth: 1,
    marginTop: '20%',
    marginBottom: '5%',
    borderColor: 'grey'
  },
  inputContainer: {
    width: '90%',
    marginTop: 20,
    marginBottom: '10%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    height: 50,
    width: '50%',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#3282b8',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export const SingleToDoStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerContainer: {
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 30,
    color: 'rgba(0,0,0,0.7)'
  },
  bodyText: {
    fontSize: 40,
    marginTop: 40,
    justifyContent: 'center',
    textAlign: 'center',
  }
});

export const EmptyScreenStyles = StyleSheet.create({
  safeView: {
    flex: 1
  }, 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});