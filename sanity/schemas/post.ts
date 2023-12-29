export default {
    name: "post",
    type: "document",
    title: "Post",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title"
        },
        {
            name: "date",
            type: "string",
            title: "Date"
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {
                source: "title"
            }
        },
        {
            name: "content",
            type: "array",
            title: "Content",
            of:[
                {
                    type: "block"
                },{
                    type: "image",
                    fields: [
                        {
                            type: "text",
                            name: "alt",
                            title: "Alternative Title"
                        }
                    ]
                }
            ]
        },
    ]
}