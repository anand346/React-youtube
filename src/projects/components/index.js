import React from "react";
import ReactDom from "react-dom";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

const App = () => (
  <div className="ui container comments">
    <ApprovalCard>
      <CommentDetails
        author="Alex"
        timeAgo="Today at 4:45PM"
        content="How are you ?"
        avatar="https://source.unsplash.com/random/100x100/?taj"
      />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetails
        author="Jane"
        timeAgo="Today at 4:00PM"
        content="I am fine ."
        avatar="https://source.unsplash.com/random/100x100/?lion"
      />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetails
        author="Rony"
        timeAgo="Today at 5:00PM"
        content="What about you ."
        avatar="https://source.unsplash.com/random/100x100/?nature"
      />
    </ApprovalCard>
  </div>
);

ReactDom.render(<App />, document.querySelector("#root"));
