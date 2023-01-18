let mapCatalog = new Map();
mapCatalog.set("IPhone 14ProMax", "1000$");
mapCatalog.set("IPhone 13ProMax", "900$");
mapCatalog.set("IPhone 12ProMax", "700$");
mapCatalog.set("IPhone 11", "600$");
mapCatalog.set("IPhone XR", "500$");

mapCatalog.forEach((value, key, map)=>{
    console.log(`Телефон(ключ): ${key} \n
Цена(значение): ${value}`)
})