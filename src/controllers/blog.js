exports.createBlogPost = (req, res, next) => {
  const title = req.body.title;
  //   const image = req.body.image;
  const body = req.body.body;

  const result = {
    message: "Create Blog Post Success",
    data: {
      post_id: 1,
      title: title,
      //   image: image,
      body: body,
      created_at: "01/03/2023",
      author: {
        uuid: 1,
        name: "Testing",
      },
    },
  };

  res.status(200).json(result);
};
