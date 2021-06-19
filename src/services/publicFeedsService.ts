import service from "../config/api";
import DB from "../config/db";
import FeedType from "../config/types/domain/FeedType";

const list = async (params: any)=>{
    const res = await service.Feeds.get('photos_public.gne', { params });
    return res.data; 
}




const publicFeedsService = {
    list
}

export default publicFeedsService