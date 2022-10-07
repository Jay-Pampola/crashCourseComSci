class Lottery extends React.Component {
    render() {
        if (this.props.winner)
            return <b>You win!</b>;
        else
            return <b>You lose!</b>;
    }
}

/*
class Lottery extends React.Component {
    render() {
        return (
            <b>You {this.props.winner ? "win" : "lose"}!</b>
        )
    }
}
*/