const canadaFileName = "canada.txt";
const usaFileName = "usa.txt";
const fs = require("fs");

function deleteFile(name) {
    try {
        fs.unlinkSync(name);
        console.log(`"${name}" was DELETED.`);
    } catch (error) {
        console.log(`"${name}" was NOT deleted:\n\t${error.message}`);
    }
}

deleteFile(canadaFileName);
deleteFile(usaFileName);

//2nd
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