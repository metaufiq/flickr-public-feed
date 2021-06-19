import { ObjectSchema } from "realm";



const FavoriteFeedSchema: ObjectSchema = {
    name: "FavoriteFeed",
    properties: {
      author: "string",
      author_id: "string",
      date_taken: "string",
      description: "string",
      link: "string",
      media: "Media?",
      published: "string",
      tags: "string",
      title: "string"
    },
    primaryKey: "link"
};

export default FavoriteFeedSchema