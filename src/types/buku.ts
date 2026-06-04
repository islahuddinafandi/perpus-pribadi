export type StatusBaca = 'sudah-dibaca' | 'sedang-dibaca' | 'mau-dibaca';

export interface Buku {
  id: string;
  judul: string;
  penulis: string;
  kategori: string;
  tahun_terbit: string;
  penerbit: string;
  deskripsi: string;
  cover_url: string;
  halaman: number;
  bahasa: string;
  status: StatusBaca;
}