import { StyleSheet } from "react-native";

export const estilosApp = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  instructions: {
    flex: 1,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  imagen: {
    flex: 3,
  },
  greetings: {
    alignItems: 'center',
    flex: 2,
  },
  blink: {
    flex: 1,
  },
  textos: {
    flex: 2,
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  boton: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  }
});
