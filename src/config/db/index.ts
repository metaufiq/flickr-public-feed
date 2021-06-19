import Realm from "realm";
import FavoriteFeedSchema from "./schema/Feed";
import MediaSchema from "./schema/Media";

const get = async ()=>await Realm.open({
    path: "realm",
    schema: [FavoriteFeedSchema, MediaSchema]
});

const DB = {
    get
}

export default DB;