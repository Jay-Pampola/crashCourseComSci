# Property (Props)
    A useful component is a reusable one.
    This often means making it configurable or customizable.

    Note: Rendering Multiple Top-Level Elements
    Prior to React 16, every component had to render a single top-level element. In newer versions of React, it’s possible to render siblings at the top level, but the syntax isn’t quite as clean. You’re welcome to look into this if you’re curious, but all of our Component files will render a single element at the top of their hierarchy.

    Properties Requirements
    - Properties are for configuring your component

    - Properties are immutable

    - Properties can be strings:
        <User name="Jane" title="CEO" />
    - For other types, embed JS expression using the curly braces:
        <User name="Jane" salary={ 100000 } hobbies={ ["bridge", "reading", "tea"] } />

    Using Properties
    - Get to properties inside class with this.props.propertyName
    - Properties are immutable — cannot change!

    Conditionals in JSX
        The render() method can return either:
            - a single valid DOM object (return <div>...</div>)
            - an array of DOM objects (but don’t do this yet!)
            - null (undefined is not ok!)