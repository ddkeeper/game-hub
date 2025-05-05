// 获取游戏图片清晰度更小的版本以加快获取与显示速度
import noImage from "../assets/no-image-placeholder.jpg";
const getCroppedImageUrl = (url: string) => {
    if (!url) return noImage;
    const target = "media/";
    const index = url.indexOf(target) + target.length;
    const res = url.slice(0, index) + "crop/600/400/" + url.slice(index);
    //console.log(res);
    return res;
};

export default getCroppedImageUrl;
