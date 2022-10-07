class Box extends React.Component {
    render() {
        const colors = {
            color: this.props.favoriteColor,
            backgroundColor: this.props.otherColor,
        };

        return <b style={colors}>{this.props.message}</b>;
    }
}

class Message extends React.Component {
    render() {
        return <div className="urgent">Emergency!</div>
    }
}