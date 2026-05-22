# LIKELION MT

React/Vite로 만든 LIKELION MT 진행용 페이지입니다. 팀 소개, 점수판, 게임 진행 화면을 포함합니다.

## Local

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages

이 프로젝트는 `monitor5/likelionpage` 레포의 GitHub Pages 배포도 지원합니다.

- Workflow: `.github/workflows/deploy.yml`
- Public URL: `https://monitor5.github.io/likelionpage/`
- Vite base: `/likelionpage/`

GitHub 저장소의 **Settings -> Pages -> Build and deployment -> Source**를 **GitHub Actions**로 설정하면 `main` 브랜치에 push될 때 자동으로 빌드 후 배포됩니다.

## Cloudflare Pages

`likelion.uk`처럼 루트 도메인에 배포할 때는 반드시 빌드 결과물인 `dist`를 배포해야 합니다. 저장소 루트가 배포되면 브라우저가 `/src/main.jsx`를 직접 요청하고, Cloudflare가 `text/jsx`로 응답해서 모듈 로드가 차단됩니다.

Cloudflare Pages 설정:

- Production branch: `main`
- Build command: `npm run build:cloudflare`
- Build output directory: `dist`

배포 후 `https://likelion.uk/`의 HTML 안에는 `/src/*.jsx`가 없어야 하고, `/assets/app.js`와 `/assets/app.css`를 가리켜야 합니다.
