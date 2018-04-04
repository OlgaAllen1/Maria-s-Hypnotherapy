import React,{ Component } from 'react'
import './container.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'

export default class Blog extends Component {
  render () {
    return(
      <MuiThemeProvider>
        <Paper style={style} zDepth={5} rounded={false}>Test</Paper>

      </MuiThemeProvider>

    );
  }
}

const style = {
  height: 100,
  width: 600,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};








