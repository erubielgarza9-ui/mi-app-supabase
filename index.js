import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://emdobshmtnjcmvwykthg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtZG9ic2htdG5qY212d3lrdGhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM2NjE3MDcsImV4cCI6MjEwOTIzNzcwN30.wkEbU15pPece4073tR2alIugX_w0tygIbBYN6rHVtHc'

const supabase = createClient(supabaseUrl, supabaseKey)

// 1. Función para insertar datos
async function insertarEstudiante(nombre, carrera) {
  const { data, error } = await supabase
    .from('estudiantes')
    .insert([{ nombre: nombre, carrera: carrera }])

  if (error) {
    console.log('Error al insertar:', error)
  } else {
    console.log('Estudiante insertado con éxito:', data)
  }
}

// 2. Función para obtener estudiantes
async function obtenerEstudiantes() {
  const { data, error } = await supabase
    .from('estudiantes')
    .select('*')

  if (error) {
    console.log('Error:', error)
  } else {
    console.log('Datos actuales:', data)
  }
}

// Ejecutar pruebas
await insertarEstudiante('Erubiel Garza', 'Ingeniería en Administración y Sistemas');
await obtenerEstudiantes(); 