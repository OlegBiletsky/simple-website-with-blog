"use strict";
// eslint-disable-next-line no-unused-vars
const React = require("react");
module.exports = (props) => {
    const posts = props.posts.map((post) => (React.createElement("section", { key: post.title },
        React.createElement("hr", null),
        React.createElement("h2", null, post.title),
        React.createElement("time", { dateTime: post.date.toISOString() }, post.date.toDateString()),
        React.createElement("p", null, post.content))));
    return (React.createElement("html", { lang: "en" },
        React.createElement("head", null,
            React.createElement("title", null, "simple-website-with-blog"),
            React.createElement("meta", { name: "viewport", content: "width=device-width" }),
            React.createElement("meta", { name: "description", content: "The blog of a simple web site" })),
        React.createElement("body", null,
            React.createElement("h1", null,
                React.createElement("a", { href: "/blog" }, "The blog of simple-website-with-blog")),
            posts)));
};
