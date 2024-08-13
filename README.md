# Performance Practice

## 성능개선 이전 최초 측정 (/w Pagespeed Insights)

### 측정 1회차

![Initial-01-mobile](image.png)
![Initial-01-desktop](image-1.png)

### 측정 2회차

![Initial-02-mobile](image-2.png)
![Initial-02-desktop](image-3.png)

---

## 성능개선 이후 측정 (/w Pagespeed Insights)

### Mobile

![After-Mobile](image-4.png)

### Desktop

![After-Desktop](image-5.png)

## 성능개선 이후 측정 (/w GitHub Actions - lhci)

| key            | score  |
| -------------- | ------ |
| performance    | 🟢 100 |
| accessibility  | 🟢 100 |
| best-practices | 🟢 92  |
| seo            | 🟢 100 |

---

### 개선 처리별 개선 결과

| commit  | result                                                                                                              |
| ------- | ------------------------------------------------------------------------------------------------------------------- |
| f60b762 | 이미지 로딩 속도 향상 및 대역폭 사용량 감소를 위한 개선                                                             |
|         | 1) JPG 이미지를 WebP 형식으로 변환 <br /> 2) `<picture>` 태그를 사용하여 적합한 사이즈의 이미지만을 불러오도록 설정 |
|         | - lhci `performance`점수 73 -> 95 <br /> - 이미지 파일 크기 평균 18%정도로 감소                                     |
|         | - 하위호환성을 위해 `<picture>` 태그 내에 `<img>` fallback을 추가                                                   |
| a897c3d | 폰트 로딩 속도 개선 및 외부 의존성 감소                                                                             |
|         | CDN에서 제공되던 폰트를 static WOFF2 파일로 변경하여 서버에서 직접 제공                                             |
|         |                                                                                                                     |
|         |                                                                                                                     |
