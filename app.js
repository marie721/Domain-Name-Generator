let pronouns = ['they','he','she','it'];
let adjs = ['funny','little','clumsy','intelligent'];
let nouns = ['jogger','racoon','frog','sailor'];
let exts = ['.com','.org','.edu','.gov']

for (let pronoun of pronouns) {
    for (let adj of adjs) {
        for (let noun of nouns) {
            for (let ext of exts) {
                console.log(`${pronoun + adj + noun + ext}`);     
            }
            
        }
    }
    
}



// console.log("Hello World");
