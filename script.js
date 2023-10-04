const fs = require('fs');
const replaceThis = "harry";
const replaceWith = "afnan";
const preview = true;
try {
    fs.readdir(".", (err, data) => {

        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            let newfile = "data/" + item.replaceAll(replaceThis, replaceWith);

            if (!preview) {
                fs.rename("data/" + item, newfile, () => {
                    console.log("Rename Success");
                })
            }
            else {

                if ("data/" + item !== newfile) {

                    console.log("/data" + item + " will be renamed to " + newfile);
                }
            }
        }
    })
} catch (err) {
    console.error(err);
}




