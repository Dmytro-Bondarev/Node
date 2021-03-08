const fs = require('fs');
const path = require('path');
const Male = path.join(__dirname, '1800');
const Female = path.join(__dirname, '2000');

// const femeletest = Femele
// const maletest = Mele
// console.log(maletest)
// console.log(femeletest)

function sort (Male,Female) {
    fs.readdir (Female,(err, files) => {

        if (err){
            console.log(err);
            return;
        }
        files.map(file => {
            fs.readFile(path.join(Female, file), ((err, info) =>{

                    if (err){
                        console.log(err);
                        return;
                    }
                    const json = JSON.parse(info.toString());
                    if (json.gender ==='male'){
                    fs.rename(path.join(Female,file),path.join(Male,file),err =>{
                        if (err) {
                            console.log(err);
                        }
                        })
                    }
                })
            )
            }
        )

    })

    fs.readdir (Male,(err, files) => {

        if (err){
            console.log(err);
            return;
        }
        files.map(file => {
                fs.readFile(path.join(Male, file), ((err, info) =>{

                        if (err){
                            console.log(err);
                            return;
                        }
                        const json = JSON.parse(info.toString());
                        if (json.gender ==='female'){
                            fs.rename(path.join(Male,file),path.join(Female,file),err =>{
                                if (err) {
                                    console.log(err);
                                }
                            })
                        }
                    })
                )
            }
        )

    })



}


sort(Male,Female);