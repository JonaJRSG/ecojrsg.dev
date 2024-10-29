// 1. Importa las utilidades de `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define tu colección(es)
const blog = defineCollection({ 
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        img: z.string().url(),
        descriptionLay: z.string(),
        autores: z.array(z.string().default("Anonimo")),
        lastUp: z.string(),
        menu: z.array(z.string()).optional(),
        subMenu: z.array(z.array(z.string())).optional()
    })
});
// 3. Exporta un único objeto `collections` para registrar tu(s) colección(es)
//    Esta clave debe coincidir con el nombre de tu directorio de colección en "src/content"
export const collections = {
    'blog': blog 
};