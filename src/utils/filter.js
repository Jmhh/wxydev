const filter = (arr) => {
    // console.log(this.$store.state.admin.menu)
    let data = arr;
    data.forEach(item => {
        delete item.children;
    });
    let map = {};
    data.forEach(item => {
        item["label"] = item["text"];
        map[item.id] = item;
    });
    let val = [];
    data.forEach(item => {
        let parent = map[item.pid];
        if (parent) {
            (parent.children || (parent.children = [])).push(item);
        } else {
            val.push(item);
        }
    });
    return val;
}
export default {
    filter
}