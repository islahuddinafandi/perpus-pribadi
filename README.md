# perpus-pribadi
perpus-pribadi/
├── .env
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── src/
│   ├── lib/
│   │   └── googleSheets.ts
│   ├── types/
│   │   └── buku.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── components/
│   │   ├── BukuCard.astro
│   │   ├── StatusBadge.astro
│   │   ├── SearchFilter.astro
│   │   └── StatRingkas.astro
│   └── pages/
│       ├── index.astro          # katalog semua buku
│       └── buku/[id].astro      # detail buku
└── public/
    └── favicon.svg

1. Inisialisasi Git di folder project
cd perpus-pribadi git init git add . git commit -m "first commit"

2. Buat repo baru di GitHub
Buka github.com/new → isi nama repo misal perpus-pribadi → klik Create repository. Jangan centang README.

3. Hubungkan dan push
git remote add origin https://github.com/USERNAME/perpus-pribadi.git git branch -M main git push -u origin main

Ganti USERNAME dengan username GitHub kamu.


git remote add origin https://github.com/USERNAME/perpus-pribadi.git git branch -M main git push -u origin main
Ganti USERNAME dengan username GitHub kamu.
