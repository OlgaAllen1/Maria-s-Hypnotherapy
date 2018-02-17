import React, { Component } from 'react'
import './container.css'
import imgUrl from './light.jpg'

class Home extends Component {
  render () {
    return (
      <div className='main-cont'>
        <form className='firstp'>

           <img className='picture' src = {imgUrl} />

            <div className="quote">
              <h1>The greatest battle of life is fought out within the silent chambers of the soul. A victory on the inside of a man's heart is worth a hundred conquests on the battlefields of life. To be master of yourself is the best guarantee that you will be master of the situation. Know thyself. The crown of character is self-control.</h1>
                 <div className='sk'>
                    <h3>
                      Spencer W. Kimball
                    </h3>
                 </div>
            </div>
        </form>

        <div className="what">
          <h1>What is Hypnotherapy?</h1>
          <h2>Bla</h2>
        </div>

        <div className="helps">
          <h1>What Hypnotherapy Helps with?</h1>
          <h2>Bla bla</h2>
        </div>

        <div id="hh">
          <form>
            <h1>History of Hypnosis</h1>

            <h2>
              Hypnosis has been used throughout history by priests, witch doctors, healers, and others. The oldest reference found so far is in the Egyptian Evers Papyrus of Three thousand years ago.  The ancient Greeks had sleep temples where patients came to be healed and were put into hypnosis. Most primitive peoples have used hypnosis and do so still at the present time.
              The modern history of hypnosis usually is considered to begin in the 1780's with Franz Anton Mesmer, a physician who originally practiced in Vienna. One day he watched a street magician declared that he could make a spectator do his bidding by touching him with one of these magnets, and he proceeded to put on a demonstration that proved he could do it.  His secret was the power of suggestion, of course.  Mesmer believed the magnets actually had power of their own, however, and out of this belief he developed his theory of magnetism.  Good health, he claimed, depended on the direction of the magnetic flow, which could easily be reversed.
              At one time three thousand patients a day begged to see Mesmer, and in order to accommodate them all he had to change his technique.  His original technique was to place a tub in the middle of a large room from which protruded a number of so-called "magnetic rods."  People sat in the tub holding on to these rods, believing that the magnetic flow in their bodies would be corrected, thus accomplishing a cure. It was again the power o suggestion at work.  It became impossible to accommodate all of the prospective patients in tubs like these, and so he went out into the yard, touched a tree with his so called magnetic rod, and declared the tree to be magnetized.
              Now, all the people had to do was to touch the magnetized tree and they would be miraculously cured of their ills.  It was the power of suggestion again at work. He became the vogue of the French Nobility and the upper class and his practice became very profitable.  Benjamin Franklin, the U.S. Ambassador to France, was on a committee appointed to investigate Mesmer. Franklin watched a demonstration of his techniques and pronounced this verdict: "If these people get well at all they seem to do so by their own imagination." There after "mesmerism" suffered a decided drop in popularity.  But patients in an obvious hypnotic state had been, and many doctors studied mesmerism in secret.  One of these was an English physician named James Braid.  By accident, a patient of Braid's entered the first stage of mesmerism while staring at a fixed light as he waited for an eye examination to begin. Because of the contempt in which mesmerism was held, Braid coined a new term in 1841, "hypnotism," derived from the Greek word for sleep. Braid's observation of our natural trance abilities, revealing sleeplike qualities, was responsible for his choice of this term for induced trance phenomena.  He published a paper on achieving hypnotism through fixation.
              In the 1840's, another British surgeon, James Esdaile, who worked in an Indian prison Hospital, saw a demonstration of mesmerism while in England on vacation. He witnessed a patient anesthetized by hypnosis. When he returned to India he began to use the methods he had seen demonstrated.  Esdaile performed over three thousand operations with hypnosis as his sole anesthetic agent, over three hundred of these being major surgeries. One observer told of witnessing Esdaile remove a cancerous eye from a patient while the other eye looked on unblinking.
              Like others interested in this subject, Esdaile was persecuted by his colleagues.  He was forced to leave his hospital in India and return to England, where the British Medical Association tried him for charlatanism. During the trial one of the physicians claimed that Esdaile was sacrilegious because God meant for man to feel pain and Esdaile was preventing that with hypnosis.
              Hypnosis went through periods of high popularity and times when interested waned.  By 1955 the British Medical Association reported that hypnosis was a valuable tool in medical treatment.  In 1958, The American Medical Association followed suit.  Although advocates of hypnosis are no longer persecuted for their use of it, few courses on it are offered in schools and those interested in it usually have to seek out training on their own.

            </h2>
           </form>
        </div>

        <p className='table'>
          <div id="3">
            <h1>Hypnosis and the observable states of Trance</h1>
            <h2>

              <table border="5">
                  <tr>
                    <th>Name of Hypnosis or Trance State</th>
                    <th>Signs and Characteristics</th>
                    <th>Hypnotherapy</th>
                    <th>Waking or Sleep State</th>
                    <th>Brain Wave Activity (Cycles per second)</th>
                  </tr>
                  <tr>
                    <td>Conscious or waking suggestion</td>
                    <td>Conscious outward observation; analytical, critical, and logical thinking and evaluation. Fully alert.       </td>
                    <td>Positive self talk</td>
                    <td>Normal waking</td>
                    <td>
                      <ul>
                        Beta
                      </ul>
                      <ul>
                        (15-30)
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Walking hypnosis</td>
                    <td>Inward focus, faraway look, glassy glazed eyes, body slouched, dryness of the mouth, urge to swallow.</td>
                    <td>Affirmations</td>
                    <td>Day Dreaming</td>
                    <td>
                      <ul>
                        Beta
                      </ul>
                      <ul>
                        (15-30)
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Hypnoidal</td>
                    <td>Mind awake, mental awareness, Body is still asleep, muscles relaxed, lethargy, abreactions. (White's of eyes turn red, skin is flushed.)</td>
                    <td>Auto suggestions</td>
                    <td>Meditations</td>
                    <td>
                      <ul>
                        Alpha
                      </ul>
                      <ul>
                        (9-14)
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Catalepsy</td>
                    <td>Robot like movements, or immobile limbs, dynamic balance of extensor and flexor muscles, REM, rapid eye movement--uncoordinated movement of the eyeball under the lid. Easy access to subconscious functions of imagination, memories and emotions. Good communication between Conscious and Subconscious mind</td>
                    <td>Gestalts
                      Age Regression
                    </td>
                    <td>Hypnogoic: of relating to, or occurring in the period of drowsiness immediately preceding sleep</td>
                    <td>
                      <ul>
                        Alpha
                      </ul>
                      <ul>
                        (9-14)
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Somnambulism</td>
                    <td>A somnambulist is a sleep walker, Inward focus, muscles relaxed; eyes roll up under the eyelid.  May achieve analgesia. This is a highly imaginative and creative state. We are vulnerable to suggestion in this state.</td>
                    <td>Guided imagery, stories and scripts</td>
                    <td>Sleep walking</td>
                    <td>
                      <ul>
                        Theta
                      </ul>
                      <ul>
                        (4-8)
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Esdale</td>
                    <td>Natural Anesthesia, amnesia, robotic like movements or immobile limbs. Dynamic balance of extensor and flexor muscles. May not respond to suggestion due to the deep inward focus and highly imaginative nature of this state.</td>
                    <td>Natural Child Birth, Pain free dentistry,
                      Natural Pain Relief
                    </td>
                    <td>Hypnotic coma</td>
                    <td>
                      <ul>
                        Delta
                      </ul>
                      <ul>
                        (0.5-9)
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Sleep</td>
                    <td>Conscious mind is dormant. Subconscious mind dreams away accumulated emotions, abreactions. Eyes closed, muscles relaxed, deep breathing.</td>
                    <td>Detoxification, Relaxation, Repair, and Restoration of the Mind and Bo</td>
                    <td>Normal Sleep</td>
                    <td>
                      <ul>
                        Delta
                      </ul>
                      <ul>
                        (0.5-9)
                      </ul>
                    </td>
                  </tr>
              </table>
            </h2>
          </div>
        </p>
      </div>
    )
  }
}

export default Home
