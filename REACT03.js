class Messages extends React.Component {
    render() {
        const msgs = [
            { id: 1, text: "Greetings!" },
            { id: 2, text: "Goodbye!" },
        ];

        return (
            <ul>
                {msgs.map(m => <li>{m.text}</li>)}
            </ul>
        );
    }
}

class Friend extends React.Component {
    render() {
        const { name, hobbies } = this.props;
        return (
            <div>
                <h1>{name}</h1>
                <ul>
                    {hobbies.map(h => <li>{h}</li>)}
                </ul>
            </div>
        );
    }
}

/* 
ReactDOM.render(
  <div>
    <Friend name="Jessica" hobbies={["Tea", "Frisbee"]} />
    <Friend name="Jake" hobbies={["Chess", "Cats"]} />
  </div>,
  document.getElementById("root")
);
*/