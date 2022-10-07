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

class Machine extends React.Component {
    render() {
        const { s1, s2, s3 } = this.props;
        const winner = (s1 === s2) && (s2 === s3);

        return (
            <div className="Machine">
                <b>{s1}</b> <b>{s2}</b> <b>{s3}</b>
                <p>You {winner ? "win!" : "lose!"}</p>
            </div>
        );
    }
}

/*
ReactDOM.render(
  <Machine s1="🍇" s2="🍇" s3="🍇" />,
  document.getElementById("root")
);S
*/