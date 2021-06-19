import DB from "../config/db";
import FeedType from "../config/types/domain/FeedType";

const add = async (params: FeedType)=>{
    const db = await DB.get()

    db.write(()=>{
        db.create("FavoriteFeed", params)
    })
    return;
}

const get = async (link: FeedType['link']) =>{
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

const remove = async (link: FeedType['link']) => {
    const db = await DB.get()
    let res = db.objectForPrimaryKey('FavoriteFeed', link)
    db.write(()=>{
        db.delete(res)
    })
    res = undefined;
    return;
}


const list = async ()=>{

    const db = await DB.get()
    const res = db.objects('FavoriteFeed').map((feedRO)=>{
        const data: {
            [key: string]: any
           } = {}
        feedRO.entries().map((entry)=>{
            data[entry[0]] = entry[1]
        })
        return data;
    }) as FeedType[];
    return res;
}





const favoriteFeedsService = {
    remove,
    add,
    get,
    list
}

export default favoriteFeedsService