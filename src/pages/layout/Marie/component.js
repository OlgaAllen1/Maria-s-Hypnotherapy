import React, { Component } from 'react'
import './component.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'
import imgUrl from './Marie.jpg'
import certUrl from './cert.jpg'
import sunUrl from './sunshine.jpg'
import lizaUrl from './Liza.jpg'


class Marie extends Component {
  render () {
    return (
      <MuiThemeProvider>

        <div className='page'>
              <form>
                <div>
                  <h1>Let me tell you about myself</h1>
                </div>
              </form>

         <br/>

              <form>
                <Paper className='secondp' zDepth={5} rounded={true}>
                  <img className='marie1' src = {imgUrl} />
                <div className='m'>
                  <br/>
                  <h1>
                    My goal is to help people find peace, harmony, and fulfillment of their dreams.

                    I have very high standards and always strive to maintain those standards.  I am a hard worker and push myself to find solutions. I have strong boundaries and will not cross the boundaries that I have set for myself, while accepting that others have to figure out their own boundaries and set their own limits.  I have learned to present myself in a very positive light; I know who I am, and I live up to that.
                    {/*I specialize in hypnotherapy that helps my clients heal from*/}
                    {/*•	Abuse				Achieving goals*/}
                    {/*•	Pain				Anger management*/}
                    {/*•	Pornography*/}
                    {/*•	Weight Loss*/}

                  </h1>
                </div>
                </Paper>
              </form>

          <br/>

              <form>

                <Paper className='secondp' zDepth={5} rounded={true}>
                  <div className='mm'>
                    <br/>

                      <div className='e'>

                        <h1 > Education: </h1>

                      </div>

                    <br/>

                    <ul>
                        <li>Certified as a Clinical Hypnotherapist by the American Council of Hypnotist Examiners</li>
                        <li>Trained at the Certified Hypnotherapy Training School in Farmington, Utah</li>
                        <li>Weber State University, working towards a degree in Science & General Studies</li>
                        <li>3 Key Elements Body Language, Master Your Influence, The Art of Mentoring, and Present Yourself training programs</li>
                    </ul>

                  </div>

                  <img className='marie2' src = {certUrl} />
                 </Paper>

              </form>

          <br/>

              <form>

                <Paper className='secondp' zDepth={5} rounded={true}>
                  <img className='marie3' src = {sunUrl} />
                  <div className='mmm'>

                    <br/>

                      <div className='e'>

                        <h1>Professional Experience</h1>

                      </div>

                    <br/>

                    <ul>
                        <li>As a Mentor and Coach, I taught and motivated clients to build confidence and positivity, set and achieve goals.</li>
                        <li>As a Health and Wellness Counselor, I taught classes about maintaining healthy body systems, and counseled with people one-on-one about health issues and beneficial products.</li>
                        <li>I owned and operated Marie Whale and Family Concessions for 17 years,
                          starting at a time when my husband was laid off from work and I had to make ends meet with seven children.
                          I know, understand, and believe in the entrepreneur spirit.</li>
                    </ul>

                  </div>

                </Paper>

              </form>

          <br/>

              <form>

                <Paper className='thirdp' zDepth={5} rounded={true}>

                  <div className='mmmm'>

                    <br/>

                      <div className='e'>

                        <h1>I specialize in hypnotherapy that helps my clients:</h1>

                      </div>

                    <br/>

                    <ul>
                        <li>Heal from Abuse</li>
                        <li>Heal from Pain</li>
                        <li>Anger management</li>
                        <li>Weight Loss</li>
                        <li>Achieving goals</li>
                    </ul>

                  </div>

                  <img className='marie4' src = {lizaUrl} />

                </Paper>

              </form>


            </div>

      </MuiThemeProvider>

    )
  }
}

export default Marie

const style = {
  // height: 5000,
  // width: 1500,
  margin: 0,

  textAlign: 'center',
  display: 'inline-block',
}