function createElement(vnode) {
  let tag = vnode.tag; //目标元素ul
  let attrs = vnode.attrs || {}; //属性
  let children = vnode.children || []; //子元素
  if (!tag) {
    return null;
  }

  let elem = document.createElement(tag);
  let attrName;

  for (attrName in attrs) {
    if (attrs.hasOwnProperty(attrName)) {
      elem.setAttribute(attrName, attrs[attrName]);
    }
  }
  children.forEach(function (childVnode) {
    elem.appendChild(createElement(childVnode));
  });
  return elem;
}

function updateChildren(vnode, newvnode) {
  let children = vnode.children || [];
  let newChildren = newvnode.children || [];
  children.forEach(function (childVnode, index) {
    let newChildrenVnode = newChildren[index];
    if (childVnode.tag === newChildrenVnode.tag) {
      updateChildren(childVnode, newChildrenVnode);
    } else {
      replaceNode(childVnode, newChildrenVnode);
    }
  });
}
