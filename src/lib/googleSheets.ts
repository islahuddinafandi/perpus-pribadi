import type { Buku } from '../types/buku';

const API_KEY    = import.meta.env.GOOGLE_SHEETS_API_KEY;
const SHEET_ID   = import.meta.env.GOOGLE_SHEET_ID;
const SHEET_NAME = import.meta.env.GOOGLE_SHEET_NAME || 'Sheet1';

const URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;

export async function getAllBuku(): Promise {
  try {
    const res = await fetch(URL);
    if (!res.ok) throw new Error(`Sheets API error: ${res.status}`);
    const data = await res.json();
    const [headers, ...rows] = data.values as string[][];
    return rows.map((row) => {
      const obj: Record = {};
      headers.forEach((h, i) => { obj[h.trim()] = row[i] ?? ''; });
      return {
        id:           obj.id,
        judul:        obj.judul,
        penulis:      obj.penulis,
        kategori:     obj.kategori,
        tahun_terbit: obj.tahun_terbit,
        penerbit:     obj.penerbit,
        deskripsi:    obj.deskripsi,
        cover_url:    obj.cover_url,
        halaman:      Number(obj.halaman),
        bahasa:       obj.bahasa,
        status:       obj.status as Buku['status'],
      };
    });
  } catch (e) {
    console.error('Gagal fetch Google Sheets:', e);
    return [];
  }
}

export async function getBukuById(id: string): Promise {
  return (await getAllBuku()).find((b) => b.id === id);
}

export async function getKategori(): Promise {
  return [...new Set((await getAllBuku()).map((b) => b.kategori))].sort();
}