# 🧩 Drilly Web

Drilly Web là frontend app dùng React + Vite, hướng đến quản lý tài chính cá nhân, theo mô hình **Clean Architecture**.

## 🚀 Tech stack

- ⚛️ React + TypeScript + Vite
- 📦 Folder theo feature (feature-first)
- 📡 API: RESTful (kết nối với `drilly-api`)
- 🔌 State Management: Tùy chọn Redux Toolkit, Zustand, React Query

---

## ✅ Cấu trúc thư mục
src/
│
├── assets/ # Hình ảnh, icon, fonts, v.v.
├── components/ # Component tái sử dụng (button, modal,...)
├── features/ # Mỗi tính năng là 1 module độc lập
│ └── [featureName]/
│ ├── components/ # Component riêng của feature
│ ├── hooks/ # Custom hook riêng
│ ├── pages/ # Page chính của feature (gắn route)
│ ├── services/ # Gọi API (dùng repo)
│ ├── repository/ # Giao tiếp API (axios, fetch,...)
│ ├── models/ # Kiểu dữ liệu (interface, type)
│ ├── slices/ # Redux slice (nếu dùng redux)
│ └── index.ts # Export các thành phần
│
├── routes/ # Định nghĩa route toàn app
├── app/ # Cấu hình app: redux store, router, theme, i18n...
├── utils/ # Hàm dùng chung toàn app
├── constants/ # Biến tĩnh, enums, app config
├── layouts/ # Giao diện layout (AdminLayout, AuthLayout,...)
├── hooks/ # Custom hooks dùng chung
├── providers/ # Context providers
├── styles/ # Global styles (CSS/SCSS/Tailwind)
├── main.tsx # Entry point
└── App.tsx # Component gốc

---

## 🧠 Tư duy Clean Architecture

- **UI (components/pages)** chỉ hiển thị → không gọi API
- **Hooks/service** xử lý logic nghiệp vụ → gọi repository
- **Repository** là nơi gọi API → có thể mock/test/dễ thay đổi
- **Model** để typing dữ liệu từ BE
- **Tách theo feature**, không tách theo layer (feature-first)

---

## 📦 Ví dụ: `features/account/`
features/
└── account/
├── pages/
│ └── AccountPage.tsx
├── components/
│ └── AccountCard.tsx
├── services/
│ └── account.service.ts # Logic xử lý
├── repository/
│ └── account.repo.ts # Gọi axios.get/post
├── models/
│ └── account.model.ts # Kiểu dữ liệu: interface Account { ... }
├── slices/
│ └── account.slice.ts # Redux slice (nếu cần)
└── index.ts # Export các thành phần


---

## 📌 Ghi chú

- Dự án đang phát triển song song với `drilly-api` (Node.js + MySQL)
- Mục tiêu hướng đến: mở rộng tính năng, dễ bảo trì, dễ teamwork

---


