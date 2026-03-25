# Kwangwoon Likelion Univ. Landing Page

광운대학교 멋쟁이사자처럼 대학 소개를 위한 가벼운 정적 랜딩 페이지입니다.
HTML/CSS/JS만 사용해서 빠르고 간단하게 배포할 수 있습니다.

## 로컬 실행

정적 파일이라 바로 열어도 되지만, 개발 시에는 간단한 서버 실행을 권장합니다.

```bash
# Python이 있으면
python -m http.server 5500
```

브라우저에서 `http://localhost:5500` 접속

## GitHub 업로드

```bash
git init
git add .
git commit -m "Create Kwangwoon Likelion landing page"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

## Cloudflare Pages 배포

1. Cloudflare Dashboard -> `Workers & Pages` -> `Create application` -> `Pages` -> `Connect to Git`
2. GitHub 저장소 연결
3. 빌드 설정
   - Framework preset: `None`
   - Build command: 비워두기
   - Build output directory: `/`
4. Deploy 클릭

정적 사이트라 별도 빌드 없이 바로 배포됩니다.
