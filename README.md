# Portfolio Website

Một trang web giới thiệu bản thân (Portfolio) đơn giản, hiện đại và responsive, xây dựng bằng React + TanStack Start + Tailwind CSS.

## Yêu cầu hệ thống

- [Node.js](https://nodejs.org/) >= 18 (khuyến nghị)
- [Bun](https://bun.sh/) >= 1.0 (nếu dùng Bun)
- [pnpm](https://pnpm.io/) >= 9 (nếu dùng pnpm)
- Hoặc npm/yarn

## Cách chạy project

### 1. Giải nén source code

Giải nén file `portfolio-source-code.zip` vào một thư mục trên máy tính.

```bash
cd thu-muc-project
```

### 2. Cài đặt dependencies

**Dùng Bun (khuyến nghị):**
```bash
bun install
```

**Hoặc dùng pnpm:**
```bash
pnpm install
```

**Hoặc dùng npm:**
```bash
npm install
```

**Hoặc dùng yarn:**
```bash
yarn install
```

### 3. Chạy server phát triển

**Dùng Bun:**
```bash
bun dev
```

**Hoặc dùng pnpm:**
```bash
pnpm dev
```

**Hoặc dùng npm:**
```bash
npm run dev
```

**Hoặc dùng yarn:**
```bash
yarn dev
```

Server sẽ khởi động tại: **http://localhost:3000**

Mở trình duyệt và truy cập địa chỉ trên để xem website.

---

## Các lệnh hữu ích khác

| Lệnh | Mô tả |
|------|-------|
| `bun dev` / `pnpm dev` / `npm run dev` | Chạy server phát triển với hot reload |
| `bun run build` / `pnpm build` / `npm run build` | Build project cho production |
| `bun run preview` / `pnpm preview` / `npm run preview` | Xem trước bản build production |
| `bun run lint` / `pnpm lint` / `npm run lint` | Kiểm tra lỗi code với ESLint |
| `bun run format` / `pnpm format` / `npm run format` | Format code với Prettier |

## Cấu trúc project

```
├── src/
│   ├── components/      # Các component React (Navbar, UI...)
│   ├── hooks/           # Custom hooks (useTheme...)
│   ├── routes/          # Các trang (index.tsx = trang chủ)
│   ├── styles.css       # Style toàn cục + design tokens
│   └── ...
├── public/              # Assets tĩnh
├── package.json         # Dependencies & scripts
├── vite.config.ts       # Cấu hình Vite
└── README.md            # File này
```

## Deploy lên Vercel / Netlify

### Vercel
1. Push code lên GitHub
2. Truy cập [vercel.com](https://vercel.com) → Import project
3. Chọn framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`

### Netlify
1. Push code lên GitHub
2. Truy cập [netlify.com](https://netlify.com) → Add new site
3. Chọn repository và deploy

---

**Xây dựng với ❤️ sử dụng React, Tailwind CSS và Lovable**
