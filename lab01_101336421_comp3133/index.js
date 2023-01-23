const fs = require('fs')

var countries = fs.readFileSync("input_countries.csv", "utf-8")


try {
    fs.unlink("canada.txt")
    fs.unlink("usa.txt")
}
catch (e)
{
    console.log("File doesn't exist")
}

//Canada
countries.split(/\r?\n/).forEach(line => {
    if(line.includes("Canada"))
    {
        fs.appendFileSync("canada.txt", `${line} \n`)
    }
})

//United States
countries.split(/\r?\n/).forEach(line => {
    if(line.includes("United States"))
    {
        fs.appendFileSync("usa.txt", `${line} \n`)
    }
})