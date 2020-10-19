const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //Inserir Dados na tabela
    await saveOrphanage(db, {
        lat: "-22.2882196",
        lng: "-42.5673472",
        name: "Lar dos Meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "992145243",
        images:[
            "https://images.unsplash.com/photo-1600645217514-212534ed478c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
            "https://images.unsplash.com/photo-1600441162448-df8f70e5fc14?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        openning_hours: "Horário de visitas Das 8h até 18h",
        open_on_weekends: "0"
    });    
    
    //Consultar Dados na tabela
    const selectedOprhanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOprhanages)
    
    //Consultar somente um orfanato pelo ID
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    //Deletar Dado na tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id='4'"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id='5'"))

   

})