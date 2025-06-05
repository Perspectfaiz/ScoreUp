import { supabase } from './supabaseClient';

const BUCKET = 'pdf';

export async function uploadPDF(file) {
  const filePath = `public/${Date.now()}_${file.name}`;
  const { data, error } = await supabase.storage
    .from(BUCKET)
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
    });
  if (error) throw error;
  return data.path;
}

export async function uploadThumbnail(file) {
  const filePath = `thumbnails/${Date.now()}_${file.name}`;
  const { data, error } = await supabase.storage
    .from(BUCKET)
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
    });
  if (error) throw error;
  return data.path;
}

export function getPDFUrl(path) {
  return supabase.storage.from(BUCKET).getPublicUrl(path).data.publicUrl;
} 