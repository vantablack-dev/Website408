import React, { useState } from 'react';
import "../css/Comment.css";

function ProductDetailPage(props) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const content = e.target.content.value;
    const newComment = { name, content };
    setComments([...comments, newComment]);
    setCommentText('');
    console.log(content);
    alert(`Ваш відгук: "${content}" додано успішно!`);
  };

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <h3>{comment.name}</h3>
            <p>{comment.content}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="content">Comment:</label>
        <textarea
          id="content"
          name="content"
          value={commentText}
          onChange={handleCommentChange}
          required
        ></textarea>
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}


export default ProductDetailPage;
