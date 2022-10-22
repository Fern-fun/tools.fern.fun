import React from "react";

import "./JsonViewer.scss";

const isString = (val) => {
  return typeof val === "string";
};
const isNumber = (val) => {
  return typeof val === "number";
};
const isBoolean = (val) => {
  return typeof val === "boolean";
};
const isUndefined = (val) => {
  return typeof val === "undefined";
};
const isArray = (val) => {
  return toString.call(val) === "[object Array]";
};
const isObject = (val) => {
  return toString.call(val) === "[object Object]";
};
const isNull = (val) => {
  return toString.call(val) === "[object Null]";
};
const getTypeClass = (val) => {
  if (typeof val === "[object Null]") {
    return "Null";
  } else if (typeof val === "[object Object]") {
    return "Obj";
  } else if (typeof val === "[object Array]") {
    return "Obj";
  }
  return (typeof val).charAt(0).toUpperCase() + (typeof val).slice(1);
};

function createChildrenItem(key, value, children, type) {
  if (type === "object") {
    return (
      <div key={key}>
        <span>
          {key}
          {" { "}
          <span className="jv-Number">{Object.keys(value).length}</span>
          {" }"}
        </span>
        <div className="jv-folder">
          {isArray(children) ? children.map((item) => item) : null}
        </div>
      </div>
    );
  } else {
    return (
      <div key={key}>
        <span>
          {key}
          {" [ "}
          <span className="jv-Number">{Object.keys(value).length}</span>
          {" ]"}
        </span>
        <div className="jv-folder">
          {isArray(children) ? children.map((item) => item) : null}
        </div>
      </div>
    );
  }
}

const handleChildren = (key = null, value) => {
  let html = [];

  if (isObject(value)) {
    for (let item in value) {
      let _key = item,
        _val = value[item];

      html.push(handleItem(_key, _val));
    }
    return createChildrenItem(key, value, html, "object");
  } else {
    for (let i = 0; i < value.length; i++) {
      html.push(handleItem(i, value[i]));
    }
    return createChildrenItem(key, value, html, "array");
  }
};

const createItem = (key, value) => {
  if (isString(value)) {
    return (
      <span key={key}>
        {key}
        {": "}
        <span className={"jv-" + getTypeClass(value)}>{`"${value}"`}</span>
      </span>
    );
  } else {
    return (
      <span key={key}>
        {key}
        {": "}
        <span className={"jv-" + getTypeClass(value)}>{`${value}`}</span>
      </span>
    );
  }
};

const handleItem = (key, value) => {
  if (isObject(value)) {
    return handleChildren(key, value);
  } else if (isArray(value)) {
    return handleChildren(key, value);
  }

  return createItem(key, value);
};

function JsonViewer({ json }) {
  const [viewer, setViewer] = React.useState([]);

  React.useEffect(() => {
    for (let item in json) {
      let key = item,
        value = json[item];
      setViewer((x) => [...x, handleItem(key, value)]);
    }
  }, []);

  return <div className="jv-con">{viewer}</div>;
}

export default JsonViewer;
