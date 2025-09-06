import { defineType } from 'sanity';

export const galleryImageType = defineType({ 
    name: 'galleryImage', 
    type: 'document', 
    fields: [ 
        { 
            name: 'name', 
            type: 'string' 
        }, 
        { 
            name: 'image', 
            type: 'image', 
            options: { 
                hotspot: true 
            } 
        }, 
        { 
            name: 'alt', 
            type: 'string' 
        } 
    ] 
});