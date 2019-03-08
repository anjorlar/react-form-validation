import React from 'react';
import Data from '../Data'

class Home extends React.Component {
    state = {
        textinput: '',
        // initialLength: 0,
        tweetLength: 0,
        maxCharacter: 20,

    }
    onChange = (e) => {
        // console.log('work');
        // this.state.initialLength
        this.setState({ textinput: e.target.value.length })

    }
    render() {
        // const { tweetLength, initialLength, } = this.state
        let boxlimit;
        let arealimit = this.state.textinput * (100 / 20);
        let amount = arealimit / 100;

        boxlimit = {
            border: `3px solid rgba(255,0,0, ${amount})`,
            transition: 'all .5s'
        }
        let textstyle;
        if (this.state.textinput > 18) {
            textstyle = {
                color: 'red'
            };
        }
        return (
            <>
                <div className='home'>
                    <h2>Gemstone Trader</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur quisquam ullam vitae suscipit praesentium optio vero laboriosam porro dolor.</p>
                    <img src={Data.url} alt="jdvhid" />
                    <div className='tweetfield'>
                        <h2>TweetField</h2>
                        <textarea name="TweetInput" id="tweet" cols="20" rows="5" placeholder='TweetInput' onChange={this.onChange} style={boxlimit} />
                        <button style={{ backgroundColor: textstyle }} disabled={this.state.textinput > 20}>Tweet</button>
                    </div>
                    <p><span style={textstyle}>{this.state.textinput}</span> /{this.state.maxCharacter}</p>
                </div>

            </>
        )
    }
}
export default Home;