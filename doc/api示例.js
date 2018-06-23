// api/query/{userId} 查询单个学生成绩
// mock url: http://rap2api.taobao.org/app/mock/17913/api/query?userId=0001
// method GET
// response body
{
    userId: "0001",
    score:  98   
}

// api/queryAll 查询所有学生成绩
// mock url: http://rap2api.taobao.org/app/mock/17913/api/queryAll
// method GET
// response body
{
    scores: [
        {
            userId: "0001",
            score:  98
        },
        {
            userId: "0002",
            score:  87
        }
    ]
}


// api/fetchQuestions 获取试题
// mock url: http://rap2api.taobao.org/app/mock/17913/api/fetchQuestions
// method GET
// response body
{
    choices: [
        {
            id: "001",
            content: "which color do you like?",
            options: {
                a: "red",
                b: "yllow",
                c: "green",
                d: "blue"
            }
        },
        {
            id: "002",
            content: "which annimal do you like?",
            options: {
                a: "dog",
                b: "cat",
                c: "bird",
                d: "ottor"
            }
        }
    ],
    t_or_f: [
        {
            id: "001",
            content: "Can yellow and red be blue?"
        },
        {
            id: "002",
            content: "Can 1 plus 1 bigger than 2?"
        }
    ]
}

// api/submit 提交试题
// mock url: http://rap2api.taobao.org/app/mock/17913/api/submit
// method POST
//request body
{   
    userId:  "0001",
    choices: [
        {
            id: "001",
            answer: "a"
        },
        {
            id: "002",
            answer: "c"
        }
    ],
    t_or_f: [
        {
            id: "001",
            answer: "t"
        },
        {
            id: "002",
            answer: "f"
        }
    ]
}
//response body
{
    userId: '0001',
    score:  98
}