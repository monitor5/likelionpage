# LIKELION MT

멋쟁이사자처럼 MT 진행용 React/Vite 페이지입니다. 팀 소개, 점수판, 게임 진행 화면을 포함합니다.

## 로컬 실행

```bash
npm ci
npm run dev
```

## 빌드 확인

```bash
npm run build
npm run preview
```

## GitHub Pages 배포

이 프로젝트는 `monitor5/likelionpage` 레포의 GitHub Pages 배포를 기준으로 설정되어 있습니다.

- Vite `base`: `/likelionpage/`
- 배포 워크플로우: `.github/workflows/deploy.yml`
- 공개 URL: `https://monitor5.github.io/likelionpage/`

GitHub 저장소의 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 설정하면, `main` 브랜치에 push될 때 자동으로 빌드 후 배포됩니다.
