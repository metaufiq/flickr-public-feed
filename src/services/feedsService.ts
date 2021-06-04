import service from "../config/api";

const publicPhotos = async (params: any)=>{
    const res = await service.Feeds.get('photos_public.gne', { params });
    return res.data; 
}


const feedsService = {
    publicPhotos,
}

export default feedsService