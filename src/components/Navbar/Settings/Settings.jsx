import React from 'react'
import { Redirect } from 'react-router-dom'

class Settings extends React.Component {
    state = {
        isAuth: false
    }
    render() {
        return (
            <>
                {!this.state.isAuth && <Redirect to='/login' />}
                <div>
                    <h3>The Settingz</h3>
                    <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vero expedita voluptas temporibus inventore ipsum sequi impedit accusantium, hic architecto. </strong>
                </div>
            </>
        )
    }
}
export default Settings;