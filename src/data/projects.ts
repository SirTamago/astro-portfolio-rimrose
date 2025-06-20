// src/data/projects.ts
export const PROJECTS = [
  {
    sys: { id: '1' },
    fields: {
      name: "个人主页",
      description: "我的 Astro 技术栈主页",
      website: "https://rimrose.dev",
      repositorio: "https://github.com/yourname/astro-home",
      img: {
        fields: {
          file: {
            url: "https://img.rimrose.work/20250417154750224.png"
          },
          title: "主页截图"
        }
      }
    }
  },
  {
    sys: { id: '2' },
    fields: {
      name: "图像处理工具",
      description: "基于 WASM 的图像处理网页工具",
      website: "https://tools.rimrose.dev/image-editor",
      repositorio: "https://github.com/yourname/image-tools",
      img: {
        fields: {
          file: {
            url: "https://img.rimrose.work/20250417154750224.png"
          },
          title: "工具截图"
        }
      }
    }
  },
]
