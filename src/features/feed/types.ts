interface IPostForm {
  caption: string;
  file?: any;
}

interface ICommentForm {
  caption: string;
  file?: any;
}

interface IGetPostQuery {
  id?: string;
  userid?: string;
}

interface IGetPostCommentsQuery {
  id?: string;
  postid?: string;
  userid?: string;
}
