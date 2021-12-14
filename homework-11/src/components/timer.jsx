import React, { Component } from 'react'

class CountDown extends Component {
    constructor(props) {
        super(props)
        this.count = this.count.bind(this)
        this.state = {
            days: 0,
            minutes: 0,
            hours: 0,
            secounds: 0,
            time_up: ""
        }
        this.x = null
        this.deadline = null
    }
    count() {
        var now = new Date().getTime();
        var t = this.deadline - now;
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);
        this.setState({ days, minutes, hours, seconds })
        if (t < 0) {
            clearInterval(this.x);
            this.setState({ days: 0, minutes: 0, hours: 0, seconds: 0, time_up: "TIME IS UP" })
        }
    }
    componentDidMount() {
        this.deadline = new Date("Dec 14, 2021 18:20:00").getTime();

        this.x = setInterval(this.count, 1000);
    }

    render() {
        function getZero (num) {
            if (num >= 0 && num <= 9) {
                return `0${num}`;
            } else {
                return num;
            }
        }
        const { days, seconds, hours, minutes, time_up } = this.state
        let fHours = getZero(hours);
        let fMinutes = getZero(minutes);
        let fSeconds = getZero(seconds);
        return (<p>{`${fHours} : ${fMinutes} : ${fSeconds}`}</p>)
    }
}

export default CountDown