import React, { Component } from 'react'

class FooterComponent extends Component{
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <a className='btn btn-secondary' href='https://github.com/EriVelk/maps-react' target='_blank' rel="noreferrer">Github</a>
                </footer>
            </div>
        )
    }

}

export default FooterComponent