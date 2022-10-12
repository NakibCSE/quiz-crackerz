import React from "react";

const Blog = () => {
  return (
    <div className="p-10">
      <h3 className="text-3xl font-bold">1.What is the purpose of react router??</h3>
      <p>
        React Router is a standard library for routing in React. It enables the
        navigation among views of various components in a React Application,
        allows changing the browser URL, and keeps the UI in sync with the
        URL.We can go from one page to another page without loading the entire
        page. So its make the performance of Single Page Application very much
      </p>
      <h3 className="text-3xl mt-4 font-bold">2.How does context api work in react??</h3>
      <p>
        The React Context API is a way for a React app to effectively produce
        global variables that can be passed around. This is the alternative to
        "prop drilling" or moving props from grandparent to child to parent, and
        so on. Context is also touted as an easier, lighter approach to state
        management.Context is a built-in API introduced in ​​React 16.3. It
        makes it possible to pass data from parent to children nested deep down
        the component tree directly, instead of passing it down through a chain
        of props.
      </p>
      <h3 className="text-3xl mt-4 font-bold">3.React JS useRef Hook?</h3>
      <p>
        The useRef returns a mutable ref object. This object has a property
        called .current. The value is persisted in the refContainer.current
        property. These values are accessed from the current property of the
        returned object. The .current property could be initialised to the
        passed argument initialValue e.g. useRef(initialValue). The object can
        persist a value for a full lifetime of the component
      </p>
    </div>
  );
};

export default Blog;
