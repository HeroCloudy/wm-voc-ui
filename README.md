# wm-voc-ui wumeng 问卷管理端前端

- 程序员优雅哥 youyacoder wumeng(乌蒙，优雅哥家乡乌蒙高原、乌蒙山)系列。
- 问卷系统管理端 - 前端

## 路由规划

- 首页 `/`
- 登录 `/login`
- 注册 `/register`
- 问卷管理 `/manage`
  - 我的问卷 `/manage/list`
  - 星标问卷 `/manage/star`
  - 回收站 `/manage/trash`
- 问卷详情 `/detail`
  - 编辑问卷 `/detail/edit/:id`
  - 问卷统计 `/detail/stat/:id`


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
