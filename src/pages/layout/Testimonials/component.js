import React, { Component } from 'react'
import './component.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'
import imgUrl from './Panorama1.jpg'
import iUrl from './Panorama2.jpg'
import aUrl from './Abandonment.jpg'
import loveUrl from './LearningToLove.jpg'


class Testimonials extends Component {
  render () {
    return (
      <MuiThemeProvider>

        <div className='page'>
              <h1>Testimonials</h1>
          <br/>

            <Paper zDepth={5} rounded={true}>
              <img className='panorama1' src = {imgUrl} />
              <div className='t'>
                <br/>
                <h1>Health Challenges </h1>
                  <p>
                      Marie has known me for several years. She has been aware of my ongoing health challenges. She suggested that hypnotherapy would be a benefit to me. I have utilized many different health aids and therapies over the years in my quest for healing life-long ailments. I had not ever utilized hypnotherapy and did not know much about it. In fact, I had a certain amount of apprehension before my first session. I wondered if I were even “hypnotizable”.
                    I have now had five sessions, and I am amazed how much progress I have made.  I have come to realize how much our subconscious mind dictates our actions and can impede our progress.
                    Marie’s calm manner and expertise were instrumental in guiding me into the trance stage in a relatively short amount of time.  This helped me to uncover and address detrimental thought patterns that I had developed on a subconscious level.
                  </p>
                  <p>
                    I am amazed at the progress I have made.  My Family has also recognized the positive improvements occurring since I began hypnotherapy.  As I have discovered the negative thought patterns that I had developed and changed them into positive thought patterns, I am more hopeful than ever before in achieving a complete resolution to my physical health issues.
                  </p>

                  <p>
                    I recommend Marie’s services.  I believe hypnotherapy to be one of the most beneficial modalities for achieving success and optimal health.
                  </p>
                <br/>
                  Lani Diez
              </div>
            </Paper>

          <br/>

            <Paper zDepth={5} rounded={true}>
              <img src = {iUrl} />
              <div className='pp'>
                <br/>
                    <h1 >
                      Grief
                    </h1>
                      <p>
                      I have only had one session.  I will admit I was a little skeptical.   I did not think she would be able to hypnotize me.   I was wrong.  She gets you so relaxed and then puts you under.   I knew what was going the whole session.  I was completely in charge and aware of everything happening.  She asks you questions, and for me, I found my mind throwing all these ideas at me so it would take a little bit of thinking before I could answer.  You would see a situation in a different way.   From different points of view which opened your mind (or maybe I should say your heart).  I knew I was in charge when she brought things out of my subconscious mind.
                      </p>
                      <p>
                        I was totaly relaxed and felt like a load had been lifted from me.  It is hard to explain but it really works.  I felt so peaceful and happy.  I would recommend this to anyone.  Marie is there to help you.  She is non-judgmental, just trying to work through a situation to help you, never judging or criticizing you or the person who might have caused the problem. That is what I appreciated about Marie.
                      </p>
                      <p>
                        LaRee Hall
                      </p>
              </div>
            </Paper>

          <br/>

            <Paper  zDepth={5} rounded={true}>
              <img className='Abandonment' src = {aUrl}/>
                  <div className='pp'>
                    <br/>
                      <h1>Abandonment </h1>
                    <br/>
                        <p>
                          I have a teenage grandson, he has been going through some very difficult times in his life.  He was having some very serious anger issues, to the point that I was afraid that he was going to hurt someone.  I called Marie to see what I could do for him.  She said she could help him.  He of course did not want to go see her. She asked him to come over so he could meet her then she explained what she did and answered any questions he had.  He then agreed to have a session.  I asked him how he felt after the session and he said he felt more relaxed. He felt it helped him. He was very willing to have his next session.  This was an amazing session.  They accomplished a lot with this session.  He was smiling and the twinkle was back in his eyes after this session.  He won't be ready for another session for a few weeks.  I can see the difference in him.  He is more the happy go lucky teenager he used to be. There is a peace in him now. I would like to thank you Marie for working miracles with my grandson.
                        </p>
                        <p>
                          Anonymous
                        </p>
                  </div>
            </Paper>

          <br/>

            <Paper zDepth={5} rounded={true}>
              <img className='love' src = {loveUrl} />
              <div className='pp'>

                    <br/>
                      <h1>Learning to love</h1>
                    <br/>
                      <p>
                        My experience with Hypnotherapy has really opened my eyes concerning my past and how I’ve handled it. My first sessions, I was skeptical about it, but after working with Marie I’ve found a true ability to feel love and express love ( which was what I struggled with). Marie helped guide me as I took these struggles into my own hands and fortified my strengths.  I took younger versions of myself and helped them realize that they can be forgiven; to completely change that negative memory and turn it into a positive one.
                      </p>
                      <p>
                        I will always be thankful for the service provided with hypnotherapy.
                      </p>
                      <p>
                        Sincerely,
                      </p>
                      <p>
                        A
                      </p>
              </div>

            </Paper>


        </div>

      </MuiThemeProvider>

    )
  }
}

export default Testimonials

const style = {
  // height: 5000,
  // width: 1500,
  margin: 0,

  textAlign: 'center',
  display: 'inline-block',
}