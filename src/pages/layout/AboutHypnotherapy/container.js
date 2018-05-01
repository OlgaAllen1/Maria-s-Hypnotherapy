import React, { Component } from 'react'
import './container.css'
import imgUrl from './light.jpg'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Home extends Component {
  render () {
    return (
      <MuiThemeProvider>

            <div className='main-cont'>
              <form className='firstp'>

                 <img className='picture' src = {imgUrl} />


                    {/*<Paper style={style} zDepth={5} rounded={true}>*/}
                      <div className="quote">
                        <h1>The greatest battle of life is fought out within the silent chambers of the soul. A victory on the inside of a man's heart is worth a hundred conquests on the battlefields of life. To be master of yourself is the best guarantee that you will be master of the situation. Know thyself. The crown of character is self-control.
                        </h1>
                           <div className='sk'>
                              <h3>
                                Spencer W. Kimball
                              </h3>
                           </div>
                      </div>
                    {/*</Paper>*/}
              </form>

                    <div className="what">
                      <h1>What is Hypnotherapy?</h1>
                      <h2>Bla</h2>
                    </div>

                    <div className="helps">
                      <h1>What Hypnotherapy Helps with?</h1>
                      <h2>Bla</h2>
                    </div>
            </div>

      </MuiThemeProvider>


    )
  }
}

export default Home
