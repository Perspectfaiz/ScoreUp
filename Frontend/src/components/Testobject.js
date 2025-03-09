const question1={
    state:0,
    qstat:"ksndjsbd sdknsdnaksdn scxknsdicjHere is the Question ljayegv uhleuh fpugh lf hnohliawpofu higw epop DFLIGA PUWPW ",
    image:"./../public/upColor-3.png",
    options:['H','T','M','L'],
    ans:null
};
const question={
    state:0,
    qstat:`The quadratic formula is: a Here is the Question ljayegv uhleuh fpugh lf hnohliawpofu higw epop DFLIGA PUWPW EPOHASL VGLIUDFGli ugeiuhpi p ph iuhpieush gi pelvhifvh ileguhgeiguh `,

    image:"#",
    options:['D','B','M','S'],
    ans:null
};
const question2={
    state:0,
    qstat:" PDPFDPFPFPFPFPFPF Here is the Question ljayegv uhleuh fpugh lf hnohliawpofu higw epop DFLIGA PUWPW EPOHASLV GLIUDFGli ugeiuhpi p ph iuhpieush gi pelvhifvh ileguhge iguh ",
    image:"./../public/account.png",
    options:['Pratik','Faiz','Akash','Manish'],
    ans:null
};
const sub1={
    subName:"Physics",
    list:[question1,question,question2,question,question1,question,question,question]
};
const sub2={
    subName:"Chemistry",
    list:[question,question2]
};
const testObj={
    details:{
        title:"Test Template ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien ut ipsum tincidunt lacinia. Nullam nec purus auctor consectetur elit. Suspendisse nec sapien ut ipsum tincidunt lacinia. Nullam nec purus auctor",
        id:"test_id.1",
        teacherId:"T.userName",
        teachername:"yajya parama",
        time:90,
        attempted:5,
        avgScore: 69, 
        tag:"All"
    },
    section:[sub1, sub2, sub1]
    
};
export default testObj;