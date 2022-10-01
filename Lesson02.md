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