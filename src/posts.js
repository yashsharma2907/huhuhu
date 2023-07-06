import react from "react";
import {formatISO9075} from "date-fns";
// import TimeAgo from 'timeago-react';
import Datetime from 'react-datetime';
function Post({ post}) {
  var createdAt = post.createdAt;
  // var formatted = format(createdAt,"dd/MM/yyyy HH:mm:ss");
  // console.log(createdAt);
  
  var title = post.title;
  var summary = post.summary;
  var author = post.author.username;
  var cover = post.cover;
  console.log(cover);
  return (
    <div className="post">
      <div className="image">
        <img src={'http://localhost:4000/api/'+cover}></img>
      </div>
      <div className="text">
        <h2>{title}</h2>
        <p className="info">
          <a className="author">{author}</a>
          {/* <time>{formatISO9075(new Date(createdAt))}</time> */}
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  )
}
export default Post;