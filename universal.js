function findAll(startYear, sType, grade){
    let start = new Date(startYear.toString() + "-09-01")
    let end  = new Date((startYear + 1).toString() + "-06-01")
    let niitOdor = 0
    let hicheellehTsag = 0
    let sonirhsonTsag = 0
    let dadlagiinTsag = 0
    
    let current  = start
    while (current < end) {
        if (sType === "old") {
            if (current.getDay() != 0) {
                niitOdor += 1

                if (grade >= 1 && grade <= 3) {
                    hicheellehTsag += 4 * 45
                } else if (grade >= 4 && grade <= 10) {
                    hicheellehTsag += 6 * 45
                } else {
                    hicheellehTsag += 3 * 90
                }

                if (current.getDay() === 1) {
                    let e = new Date(current.getTime() + 7 * 24 * 60 * 60 * 1000)
                    if (e <= end) {
                        if (grade >= 1 && grade <= 3) {
                            sonirhsonTsag += 4 * 45
                        } else if (grade >= 4 && grade <= 10) {
                            sonirhsonTsag += 4 * 45
                        }
                    }
                }
                
            }
            if (grade > 10) {
                dadlagiinTsag = 8 * 5 * 8 + 8 * 1 * 6
            }
        } else if (sType === "new") {
            if (current.getDay() != 0 && current.getDay() != 6) {
                niitOdor += 1

                if (grade >= 1 && grade <= 5) {
                    hicheellehTsag += 30 * 4
                } else if (grade >= 6 && grade <= 12) {
                    hicheellehTsag += 35 * 6
                } else {
                    hicheellehTsag += 90 * 3
                }

                if (current.getDay() === 1) {
                    let e = new Date(current.getTime() + 7 * 24 * 60 * 60 * 1000)
                    if (e <= end) {
                        if (grade >= 1 && grade <= 5) {
                            sonirhsonTsag += 4 * 30
                        } else if (grade >= 6 && grade <= 12) {
                            sonirhsonTsag += 4 * 35
                        }
                    }
                }
            }
            if (grade > 12) {
                dadlagiinTsag = 8 * 5 * 8
            }
        }

        current.setDate(current.getDate() + 1)
    }


    if (sType === "old") {
        if (grade > 10) {
            hicheellehTsag -= 90 * 3 * 48
        }
    } else if (sType === "new") {
        if (grade > 12) {
            hicheellehTsag -= 90 * 3 * 40
        }
    }
    //console.log(niitOdor)
    //console.log(hicheellehTsag / 60)
    //console.log(sonirhsonTsag /  60)
    //console.log(dadlagiinTsag / 60)
    hicheellehTsag /= 60
    sonirhsonTsag /= 60
    
    return {
        niitOdor,
        hicheellehTsag,
        sonirhsonTsag,
        dadlagiinTsag
    }
}


findAll(1978, "old", 1)

export default findAll;