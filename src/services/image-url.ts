// 获取游戏图片清晰度更小的版本以加快获取与显示速度
const getCroppedImageUrl = (url: string) => {
    if (!url) return "";
    const target = "media/";
    const index = url.indexOf(target) + target.length;
    const res = url.slice(0, index) + "crop/600/400/" + url.slice(index);
    //console.log(res);
    return res;
};

export default getCroppedImageUrl;
