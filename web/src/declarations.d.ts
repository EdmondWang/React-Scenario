// CSS Modules 类型声明
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// 其他可能的样式文件类型声明
declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';