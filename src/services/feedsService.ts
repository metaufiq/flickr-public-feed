import service from "../config/api";
import DB from "../config/db";
import FeedType from "../config/types/domain/FeedType";

const publicPhotos = async (params: any)=>{
    const res = await service.Feeds.get('photos_public.gne', { params });
    return res.data; 
}

const saveFeeds = async (params: FeedType)=>{
    const db = await DB.get()

    db.write(()=>{
        db.create("FavoriteFeed", params)
    })
    return;
}

const getFavoriteFeed = async (link: FeedType['link']) =>{
    const db = await DB.get()
    const res = db.objectForPrimaryKey('FavoriteFeed', link)
    const data: {
        [key: string]: any
    } = {}
    if (res) {
        res.entries().map((entry)=>{
                data[entry[0]] = entry[1]
        })
    }
    return Object.keys(data).length === 0 ? undefined : data;
}

const deleteFavoriteFeed = async (link: FeedType['link']) => {
    const db = await DB.get()
    let res = db.objectForPrimaryKey('FavoriteFeed', link)
    db.write(()=>{
        db.delete(res)
    })
    res = undefined;
    return;
}


const favoriteFeeds = async ()=>{

    const db = await DB.get()
    const res = db.objects('FavoriteFeed').map((feedRO)=>{
        const data: {
            [key: string]: any
           } = {}
        feedRO.entries().map((entry)=>{
            data[entry[0]] = entry[1]
        })
        return data;
    })
    return res;
}





const feedsService = {
    publicPhotos,
    saveFeeds,
    favoriteFeeds,
    getFavoriteFeed,
    deleteFavoriteFeed
}

export default feedsService