# The Modern React
    (Hooks, Context, NextJS, Router)

    Front-End Frameworks/Library
        Developed & Sponsored by FACEBOOK

    REACT - JavaScript Library

    Other Front-End Frameworks
        - Angular
        - Ember
        - VUE

    Components
        - Building blocks of React
        - It let yousplit the UI into independent reusable pieces and think about each piece in isolation.
        - Pieces of UI and view logic
        - Classes that know how to render themselves ont HTML

#  Two ways to write Components
    Class Components
        - the traditional REACT component
        - write logic in a JS Class
        - must include a render method

    Function Components
        - historically used for simpler "dumb" components
        - write logic in a JS Class
        - no render method needed, just return content

# Difference between Class Components and Function Components
    - Both can accept props and render contents
    - Historically, function components couldn't use important features like:
        - State
        - Lifecycle Method
    - With the introduction of HOOKS, we can now write full-featured function  components
    - This course covers Hooks

Always start component names with a capital letter.
React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.

Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps. A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be extracted to a separate component.