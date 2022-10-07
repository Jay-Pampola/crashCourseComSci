class Hello extends React.Component {
    render() {
        return (
            <div>
                <p>Secret Message: </p>
                <p>Hi {this.props.to} from {this.props.from}</p>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Hello to="Kay" from="Kim" />
        <Hello to="me" from="you" />
    </div>,
    document.getElementById("root")
);