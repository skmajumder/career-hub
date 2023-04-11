import React from "react";

const BlogQuestion = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 text-start">
            <article className="question mb-5">
              <h4 className="h4 mb-3">1. When should you use context API?</h4>
              <p>
                To avoid prop-drilling and transfer data throughout the
                application, we use React's content API. It's also useful when
                many components of an application want access to the same state
                or data and we don't want prop-drilling. We can transport data
                up and down the component tree using the Context API without
                having to offer individual props at each level.
              </p>
            </article>
            <article className="question mb-5">
              <h4 className="h4 mb-3">2. What is a custom hook?</h4>
              <p>
                With React's custom hooks, we can reuse code that depends on the
                state of other components. Instead of putting the same code or
                logic in each component, it turns the logic into a function that
                can be used again and again. Both built-in hooks and custom
                hooks can be used with custom hooks. They are made by starting
                the name of a function with "use" and returning a list or object
                with the right values. Custom hooks get rid of duplicate code
                and make code easier to read, organize, and fix.
              </p>
            </article>
            <article className="question mb-5">
              <h4 className="h4 mb-3">3. What is useRef?</h4>
              <p>
                useRef in React allow to create a changeable ref object that can
                store data between views without having to re-render. It takes
                care of attention, DOM nodes, and instances of components. we
                can change a number in a ref object without having to re-render.
                Changes that need to be re-rendered must be taken care of by the
                useState or useEffect hooks.
              </p>
            </article>
            <article className="question mb-5">
              <h4 className="h4 mb-3">4. What is useMemo?</h4>
              <p>
                useMemo, is a React hook, that caches a function's result to
                improve efficiency. It accepts a function and an array of
                dependents and runs the function if any dependencies change. It
                optimises intensive calculations, API calls, and sophisticated
                data operations that don't need to be recalculated every time.
                However, excessive caching might increase memory use.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogQuestion;
