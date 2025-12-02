before pushing project, 
make sure to generate prisma client using

```bash
npx prisma generate
```

then add following lines to package.json
```json
{
    "scripts":{
        //...
        "build":"prisma generate && next build",
        "postinstall": "prisma generate"
    }
}
```
# DO NOT FORGET TO ADD app/generated/prisma TO .gitignore
