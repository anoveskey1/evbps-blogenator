import { defineType, defineField } from 'sanity';

export const metaTagType = defineType({
    name: 'metaTag',
    title: 'Meta Tag',
    type: 'document',
    fields: [
        defineField({
            name: 'id',
            title: 'Tag ID',
            type: 'number',
            validation: (Rule) => Rule.required().custom(async (value, context) => {
                const existing = await context.getClient({apiVersion: '2023-10-01'}).fetch(
                    `*[_type == "metaTag" && id == $id && _id != $currentId][0]`, {
                        id: value,
                        currentId: context.document?._id
                    })

                return existing ? 'ID must be unique' : true;
            }),
        }),
        defineField({
            name: 'label',
            title: 'Tag Label',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
    ],
});