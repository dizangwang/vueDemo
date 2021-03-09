import Mock from 'mockjs';
Mock.mock(/\/user/, {
    code: 200,
    data: 555
})

Mock.mock(/\/add/, {
    code: 200
})

Mock.mock(/\/edit/, {
    code: 200
})

Mock.mock(/\/delete/, {
    code: 200
})

Mock.mock(/\/list/, {
    code: 200,
    count: 100,
    data: {
        list: [
            {
                orgName: "产品研发中心",
                phone: "15165166581",
                ROWSIZE: 1,
                sex: 1,
                id: 6,
                userName: "孙丛丛",
                addDate: "2018-08-31 09:11",
                orgId: 1023,
                status: 1,
            },
            {
                orgName: "辽宁公司",
                phone: "17861791785",
                ROWSIZE: 2,
                sex: 0,
                id: 4,
                userName: "王之顺",
                addDate: "2018-08-30 14:15",
                orgId: 10110009,
                status: 1,
            },

            {
                orgName: "山东百灵推广运营部",
                phone: "18501257298",
                ROWSIZE: 3,
                sex: 1,
                id: 1,
                userName: "高宗强",
                addDate: "2018-08-29 09:25",
                orgId: 10200001,
                status: 1,
            },
        ]
    }
})







