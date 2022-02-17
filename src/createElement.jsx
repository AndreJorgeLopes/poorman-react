const createElement = (tag, props, children) => {
    delete props.__source;
    delete props.__self;
    
    if (typeof tag === "function") {
        return tag(props);
    } else {
        return { tag, props, children };
    }


}

export default createElement;