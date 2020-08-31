

let p = ["A", "A", "P", "P", "A", "A", "A", "P", "P", "A", "A", "P", "A", "P", "A", "A", "P", "P", "P", "A", "A" ];
let a = {A:0,P:0};
let p_count = 0;


        for(let i  = 0; i < p.length; i++) {
           if(p[i] == "P") p_count++;

            if(p[i] == p[i + 1]) 
               a[p[i]] = a[p[i]]+ 1;
        }

        if(p_count > p.length - p_count) {
            console.log("Student is regular");
        } else if(a.A > a.P) {
            console.log("Student is regularly ireggular")
        } else {
            console.log("Student is irregular");
        }

