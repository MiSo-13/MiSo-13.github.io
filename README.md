# Heo Jae Hoon Portfolio

GitHub Pages에 바로 배포할 수 있는 정적 포트폴리오 사이트입니다.

## 파일 설명

- `index.html`: 실제 포트폴리오 내용
- `styles.css`: 레이아웃과 색상, 반응형 스타일
- `script.js`: 모바일 메뉴, 이메일 복사, GitHub 링크 설정

## 자주 수정할 위치

### 1. 기본 문구 수정

- 소개 문구: `index.html`의 `#intro`
- 핵심 역량 문구: `index.html`의 `#core`
- 프로젝트 내용: `index.html`의 `#projects`

대표 프로젝트는 `문제 / 해결 / 결과 / 배운 점` 순서로 유지하면 읽기 쉽고 업데이트도 편합니다.

### 2. 연락처와 GitHub 링크 수정

- 이메일 / 전화번호: `index.html`
- GitHub URL: `script.js`의 `portfolioConfig.githubUrl`

### 3. 디자인 톤 수정

- 전체 색상: `styles.css`의 `:root`
- 카드 여백 / 반응형 간격: `styles.css`

### 4. 아키텍처 다이어그램 추가

- 이미지 파일 경로 예시: `assets/diagrams/`
- 대표 프로젝트 상세 펼침 영역에서 다이어그램 placeholder를 실제 이미지로 교체하면 됩니다.

### 5. 서비스 스크린샷 추가

- 술닥술닥 이미지 파일 경로 예시: `assets/screenshots/suldak/`
- 현재는 placeholder로 들어가 있으니, 나중에 실제 이미지로 교체하면 됩니다.

## 배포 방법

이 저장소를 GitHub Pages에 연결하면 루트의 `index.html`이 바로 서비스됩니다.
