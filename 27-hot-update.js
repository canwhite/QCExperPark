let a = (()=>{}).__proto__.constructor(`console.log('123')`)
a();