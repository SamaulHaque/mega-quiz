import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <h2>What is the purpose of react router?</h2>
            <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>

            <h2>How does context api  works?</h2>
            <p>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's</p>

            <h2>What is React’s useRef hook?</h2>
            <p>useRef is one of the standard hooks provided by React. It will return an object that you can use during the whole lifecycle of the component.

                The main use case for the useRef hook is to access a DOM child directly. I’ll show exactly how to do that in another section.

                Although accessing the DOM is the main use case, it doesn’t mean it’s the only one! useRef can also be very useful to hold a mutable value across different renders of your component.

                For example, it’s often quite handy when using external libraries that weren’t made with React in mind.</p>
        </div>
    );
};

export default Blog;