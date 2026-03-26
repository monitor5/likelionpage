# 개발많이된다 — 랜딩 페이지

개발많이된다 팀 소개를 위한 가벼운 정적 랜딩 페이지입니다.
HTML/CSS/JS만 사용해서 빠르고 간단하게 배포할 수 있습니다.

## 로컬 실행

정적 파일이라 바로 열어도 되지만, 개발 시에는 간단한 서버 실행을 권장합니다.

```bash
# Python이 있으면
python -m http.server 5500
```

브라우저에서 `http://localhost:5500` 접속

## GitHub 업로드

이미 `git init`과 커밋이 있다면 아래만 실행하면 됩니다.

1. GitHub에서 **새 저장소**를 만듭니다. (README/라이선스 추가는 **하지 않는** 편이 충돌이 없습니다.)
2. 저장소 주소를 복사한 뒤 터미널에서:

```bash
git remote add origin https://github.com/<사용자명>/<저장소명>.git
git push -u origin main
```

SSH를 쓰는 경우:

```bash
git remote add origin git@github.com:<사용자명>/<저장소명>.git
git push -u origin main
```

### 크리덴셜(인증) 문제 해결

GitHub는 **계정 비밀번호로 HTTPS push를 허용하지 않습니다.** 반드시 **Personal Access Token(PAT)** 또는 **SSH 키**를 사용해야 합니다.

**HTTPS + PAT (권장 흐름)**

1. GitHub → **Settings** → **Developer settings** → **Personal access tokens**  
   - **Fine-grained** 또는 **Tokens (classic)** 중 하나로 토큰 생성  
   - 권한: 저장소에 `Contents: Read and write` (또는 classic은 `repo`)
2. `git push` 시 비밀번호 입력란에 **GitHub 비밀번호가 아니라 방금 만든 토큰**을 붙여 넣습니다.  
   사용자 이름은 GitHub **사용자명**입니다.
3. 이 PC에는 Git Credential Manager가 있으면(`credential.helper`가 `manager` 등) 한 번 저장 후 재입력 없이 동작합니다.

**이전에 잘못된 비밀번호가 저장된 경우 (자주 나는 원인)**

- Windows **제어판** → **자격 증명 관리자** → **Windows 자격 증명** → `git:https://github.com` 항목을 **제거**한 뒤 다시 `git push` 하면 로그인/토큰 입력 창이 뜹니다.

**SSH를 쓰는 경우**

- GitHub에 등록한 공개 키가 있어야 하며, 원격 URL은 `git@github.com:...` 형식이어야 합니다.  
- `ssh -T git@github.com` 으로 연결을 먼저 확인할 수 있습니다.

## GitHub Pages로 공개 URL 만들기

1. GitHub 저장소 → **Settings** → **Pages**
2. **Build and deployment** → **Source**: **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)** → Save  
4. 잠시 후 `https://<사용자명>.github.io/<저장소명>/` 형태로 접속 가능합니다. (사용자/조직 Pages 설정에 따라 URL 규칙이 조금 다를 수 있습니다.)

## Cloudflare Pages 배포

1. Cloudflare Dashboard -> `Workers & Pages` -> `Create application` -> `Pages` -> `Connect to Git`
2. GitHub 저장소 연결
3. 빌드 설정
   - Framework preset: `None`
   - Build command: 비워두기
   - Build output directory: `/`
4. Deploy 클릭

정적 사이트라 별도 빌드 없이 바로 배포됩니다.
