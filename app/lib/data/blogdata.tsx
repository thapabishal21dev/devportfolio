export interface IAllBlogData {
  postId: number;
  postTitle: string;
  postDate: string;
  postContent: IContent[];
  postImg?: string;
  postReactions: IPostReactions[];
}

export interface IContent {
  contentTitle?: string;
  contentSubTitle?: string;
  contentDiscription?: string;
  contentSubDiscription?: string;
  contentImage?: string;
}

export interface IPostReactions {
  like?: string;
  wow?: string;
  love?: string;
  rocket?: string;
  cup?: string;
}

export const AllBlogData: IAllBlogData[] = [
  {
    postId: 1,
    postTitle: "About JavaScript",
    postDate: "2024-2-21",
    postContent: [
      {
        contentTitle: "contentTitle",
        contentDiscription:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perferendis ea at nesciunt tempore ducimus laborum asperiores repellendus necessitatibus sunt illum, impedit ipsum quidem tempora aut iste id qui blanditiis.",
      },
    ],
    postReactions: [
      {
        like: "1",
        wow: "2",
        love: "1",
        rocket: "0",
        cup: "0",
      },
    ],
  },
  {
    postId: 2,
    postTitle: "About TypeScript",
    postDate: "2024-2-21",
    postContent: [
      {
        contentTitle: "contentTitle",
        contentDiscription:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perferendis ea at nesciunt tempore ducimus laborum asperiores repellendus necessitatibus sunt illum, impedit ipsum quidem tempora aut iste id qui blanditiis.",
      },
    ],
    postReactions: [
      {
        like: "2",
        wow: "5",
        love: "0",
        rocket: "3",
        cup: "0",
      },
    ],
  },
  {
    postId: 3,
    postTitle: "About NextJs",
    postDate: "2024-2-21",
    postContent: [
      {
        contentTitle: "contentTitle",
        contentDiscription:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perferendis ea at nesciunt tempore ducimus laborum asperiores repellendus necessitatibus sunt illum, impedit ipsum quidem tempora aut iste id qui blanditiis.",
      },
    ],
    postReactions: [
      {
        like: "2",
        wow: "0",
        love: "5",
        rocket: "0",
        cup: "2",
      },
    ],
  },
  {
    postId: 4,
    postTitle: "About ReactJs",
    postDate: "2024-2-21",
    postContent: [
      {
        contentTitle: "contentTitle",
        contentDiscription:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perferendis ea at nesciunt tempore ducimus laborum asperiores repellendus necessitatibus sunt illum, impedit ipsum quidem tempora aut iste id qui blanditiis.",
      },
    ],
    postReactions: [
      {
        like: "4",
        wow: "0",
        love: "1",
        rocket: "0",
        cup: "2",
      },
    ],
  },
];
