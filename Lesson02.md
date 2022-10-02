# JSX - JavaScript Syntax Extension

    JSX
        - not a legal JavaScript
        - it has to "transfiled" to JavaScript
        - you can do this using BABEL

    RULES
        JSX is more strict that HTML
        Element must either:
            - have an explicit closing tag
                <b>...<b/>
            - be explicitly self-closed
                <input name="img"/>
                cannot leave off the / or will get syntax error

    Note
        Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.
        For example, "class" becomes "className" in JSX, and "tabindex" becomes "tabIndex".

    By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.

    Transpiling JSX in Browser
        Easy for getting started — nothing to install!

        Load Babel standalone library:
            <script src="https://unpkg.com/babel-standalone"></script>
        Mark JSX files with type="text/jsx":
            <script src="index.js" type="text/jsx"></script>