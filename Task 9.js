function formatDuration(sec){
    if(sec == 0){return 'now'}else{
        const value = []
        const time = [{
            "time" : 31536000,
            "unit" : ["years","year"]
        },{
            "time" : 86400,
            "unit" : ["days","day"]
        },{
            "time" : 3600,
            "unit" : ["hours","hour"]
        },{
            "time" : 60,
            "unit" : ["minutes","minute"]
        },{
            "time" : 1,
            "unit" : ["seconds","second"]
        }]

        time.map((a) => {
            if(parseInt(sec/a["time"]) === 1){value.push(`${parseInt(sec/a["time"])} ${a["unit"][1]}`)}
            else if(sec/a["time"] > 1){value.push(`${parseInt(sec/a["time"])} ${a["unit"][0]}`)}sec %= a["time"]
        })

        for(i=0;i<value.length;i++){
            switch (i) {
                case value.length - 2:
                    value[i] = `${value[i]} and `
                break
        
                case value.length - 1:
                    value[i] = value[i]
                break
        
                default:
                    value[i] = `${value[i]}, `
                break
            }
        }return value.join("")
    }
}

console.log(`


${formatDuration(64021)}


`)