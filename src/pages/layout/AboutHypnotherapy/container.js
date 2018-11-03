import React, { Component } from 'react'
import './container.css'
import imgUrl from '../Marie/light.jpg'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'
import lilyUrl from './lily.jpg'


class Home extends Component {

  render () {

    return (
      <MuiThemeProvider>

            <div className='main-cont'>

                    {/*<Paper className='firstp' zDepth={5} rounded={true}>*/}
                      {/*<img className='picture' src = {imgUrl} />*/}
                      {/*<div className="quote">*/}
                        {/*<br/>*/}
                        {/*<h1>The greatest battle of life is fought out within the silent chambers of the soul. A victory on the inside of a man's heart is worth a hundred conquests on the battlefields of life. To be master of yourself is the best guarantee that you will be master of the situation. Know thyself. The crown of character is self-control.*/}
                        {/*</h1>*/}
                           {/*<div className='sk'>*/}
                              {/*<h3>*/}
                                {/*Spencer W. Kimball*/}
                              {/*</h3>*/}
                           {/*</div>*/}
                      {/*</div>*/}
                    {/*</Paper>*/}

              <br/>

                    {/*<form>*/}

                      {/*<Paper className='secondp' zDepth={5} rounded={true}>*/}

                        {/*<div className='pp'>*/}

                              {/*<br/>*/}

                                  {/*<div className='m'>*/}

                                    {/*<h1>Marie Whale is answering questions:</h1>*/}

                                  {/*</div>*/}

                              {/*<br/>*/}

                                    {/*<ul>*/}
                                      {/*<li>How my sessions work</li>*/}
                                      {/*<li>If you will be in control under hypnosis</li>*/}
                                      {/*<li>and other questions</li>*/}
                                      {/*/!*<li>Weight Loss</li>*!/*/}
                                      {/*/!*<li>Achieving goals</li>*!/*/}
                                    {/*</ul>*/}

                        {/*</div>*/}

                        {/*<div className='video'>*/}

                          {/*<iframe*/}
                            {/*width="560"*/}
                            {/*height="315"*/}
                            {/*src="https://www.youtube.com/embed/5uJuS2v8Tf0">*/}
                            {/*// frameborder="0"*/}
                            {/*// allow="autoplay;encrypted-media"*/}
                            {/*// allowfullscreen*/}

                          {/*</iframe>*/}
                        {/*</div>*/}

                      {/*</Paper>*/}

                    {/*</form>*/}

              <br/>


                    {/*<Paper className='lily' zDepth={5} rounded={true}>*/}

                      {/*<div className="introduction">*/}
                        {/*<br/>*/}
                        {/*<h1>The greatest b.*/}
                        {/*</h1>*/}

                      {/*</div>*/}
                      {/*<img className='picture' src = {lilyUrl} />*/}
                    {/*</Paper>*/}

            </div>

      </MuiThemeProvider>


    )
  }
}

export default Home

// const style = {
//   // height: 5000,
//   // width: 1500,
//   margin: 0,

//   textAlign: 'center',
//   display: 'inline-block',
// };
