import react from 'react'

class MapPin extends react.Component {
    render() {
        return(
            <img width='20' style={{position: 'relative', right: 10, bottom: 35}}src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Google_Maps_pin.svg/585px-Google_Maps_pin.svg.png"/>
        )
    }
}

export default MapPin
