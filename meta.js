/**
 * Created by lzq on 2017/11/13.
 */

module.exports = {
    questions: [
        {
            type: "input",
            name: "projectName",  // 必须有
            message: "input the projectName",
            default: "lzqProject"  // 在input类型下，有效果，如果是confirm是无效的；

        },
        {
            type: "confirm",
            name: "eslint",
            message: "confirm your yes or no"
        },
        {
            type: "list",
            name: "choice",
            message: "select one",
            choices: [
                {
                    name: "selectA",
                    value: "A",  // 选中以后，真实反到answer的值
                    short: "a"  // 选中以后，展示给用户的内容
                },
                {
                    name: "selectB",
                    value: "B",
                    short: "b"
                }
            ]
        }
    ],
    filter:{
        "scripts/*/*.js":"eslint"
    }
};